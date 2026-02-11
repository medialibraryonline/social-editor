import svgPaths from "@/imports/svg-14z1dm488a";
import imgLogoPortale from "figma:asset/6d8ae6b82fc31b6ee858fd0b9b28cee8a59fb545.png";
import imgImgLista3 from "figma:asset/781dc28b50a951e58822aeb2f0ddec6dc80366b8.png";
import { ColorScheme, Composizione } from '../TemplateEditor';
import { Comp1 } from './compositions/Comp1';
import { Comp2 } from './compositions/Comp2';
import { Comp3 } from './compositions/Comp3';
import { MlolFullLogo } from './MlolFullLogo';

interface ListaTemplateProps {
  colorScheme: ColorScheme;
  composizione: Composizione;
  logoPortale: string | null;
  nomePortale: string;
  imgLista1: string | null;
  imgLista2: string | null;
  imgLista3: string | null;
  listaTitle: string;
  curator: string;
  imgLista1Fill: boolean;
  imgLista2Fill: boolean;
  imgLista3Fill: boolean;
}

const colorSchemes = {
  chiaro: {
    bg: '#cce6df',
    text: '#003326',
    logoFill: '#003326',
    opacity: '1',
  },
  medio: {
    bg: '#008060',
    text: '#ffffff',
    logoFill: '#ffffff',
    opacity: '0.5',
  },
  scuro: {
    bg: '#004d3a',
    text: '#ffffff',
    logoFill: '#ffffff',
    opacity: '0.25',
  },
};

