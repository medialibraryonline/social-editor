import svgPaths from "@/imports/svg-tf333zrxe7";
import imgLogoPortale from "figma:asset/6d8ae6b82fc31b6ee858fd0b9b28cee8a59fb545.png";
import { ColorScheme } from '../TemplateEditor';

interface ComunicazioneTemplateProps {
  colorScheme: ColorScheme;
  logoPortale: string | null;
  nomePortale: string;
  primaryText: string;
  secondaryText: string;
}

const colorSchemes = {
  chiaro: {
    bg: '#cce6df',
    text: '#003326',
    logoFill: '#003326',
  },
  medio: {
    bg: '#008060',
    text: '#ffffff',
    logoFill: '#ffffff',
  },
  scuro: {
    bg: '#004d3a',
    text: '#ffffff',
    logoFill: '#ffffff',
  },
};

export function ComunicazioneTemplate({
  colorScheme,
  logoPortale,
  nomePortale,
  primaryText,
  secondaryText,
}: ComunicazioneTemplateProps) {
  const colors = colorSchemes[colorScheme];

  return (
    <div className="relative size-full" data-name="comunicazione" style={{ backgroundColor: colors.bg, width: '1080px', height: '1350px' }}>
      {/* Background */}
      <div className="absolute content-stretch flex items-center left-0 rounded-[40px] top-1/2 translate-y-[-50%]" data-name="composizioni-sfondo2">
        <div className="h-[1350px] overflow-clip relative shrink-0 w-[1080px]" data-name="composizioni-comunicazioni">
          <div className="absolute bottom-[-278.67px] h-[693.666px] left-[calc(50%-11.78px)] translate-x-[-50%] w-[1271.57px]" data-name="comp1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1271.57 693.666">
              <g id="comp1">
                <path d={svgPaths.p2d51c900} fill="#66B3A0" id="Vector" />
                <path d={svgPaths.p4ec9500} fill="#99CCBF" id="Vector_2" />
                <path d={svgPaths.p2f40b700} fill="#339980" id="Vector_3" />
                <g id="Icone O MLOL">
                  <path clipRule="evenodd" d={svgPaths.p2dc1f780} fill="#99CCBF" fillRule="evenodd" id="Path" />
                </g>
                <g id="Icone O MLOL_2">
                  <path clipRule="evenodd" d={svgPaths.p3e063d00} fill="#99CCBF" fillRule="evenodd" id="Path_2" />
                </g>
                <g id="Icone O MLOL_3">
                  <path clipRule="evenodd" d={svgPaths.p2c686400} fill="#99CCBF" fillRule="evenodd" id="Path_3" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Logo and Portal Name */}
      <div className="absolute content-stretch flex gap-[24px] items-center left-[60px] top-[80px]" data-name="logo-mlol-portale">
        <div style={{ backgroundColor: '#ffffff' }} className="content-stretch flex items-center p-[12px] relative rounded-[12px] shrink-0" data-name="image-wrapper">
          <div className="relative shrink-0 size-[94px]" data-name="logo-portale">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="w-full h-full" src={logoPortale || imgLogoPortale} style={{ objectFit: 'contain' }} />
            </div>
          </div>
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
      </div>

      {/* Texts */}
      <div className="absolute content-stretch flex flex-col gap-[58px] items-start left-[calc(50%-17px)] top-[312px] translate-x-[-50%] w-[926px]" data-name="Texts">
        <p style={{
          fontFamily: 'Rowan, serif',
          fontWeight: 400,
          fontSize: '104px',
          lineHeight: '1.1',
          color: colors.text
        }}>{primaryText}</p>
        <p style={{
          fontFamily: 'Switzer, sans-serif',
          fontWeight: 400,
          fontSize: '48px',
          lineHeight: 'normal',
          color: colors.text
        }}>{secondaryText}</p>
      </div>
    </div>
  );
}