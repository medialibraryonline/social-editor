import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import Papa from 'papaparse';
import { RisorsaTemplate } from './templates/RisorsaTemplate';
import { ListaTemplate } from './templates/ListaTemplate';
import { ListaEbookTemplate } from './templates/ListaEbookTemplate';
import { ListaAudiolibriTemplate } from './templates/ListaAudiolibriTemplate';
import { ComunicazioneTemplate } from './templates/ComunicazioneTemplate';
import { CanvasIsolator } from './CanvasIsolator';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Download, Upload, Info, X } from 'lucide-react';
import LogoMlol from '@/imports/LogoMlol';
import { Checkbox } from './ui/checkbox';
import { RisorsaIcon, ListaEbookIcon, ListaAudiolibriIcon, ComunicazioneIcon } from './TemplateIcons';
import svgPaths from '@/imports/svg-nh0klp6fcg';

export type ColorScheme = 'chiaro' | 'medio' | 'scuro';
export type TemplateType = 'risorsa' | 'list-ebook' | 'list-audiolibri' | 'comunicazione';
export type Composizione = 'none' | 'comp1' | 'comp2' | 'comp3';

interface PortalData {
  name: string;  // Display name from "name" column
  url: string;   // Portal URL from "url" column  
  logoUrl: string; // Logo URL from "logo" column
}

interface EditorState {
  templateType: TemplateType;
  colorScheme: ColorScheme;
  composizione: Composizione;
  logoPortale: string | null;
  nomePortale: string;
  // Risorsa specific
  imgRisorsa: string | null;
  risorsaTitle: string;
  // List specific
  imgLista1: string | null;
  imgLista2: string | null;
  imgLista3: string | null;
  listaTitle: string;
  curator: string;
  imgLista1Fill: boolean;
  imgLista2Fill: boolean;
  imgLista3Fill: boolean;
  // Comunicazione specific
  primaryText: string;
  secondaryText: string;
  // File names for feedback
  imgRisorsaName: string;
  imgLista1Name: string;
  imgLista2Name: string;
  imgLista3Name: string;
  logoPortaleName: string;
}

