import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { RisorsaTemplate } from './templates/RisorsaTemplate';
import { ListaTemplate } from './templates/ListaTemplate';
import { ComunicazioneTemplate } from './templates/ComunicazioneTemplate';
import { CanvasIsolator } from './CanvasIsolator';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Download, Upload } from 'lucide-react';

export type ColorScheme = 'chiaro' | 'medio' | 'scuro';
export type TemplateType = 'risorsa' | 'list' | 'comunicazione';
export type Composizione = 'none' | 'comp1' | 'comp2' | 'comp3';

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
  // Comunicazione specific
  primaryText: string;
  secondaryText: string;
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
  });

  const [isDownloading, setIsDownloading] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (field: keyof EditorState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setState(prev => ({ ...prev, [field]: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (inputId: string) => {
    document.getElementById(inputId)?.click();
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
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
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-gray-50">
      {/* Preview Panel - On top for mobile, right for desktop */}
      <div className="h-[50vh] lg:h-auto flex-none lg:flex-1 flex items-center justify-center overflow-auto bg-gray-100 p-4 lg:p-8 order-1 lg:order-2">
        <div className="relative preview-scale">
          <div 
            ref={canvasRef}
            style={{ 
              width: '1080px', 
              height: '1350px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
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
              {state.templateType === 'list' && (
                <ListaTemplate
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
      <div className="flex-1 lg:flex-none w-full lg:w-96 overflow-y-auto border-r bg-white p-6 order-2 lg:order-1">
        <h1 className="mb-6 text-2xl font-bold">MLOL Template Editor</h1>

        <div className="space-y-4">
          {/* Template Selection */}
          <div>
            <Label htmlFor="template-select">Template</Label>
            <Select value={state.templateType} onValueChange={(value) => setState(prev => ({ ...prev, templateType: value as TemplateType }))}>
              <SelectTrigger id="template-select" className="mt-1">
                <SelectValue placeholder="Select template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="risorsa">Risorsa</SelectItem>
                <SelectItem value="list">Lista di risorse</SelectItem>
                <SelectItem value="comunicazione">Comunicazione</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Color Scheme Selection */}
          <div>
            <Label htmlFor="color-select">Schema Colore</Label>
            <Select value={state.colorScheme} onValueChange={(value) => setState(prev => ({ ...prev, colorScheme: value as ColorScheme }))}>
              <SelectTrigger id="color-select" className="mt-1">
                <SelectValue placeholder="Select color scheme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chiaro">Chiaro</SelectItem>
                <SelectItem value="medio">Medio</SelectItem>
                <SelectItem value="scuro">Scuro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Composizione Selection - Only for risorsa and list */}
          {(state.templateType === 'risorsa' || state.templateType === 'list') && (
            <div>
              <Label htmlFor="composizione-select" className="text-[14px]">Composizione di sfondo</Label>
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

          {/* Logo Portale */}
          <div>
            <Label>Logo Portale</Label>
            <Input
              id="logoPortale"
              type="file"
              accept="image/*"
              onChange={handleImageUpload('logoPortale')}
              className="hidden"
            />
            <Button 
              variant="outline" 
              className="mt-1 w-full" 
              onClick={() => triggerFileInput('logoPortale')}
            >
              <Upload className="mr-2 h-4 w-4" />
              Choose File
            </Button>
          </div>

          {/* Nome Portale */}
          <div>
            <Label htmlFor="nomePortale">Nome Portale</Label>
            <Input
              id="nomePortale"
              value={state.nomePortale}
              onChange={(e) => setState(prev => ({ ...prev, nomePortale: e.target.value }))}
              className="mt-1"
            />
          </div>

          {/* Template-specific Controls */}
          {state.templateType === 'risorsa' && (
            <>
              <div>
                <Label>Image Risorsa</Label>
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
                  Choose File
                </Button>
              </div>
              <div>
                <Label htmlFor="risorsaTitle">Risorsa Title</Label>
                <Input
                  id="risorsaTitle"
                  value={state.risorsaTitle}
                  onChange={(e) => setState(prev => ({ ...prev, risorsaTitle: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </>
          )}

          {state.templateType === 'list' && (
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
                  Choose File
                </Button>
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
                  Choose File
                </Button>
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
                  Choose File
                </Button>
              </div>
              <div>
                <Label htmlFor="listaTitle">Titolo della lista</Label>
                <Input
                  id="listaTitle"
                  value={state.listaTitle}
                  onChange={(e) => setState(prev => ({ ...prev, listaTitle: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="curator">Nome utente della lista</Label>
                <Input
                  id="curator"
                  value={state.curator}
                  onChange={(e) => setState(prev => ({ ...prev, curator: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </>
          )}

          {state.templateType === 'comunicazione' && (
            <>
              <div>
                <Label htmlFor="primaryText">Primary Text</Label>
                <Textarea
                  id="primaryText"
                  value={state.primaryText}
                  onChange={(e) => setState(prev => ({ ...prev, primaryText: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="secondaryText">Secondary Text</Label>
                <Textarea
                  id="secondaryText"
                  value={state.secondaryText}
                  onChange={(e) => setState(prev => ({ ...prev, secondaryText: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </>
          )}
        </div>

        <Button onClick={handleDownload} className="mt-6 w-full" size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download as JPEG
        </Button>
      </div>
    </div>
  );
}