function IconeOMlol({ fill }: { fill: string }) {
  return (
    <div className="relative size-[385.486px]" data-name="Icone O MLOL">
      <div className="absolute inset-[0_0_-0.03%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385.486 385.601">
          <g id="Icone O MLOL">
            <path clipRule="evenodd" d={svgPaths.pafa0700} fill={fill} fillRule="evenodd" id="Path" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconeOMlol1({ fill }: { fill: string }) {
  return (
    <div className="relative size-[289.115px]" data-name="Icone O MLOL">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 289.115 289.115">
        <g id="Icone O MLOL">
          <path clipRule="evenodd" d={svgPaths.p26c70200} fill={fill} fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function IconeOMlol2({ fill }: { fill: string }) {
  return (
    <div className="relative size-[240.929px]" data-name="Icone O MLOL">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240.929 240.929">
        <g id="Icone O MLOL">
          <path clipRule="evenodd" d={svgPaths.p1b9b2900} fill={fill} fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

export function ListaTemplate({
  colorScheme,
  composizione,
  logoPortale,
  nomePortale,
  imgLista1,
  imgLista2,
  imgLista3,
  listaTitle,
  curator,
  imgLista1Fill,
  imgLista2Fill,
  imgLista3Fill,
}: ListaTemplateProps) {
  const colors = colorSchemes[colorScheme];

  return (
    <div className="relative size-full" data-name="lista" style={{ backgroundColor: colors.bg, width: '1080px', height: '1350px' }}>
      {/* Background */}
      {composizione !== 'none' && (
        <div className="absolute content-stretch flex items-center left-1/2 rounded-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="composizioni-sfondo1" style={{ opacity: colors.opacity }}>
          <div className="h-[1350px] overflow-clip relative shrink-0 w-[1080px]" data-name="composizioni-risorse-liste">
            {composizione === 'comp1' && <Comp1 />}
            {composizione === 'comp2' && <Comp2 />}
            {composizione === 'comp3' && <Comp3 />}
          </div>
        </div>
      )}

      {/* Logo and Portal Name */}
      <div className="absolute bottom-[66.97px] content-stretch flex gap-[24px] items-center left-[calc(50%+0.5px)] translate-x-[-50%]" data-name="logo-mlol-portale">
        {logoPortale ? (
          <>
            <div style={{ backgroundColor: '#ffffff' }} className="content-stretch flex items-center p-[12px] relative rounded-[12px] shrink-0" data-name="image-wrapper">
              <div 
                className="relative shrink-0 size-[94px]" 
                data-name="logo-portale"
                style={{
                  backgroundImage: `url(${logoPortale})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
            <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0" data-name="Text">
              <div className="h-[75.032px] relative shrink-0 w-[186.504px]" data-name="Logo MLOL">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186.504 75.032">
                  <g id="Logo MLOL">
                    <path d={svgPaths.p2a3eb600} fill={colors.logoFill} id="Vector" />
                    <g id="Icone O MLOL">
                      <path d={svgPaths.p19001580} fill={colors.logoFill} id="Path" />
                    </g>
                    <path d={svgPaths.p5e6dd80} fill={colors.logoFill} id="Vector_2" />
                    <g id="Lettera M MLOL">
                      <path d={svgPaths.p17988780} fill={colors.logoFill} id="h" />
                    </g>
                  </g>
                </svg>
              </div>
              <p 
                className="nome-portale-text"
                style={{ 
                  fontFamily: 'Switzer, sans-serif', 
                  fontWeight: 500, 
                  fontSize: '32px', 
                  lineHeight: '1',
                  color: colors.text,
                  margin: 0,
                  padding: 0
                }}
              >
                {nomePortale}
              </p>
            </div>
          </>
        ) : (
          <MlolFullLogo colorScheme={colorScheme} />
        )}
      </div>

      {/* Curator */}
      <p className="absolute bottom-[17.63%] left-1/2 text-center top-[80%] translate-x-[-50%] w-[900px]" style={{
        fontFamily: 'Switzer, sans-serif',
        fontWeight: 500,
        fontSize: '32px',
        lineHeight: '1',
        color: colors.text
      }}>Curata da: {curator}</p>

      {/* Lista Title */}
      <p className="absolute text-center" style={{
        left: '90px',
        top: '112px',
        width: '900px',
        fontFamily: 'Rowan, serif',
        fontWeight: 400,
        fontSize: '56px',
        lineHeight: '1.25',
        color: colors.text,
        margin: 0,
        padding: 0
      }}>{listaTitle}</p>

      {/* LISTA Label */}
      <p className="absolute text-center uppercase" style={{
        left: '90px',
        top: '40px',
        width: '900px',
        fontFamily: 'Switzer, sans-serif',
        fontWeight: 700,
        fontSize: '48px',
        lineHeight: '1',
        color: colors.text,
        margin: 0,
        padding: 0
      }}>Lista</p>

      {/* Images Grid */}
      <div className="absolute left-[90px] top-[280px] flex items-center justify-center" data-name="griglia-container" style={{ width: '900px', height: '700px' }}>
        <div className="content-stretch flex gap-[12px] items-start justify-center w-[900px]" data-name="list-comp">
          {/* Left Component */}
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-[594px]" data-name="left-comp" style={{ height: '700px' }}>
            <div className="relative shrink-0 w-full h-full" data-name="img-lista1">
              <img 
                src={imgLista1 || imgImgLista3}
                alt="Lista 1"
                className="w-full"
                style={{
                  width: '100%',
                  height: '700px',
                  objectFit: imgLista1Fill ? 'cover' : 'contain',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
          </div>
          
          {/* Right Component */}
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[294px]" data-name="right-comp" style={{ height: '700px' }}>
            <div className="relative shrink-0 w-full" data-name="img-lista2" style={{ height: '344px' }}>
              <img 
                src={imgLista2 || imgImgLista3}
                alt="Lista 2"
                className="w-full"
                style={{
                  width: '100%',
                  height: '344px',
                  objectFit: imgLista2Fill ? 'cover' : 'contain',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
            <div className="relative shrink-0 w-full" data-name="img-lista3" style={{ height: '344px' }}>
              <img 
                src={imgLista3 || imgImgLista3}
                alt="Lista 3"
                className="w-full"
                style={{
                  width: '100%',
                  height: '344px',
                  objectFit: imgLista3Fill ? 'cover' : 'contain',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}