export function TemplateEditor() {
  const [state, setState] = useState<EditorState>({
    templateType: 'risorsa',
    colorScheme: 'chiaro',
    composizione: 'none',
    logoPortale: null,
    nomePortale: 'portale.medialibrary.it',
    imgRisorsa: null,
    risorsaTitle: 'Inserisci qui il titolo del post',
    imgLista1: null,
    imgLista2: null,
    imgLista3: null,
    listaTitle: 'Inserire nome della lista',
    curator: 'Inserisci nome',
    primaryText: 'Inserisci qui il testo della tua comunicazione.',
    secondaryText: 'Scrivi qui un testo secondario!',
    imgRisorsaName: '',
    imgLista1Name: '',
    imgLista2Name: '',
    imgLista3Name: '',
    logoPortaleName: ''
  });

  const [isDownloading, setIsDownloading] = useState(false);

  const [portali, setPortali] = useState<PortalData[]>([]);
  const [selectedPortalId, setSelectedPortalId] = useState<string>('');
  const [isLoadingPortali, setIsLoadingPortali] = useState(true);
  const [isLoadingLogo, setIsLoadingLogo] = useState(false);
  const [portalSearchQuery, setPortalSearchQuery] = useState('');
  const [isPortalSelectOpen, setIsPortalSelectOpen] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Filter portals based on search query
  const filteredPortali = portali.filter(portal => 
    portal.name.toLowerCase().includes(portalSearchQuery.toLowerCase()) ||
    portal.url.toLowerCase().includes(portalSearchQuery.toLowerCase())
  );

  // Keep focus on search input while typing
  useEffect(() => {
    if (portalSearchQuery && searchInputRef.current && document.activeElement !== searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [portalSearchQuery]);

  // Fetch and parse CSV data
  useEffect(() => {
    const apiUrl = 'https://mlol.link/api/v1/enti.json';
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response:', data);
        
        // Handle both array and object responses
        const entiArray = Array.isArray(data) ? data : (data.enti || data.data || []);
        
        console.log('Enti array:', entiArray);
        
        // Map the API data to our PortalData format
        const portalData = entiArray
          .filter((ente: any) => {
            // Check multiple possible field names
            const hasName = ente.nome || ente.name || ente.title;
            const hasSite = ente.sito || ente.url || ente.site;
            const hasLogo = ente.logo || ente.logoUrl || ente.image;
            return hasName && hasSite && hasLogo;
          })
          .map((ente: any) => ({
            name: ente.nome || ente.name || ente.title,
            url: ente.sito || ente.url || ente.site,
            logoUrl: ente.logo || ente.logoUrl || ente.image
          }));
        
        console.log('Processed portal data:', portalData);
        
        setPortali(portalData);
        setIsLoadingPortali(false);
      })
      .catch(error => {
        console.error('Error loading portals from API:', error);
        setIsLoadingPortali(false);
      });
  }, []);

  // Handle portal selection
  const handlePortalChange = (portalId: string) => {
    setSelectedPortalId(portalId);
    setIsPortalSelectOpen(false); // Close after selection
    const portal = portali.find((p, index) => index.toString() === portalId);
    if (portal) {
      // Pre-convert the logo to data URL to avoid CORS issues during export
      setIsLoadingLogo(true);
      
      // Remove http:// or https:// from the URL
      const cleanUrl = portal.url.replace(/^https?:\/\//, '');
      
      convertImageToDataURL(portal.logoUrl)
        .then((dataURL) => {
          setState(prev => ({
            ...prev,
            nomePortale: cleanUrl,
            logoPortale: dataURL,
            logoPortaleName: portal.name
          }));
          setIsLoadingLogo(false);
        })
        .catch((error) => {
          console.error('Error converting logo:', error);
          // Fallback to original URL
          setState(prev => ({
            ...prev,
            nomePortale: cleanUrl,
            logoPortale: portal.logoUrl,
            logoPortaleName: portal.name
          }));
          setIsLoadingLogo(false);
        });
    }
  };

  // Prevent Select from closing while typing in search
  const handlePortalOpenChange = (open: boolean) => {
    setIsPortalSelectOpen(open);
    if (!open) {
      // Reset search when closing
      setPortalSearchQuery('');
    }
  };

  const handleImageUpload = (field: keyof EditorState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setState(prev => ({ ...prev, [field]: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
      // Set file name for feedback
      if (field === 'imgRisorsa') {
        setState(prev => ({ ...prev, imgRisorsaName: file.name }));
      } else if (field === 'imgLista1') {
        setState(prev => ({ ...prev, imgLista1Name: file.name }));
      } else if (field === 'imgLista2') {
        setState(prev => ({ ...prev, imgLista2Name: file.name }));
      } else if (field === 'imgLista3') {
        setState(prev => ({ ...prev, imgLista3Name: file.name }));
      }
    }
  };

  const triggerFileInput = (inputId: string) => {
    document.getElementById(inputId)?.click();
  };

  const removeImage = (field: 'imgRisorsa' | 'imgLista1' | 'imgLista2' | 'imgLista3') => {
    if (field === 'imgRisorsa') {
      setState(prev => ({ ...prev, imgRisorsa: null, imgRisorsaName: '' }));
    } else if (field === 'imgLista1') {
      setState(prev => ({ ...prev, imgLista1: null, imgLista1Name: '' }));
    } else if (field === 'imgLista2') {
      setState(prev => ({ ...prev, imgLista2: null, imgLista2Name: '' }));
    } else if (field === 'imgLista3') {
      setState(prev => ({ ...prev, imgLista3: null, imgLista3Name: '' }));
    }
    // Reset the file input
    const input = document.getElementById(field) as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  };

  // Convert image URL to data URL for CORS-free export
  const convertImageToDataURL = async (url: string): Promise<string> => {
    console.log('Converting image to data URL:', url);
    
    // Try multiple CORS proxies in order
    const proxies = [
      `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
      `https://corsproxy.io/?${encodeURIComponent(url)}`,
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
    ];
    
    // Try each proxy in sequence with timeout
    for (const proxyUrl of proxies) {
      try {
        console.log('Trying proxy:', proxyUrl);
        
        // Add timeout to fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch(proxyUrl, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const blob = await response.blob();
          const dataURL = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
          console.log('Successfully converted image with proxy');
          return dataURL;
        }
      } catch (error) {
        console.log('Proxy failed:', proxyUrl, error);
        continue; // Try next proxy
      }
    }
    
    // If all proxies fail, try direct canvas approach
    console.log('All proxies failed, trying canvas approach');
    try {
      const dataURL = await new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        const timeout = setTimeout(() => {
          reject(new Error('Image load timeout'));
        }, 5000);
        
        img.onload = () => {
          clearTimeout(timeout);
          try {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            
            if (ctx) {
              ctx.drawImage(img, 0, 0);
              const dataURL = canvas.toDataURL('image/png');
              console.log('Successfully converted image with canvas');
              resolve(dataURL);
            } else {
              reject(new Error('Failed to get canvas context'));
            }
          } catch (error) {
            console.error('Canvas conversion error:', error);
            reject(error);
          }
        };
        
        img.onerror = (error) => {
          clearTimeout(timeout);
          console.error('Direct image load error:', error);
          reject(error);
        };
        
        // Try direct load
        img.src = url;
      });
      
      return dataURL;
    } catch (error) {
      console.error('Canvas approach failed:', error);
      // Last resort: return original URL
      // This might cause CORS issues during export but at least shows the logo in preview
      console.log('Returning original URL as fallback');
      return url;
    }
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      setIsDownloading(true);
      const element = canvasRef.current;
      
      // Add download class before cloning
      element.setAttribute('data-download-mode', 'true');
      
      // Create a temporary container with all CSS reset
      const tempContainer = document.createElement('div');
      tempContainer.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        width: 1080px;
        height: 1350px;
        background: transparent;
        color: #000000;
        font-family: system-ui, -apple-system, sans-serif;
      `;
      
      // Clone the element
      const clonedElement = element.cloneNode(true) as HTMLElement;
      
      tempContainer.appendChild(clonedElement);
      document.body.appendChild(tempContainer);
      
      const canvas = await html2canvas(clonedElement, {
        width: 1080,
        height: 1350,
        scale: 2,
        backgroundColor: null,
        logging: true,
        useCORS: true,
        allowTaint: true,
      });

      // Clean up
      document.body.removeChild(tempContainer);
      
      // Remove download class
      element.removeAttribute('data-download-mode');

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `mlol-${state.templateType}-${Date.now()}.jpeg`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      }, 'image/jpeg', 0.95);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-y-auto lg:overflow-hidden bg-gray-50">
      {/* Preview Panel - On top for mobile, right for desktop */}
      <div className="h-[50vh] overflow-hidden flex-none lg:h-screen lg:flex-1 flex items-center justify-center bg-gray-100 p-4 lg:p-8 order-1 lg:order-2">
        <div className="relative preview-scale">
          {/* Loading Spinner Overlay */}
          {isLoadingLogo && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/50 rounded-lg" style={{ width: '1080px', height: '1350px' }}>
              <div className="relative">
                <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-white font-medium text-lg">Caricamento logo...</p>
            </div>
          )}
          
          <div 
            ref={canvasRef}
            style={{ 
              width: '1080px', 
              height: '1350px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              opacity: isLoadingLogo ? 0.5 : 1,
              transition: 'opacity 0.3s ease'
            }}
          >
            <CanvasIsolator>
              {state.templateType === 'risorsa' && (
                <RisorsaTemplate
                  colorScheme={state.colorScheme}
                  composizione={state.composizione}
                  logoPortale={state.logoPortale}
                  nomePortale={state.nomePortale}
                  imgRisorsa={state.imgRisorsa}
                  risorsaTitle={state.risorsaTitle}
                />
              )}
              {state.templateType === 'list-ebook' && (
                <ListaEbookTemplate
                  colorScheme={state.colorScheme}
                  composizione={state.composizione}
                  logoPortale={state.logoPortale}
                  nomePortale={state.nomePortale}
                  imgLista1={state.imgLista1}
                  imgLista2={state.imgLista2}
                  imgLista3={state.imgLista3}
                  listaTitle={state.listaTitle}
                  curator={state.curator}
                />
              )}
              {state.templateType === 'list-audiolibri' && (
                <ListaAudiolibriTemplate
                  colorScheme={state.colorScheme}
                  composizione={state.composizione}
                  logoPortale={state.logoPortale}
                  nomePortale={state.nomePortale}
                  imgLista1={state.imgLista1}
                  imgLista2={state.imgLista2}
                  imgLista3={state.imgLista3}
                  listaTitle={state.listaTitle}
                  curator={state.curator}
                />
              )}
              {state.templateType === 'comunicazione' && (
                <ComunicazioneTemplate
                  colorScheme={state.colorScheme}
                  logoPortale={state.logoPortale}
                  nomePortale={state.nomePortale}
                  primaryText={state.primaryText}
                  secondaryText={state.secondaryText}
                />
              )}
            </CanvasIsolator>
          </div>
        </div>
      </div>

      {/* Editor Controls Panel - On bottom for mobile, left for desktop */}
      <div className="flex-none w-full lg:w-96 lg:overflow-y-auto border-r bg-white p-[24px] order-2 lg:order-1">
        {/* Header Title */}
        <div className="content-stretch flex gap-[4px] h-[65px] items-start mb-6 w-full border-b border-[#e5e7eb] pb-[24px]">
          {/* MLOL Logo */}
          <div className="h-[47.474px] relative shrink-0 w-[118px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 47.4739">
              <g id="mlol">
                <path d={svgPaths.p26f8a00} fill="#003326" id="Vector" />
                <path d={svgPaths.pd08fd00} fill="#003326" id="Vector_2" />
                <g id="Lettera M MLOL">
                  <path d={svgPaths.p1ddb2e00} fill="#003326" id="h" />
                </g>
                <path d={svgPaths.pe00be40} fill="#003326" id="Exclude" />
              </g>
            </svg>
          </div>
          {/* Subtitle */}
          <div className="font-semibold leading-none relative shrink-0 text-[#003326] text-[16px] w-[125px] whitespace-pre-wrap" style={{ fontFamily: 'Switzer, sans-serif' }}>
            <p className="mb-0">editor grafico</p>
            <p>per social media</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Portal Selection */}
          <div>
            <Label htmlFor="portal-select">Seleziona Portale</Label>
            <Select value={selectedPortalId} onValueChange={handlePortalChange} disabled={isLoadingPortali} onOpenChange={handlePortalOpenChange}>
              <SelectTrigger id="portal-select" className="mt-1">
                <SelectValue placeholder={isLoadingPortali ? "Caricamento portali..." : "Scegli un portale"} />
              </SelectTrigger>
              <SelectContent>
                <div 
                  className="sticky top-0 bg-white z-50"
                  style={{ 
                    touchAction: 'none', 
                    pointerEvents: 'auto',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  onPointerDownCapture={(e) => {
                    e.stopPropagation();
                  }}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                  }}
                  onPointerUpCapture={(e) => {
                    e.stopPropagation();
                  }}
                  onTouchStartCapture={(e) => {
                    e.stopPropagation();
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  onTouchMove={(e) => {
                    e.stopPropagation();
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                  }}
                  onTouchEndCapture={(e) => {
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onClickCapture={(e) => {
                    e.stopPropagation();
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                  }}
                  onMouseDownCapture={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="p-2 border-b-2 border-gray-300 bg-white">
                    <Input
                      ref={searchInputRef}
                      placeholder="Cerca portale..."
                      value={portalSearchQuery}
                      onChange={(e) => setPortalSearchQuery(e.target.value)}
                      className="h-8 bg-white"
                      style={{ touchAction: 'manipulation', pointerEvents: 'auto' }}
                      onClickCapture={(e) => {
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onPointerDownCapture={(e) => {
                        e.stopPropagation();
                      }}
                      onPointerDown={(e) => {
                        e.stopPropagation();
                      }}
                      onPointerUpCapture={(e) => {
                        e.stopPropagation();
                      }}
                      onTouchStartCapture={(e) => {
                        e.stopPropagation();
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                        const input = e.currentTarget;
                        // Focus the input on touch - Chrome Android needs this
                        requestAnimationFrame(() => {
                          input.focus();
                          input.click();
                        });
                      }}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                      onTouchEndCapture={(e) => {
                        e.stopPropagation();
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                      }}
                      onMouseDownCapture={(e) => {
                        e.stopPropagation();
                      }}
                      onFocus={(e) => {
                        e.stopPropagation();
                      }}
                      onKeyDown={(e) => {
                        e.stopPropagation();
                        // Prevent Select from processing any key events (disables typeahead search)
                        if (e.key === 'Escape') {
                          e.preventDefault();
                          setPortalSearchQuery('');
                        }
                      }}
                      onKeyUp={(e) => {
                        // Stop key events from bubbling to Select
                        e.stopPropagation();
                      }}
                      onKeyPress={(e) => {
                        // Stop key events from bubbling to Select
                        e.stopPropagation();
                      }}
                      onInput={(e) => {
                        // Stop input events from bubbling to Select
                        e.stopPropagation();
                      }}
                    />
                  </div>
                </div>
                {filteredPortali.length > 0 ? (
                  filteredPortali.map((portal, index) => {
                    // Find the original index in the full portali array
                    const originalIndex = portali.findIndex(p => p.name === portal.name && p.url === portal.url);
                    return (
                      <SelectItem key={originalIndex} value={originalIndex.toString()}>
                        {portal.name}
                      </SelectItem>
                    );
                  })
                ) : (
                  <div className="px-2 py-6 text-center text-sm text-muted-foreground">
                    Nessun portale trovato
                  </div>
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Template Selection */}
          <div>
            <Label htmlFor="template-select">Seleziona Template</Label>
            <Select value={state.templateType} onValueChange={(value) => setState(prev => ({ ...prev, templateType: value as TemplateType }))}>
              <SelectTrigger id="template-select" className="mt-1">
                <SelectValue placeholder="Select template">
                  {state.templateType === 'risorsa' && (
                    <div className="flex gap-[7px] items-center">
                      <RisorsaIcon size="small" />
                      <span>Risorsa</span>
                    </div>
                  )}
                  {state.templateType === 'list-ebook' && (
                    <div className="flex gap-[7px] items-center">
                      <ListaEbookIcon size="small" />
                      <span>Lista di ebook</span>
                    </div>
                  )}
                  {state.templateType === 'list-audiolibri' && (
                    <div className="flex gap-[7px] items-center">
                      <ListaAudiolibriIcon size="small" />
                      <span>Lista di audiolibri</span>
                    </div>
                  )}
                  {state.templateType === 'comunicazione' && (
                    <div className="flex gap-[7px] items-center">
                      <ComunicazioneIcon size="small" />
                      <span>Comunicazione</span>
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="risorsa">
                  <div className="flex gap-[7px] items-center">
                    <RisorsaIcon size="large" />
                    <span>Risorsa</span>
                  </div>
                </SelectItem>
                <SelectItem value="list-ebook">
                  <div className="flex gap-[7px] items-center">
                    <ListaEbookIcon size="large" />
                    <span>Lista di ebook</span>
                  </div>
                </SelectItem>
                <SelectItem value="list-audiolibri">
                  <div className="flex gap-[7px] items-center">
                    <ListaAudiolibriIcon size="large" />
                    <span>Lista di audiolibri</span>
                  </div>
                </SelectItem>
                <SelectItem value="comunicazione">
                  <div className="flex gap-[7px] items-center">
                    <ComunicazioneIcon size="large" />
                    <span>Comunicazione</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Color Scheme Selection */}
          <div>
            <Label htmlFor="color-select">Scegli il colore di sfondo</Label>
            <Select value={state.colorScheme} onValueChange={(value) => setState(prev => ({ ...prev, colorScheme: value as ColorScheme }))}>
              <SelectTrigger id="color-select" className="mt-1">
                <SelectValue placeholder="Select color scheme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chiaro">
                  <div className="flex gap-[7px] items-center">
                    <div className="bg-[#cce6df] rounded-full shrink-0 size-[18px]" />
                    <span>Chiaro</span>
                  </div>
                </SelectItem>
                <SelectItem value="medio">
                  <div className="flex gap-[7px] items-center">
                    <div className="bg-[#158267] rounded-full shrink-0 size-[18px]" />
                    <span>Medio</span>
                  </div>
                </SelectItem>
                <SelectItem value="scuro">
                  <div className="flex gap-[7px] items-center">
                    <div className="bg-[#004d3a] rounded-full shrink-0 size-[18px]" />
                    <span>Scuro</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Composizione Selection - Only for risorsa and list */}
          {(state.templateType === 'risorsa' || state.templateType === 'list-ebook' || state.templateType === 'list-audiolibri') && (
            <div>
              <Label htmlFor="composizione-select" className="text-[14px]">Seleziona icone sfondo</Label>
              <Select value={state.composizione} onValueChange={(value) => setState(prev => ({ ...prev, composizione: value as Composizione }))}>
                <SelectTrigger id="composizione-select" className="mt-1">
                  <SelectValue placeholder="Select composizione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Nessuna</SelectItem>
                  <SelectItem value="comp1">Composizione 1</SelectItem>
                  <SelectItem value="comp2">Composizione 2</SelectItem>
                  <SelectItem value="comp3">Composizione 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Template-specific Controls */}
          {state.templateType === 'risorsa' && (
            <>
              <div>
                <Label>Seleziona immagine della risorsa</Label>
                <Input
                  id="imgRisorsa"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload('imgRisorsa')}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="mt-1 w-full" 
                  onClick={() => triggerFileInput('imgRisorsa')}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Scegli immagine
                </Button>
                {state.imgRisorsaName && (
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span className="truncate flex-1">{state.imgRisorsaName}</span>
                    <button
                      onClick={() => removeImage('imgRisorsa')}
                      className="ml-2 p-1 hover:bg-gray-100 rounded"
                      aria-label="Rimuovi immagine"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="risorsaTitle">Scrivi il titolo del post</Label>
                <Input
                  id="risorsaTitle"
                  value={state.risorsaTitle}
                  onChange={(e) => setState(prev => ({ ...prev, risorsaTitle: e.target.value }))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1"
                />
              </div>
            </>
          )}

          {state.templateType === 'list-ebook' && (
            <>
              <div>
                <Label>Immagine risorsa 1</Label>
                <Input
                  id="imgLista1"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload('imgLista1')}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="mt-1 w-full" 
                  onClick={() => triggerFileInput('imgLista1')}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Scegli immagine
                </Button>
                {state.imgLista1Name && (
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span className="truncate flex-1">{state.imgLista1Name}</span>
                    <button
                      onClick={() => removeImage('imgLista1')}
                      className="ml-2 p-1 hover:bg-gray-100 rounded"
                      aria-label="Rimuovi immagine"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <Label>Immagine risorsa 2</Label>
                <Input
                  id="imgLista2"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload('imgLista2')}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="mt-1 w-full" 
                  onClick={() => triggerFileInput('imgLista2')}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Scegli immagine
                </Button>
                {state.imgLista2Name && (
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span className="truncate flex-1">{state.imgLista2Name}</span>
                    <button
                      onClick={() => removeImage('imgLista2')}
                      className="ml-2 p-1 hover:bg-gray-100 rounded"
                      aria-label="Rimuovi immagine"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <Label>Immagine risorsa 3</Label>
                <Input
                  id="imgLista3"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload('imgLista3')}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="mt-1 w-full" 
                  onClick={() => triggerFileInput('imgLista3')}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Scegli immagine
                </Button>
                {state.imgLista3Name && (
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span className="truncate flex-1">{state.imgLista3Name}</span>
                    <button
                      onClick={() => removeImage('imgLista3')}
                      className="ml-2 p-1 hover:bg-gray-100 rounded"
                      aria-label="Rimuovi immagine"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="listaTitle">Titolo della lista</Label>
                <Input
                  id="listaTitle"
                  value={state.listaTitle}
                  onChange={(e) => setState(prev => ({ ...prev, listaTitle: e.target.value }))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="curator">Nome creatore della lista</Label>
                <Input
                  id="curator"
                  value={state.curator}
                  onChange={(e) => setState(prev => ({ ...prev, curator: e.target.value }))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1"
                />
              </div>
            </>
          )}

          {state.templateType === 'list-audiolibri' && (
            <>
              <div>
                <Label>Immagine risorsa 1</Label>
                <Input
                  id="imgLista1"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload('imgLista1')}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="mt-1 w-full" 
                  onClick={() => triggerFileInput('imgLista1')}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Scegli immagine
                </Button>
                {state.imgLista1Name && (
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span className="truncate flex-1">{state.imgLista1Name}</span>
                    <button
                      onClick={() => removeImage('imgLista1')}
                      className="ml-2 p-1 hover:bg-gray-100 rounded"
                      aria-label="Rimuovi immagine"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <Label>Immagine risorsa 2</Label>
                <Input
                  id="imgLista2"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload('imgLista2')}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="mt-1 w-full" 
                  onClick={() => triggerFileInput('imgLista2')}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Scegli immagine
                </Button>
                {state.imgLista2Name && (
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span className="truncate flex-1">{state.imgLista2Name}</span>
                    <button
                      onClick={() => removeImage('imgLista2')}
                      className="ml-2 p-1 hover:bg-gray-100 rounded"
                      aria-label="Rimuovi immagine"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <Label>Immagine risorsa 3</Label>
                <Input
                  id="imgLista3"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload('imgLista3')}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="mt-1 w-full" 
                  onClick={() => triggerFileInput('imgLista3')}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Scegli immagine
                </Button>
                {state.imgLista3Name && (
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span className="truncate flex-1">{state.imgLista3Name}</span>
                    <button
                      onClick={() => removeImage('imgLista3')}
                      className="ml-2 p-1 hover:bg-gray-100 rounded"
                      aria-label="Rimuovi immagine"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="listaTitle">Titolo della lista</Label>
                <Input
                  id="listaTitle"
                  value={state.listaTitle}
                  onChange={(e) => setState(prev => ({ ...prev, listaTitle: e.target.value }))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="curator">Nome creatore della lista</Label>
                <Input
                  id="curator"
                  value={state.curator}
                  onChange={(e) => setState(prev => ({ ...prev, curator: e.target.value }))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1"
                />
              </div>
            </>
          )}

          {state.templateType === 'comunicazione' && (
            <>
              <div>
                <Label htmlFor="primaryText">Testo principale</Label>
                <Textarea
                  id="primaryText"
                  value={state.primaryText}
                  onChange={(e) => setState(prev => ({ ...prev, primaryText: e.target.value }))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="secondaryText">Testo secondario</Label>
                <Textarea
                  id="secondaryText"
                  value={state.secondaryText}
                  onChange={(e) => setState(prev => ({ ...prev, secondaryText: e.target.value }))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1"
                />
              </div>
            </>
          )}
        </div>

        <Button onClick={handleDownload} className="mt-6 w-full" size="lg" disabled={isLoadingLogo || isDownloading}>
          <Download className="mr-2 h-4 w-4" />
          {isDownloading ? 'Scaricamento...' : 'Scarica l\'immagine'}
        </Button>

        {/* Info Link */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="w-full">
                <Info className="mr-2 h-4 w-4" />
                Info
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <div className="space-y-4 pr-6">
                <h2 className="text-lg font-semibold" style={{ fontFamily: 'Rowan, serif' }}>
                  Che cos'è questo strumento?
                </h2>
                <p className="text-sm leading-relaxed text-foreground">
                  Questo strumento è stato realizzato per permettere alle biblioteche di produrre facilmente delle grafiche per promuovere il servizio MLOL sui propri canali social media. Scegli il template, personalizzalo, seleziona il tuo portale e carica le copertine delle risorse che vuoi promuovere o il messaggio testuale che vuoi comunicare. Poi basta scaricare l'immagine che sarà pronta per essere pubblicata online.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="w-[33%]">
                    <LogoMlol />
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}