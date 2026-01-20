import svgPaths from "./svg-tf333zrxe7";
import imgLogoPortale from "figma:asset/f2d6c4215d1c91df8725eef582921488fe9bda8f.png";

function Comp() {
  return (
    <div className="absolute bottom-[-278.67px] h-[693.666px] left-[calc(50%-11.78px)] translate-x-[-50%] w-[1271.57px]" data-name="comp1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1271.57 693.666">
        <g id="comp1">
          <path d={svgPaths.p2d51c900} fill="var(--fill-0, #66B3A0)" id="Vector" />
          <path d={svgPaths.p4ec9500} fill="var(--fill-0, #99CCBF)" id="Vector_2" />
          <path d={svgPaths.p2f40b700} fill="var(--fill-0, #339980)" id="Vector_3" />
          <g id="Icone O MLOL">
            <path clipRule="evenodd" d={svgPaths.p2dc1f780} fill="var(--fill-0, #99CCBF)" fillRule="evenodd" id="Path" />
          </g>
          <g id="Icone O MLOL_2">
            <path clipRule="evenodd" d={svgPaths.p3e063d00} fill="var(--fill-0, #99CCBF)" fillRule="evenodd" id="Path_2" />
          </g>
          <g id="Icone O MLOL_3">
            <path clipRule="evenodd" d={svgPaths.p2c686400} fill="var(--fill-0, #99CCBF)" fillRule="evenodd" id="Path_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ComposizioniComunicazioni() {
  return (
    <div className="h-[1350px] overflow-clip relative shrink-0 w-[1080px]" data-name="composizioni-comunicazioni">
      <Comp />
    </div>
  );
}

function ComposizioniSfondo() {
  return (
    <div className="absolute content-stretch flex items-center left-0 rounded-[40px] top-1/2 translate-y-[-50%]" data-name="composizioni-sfondo2">
      <ComposizioniComunicazioni />
    </div>
  );
}

function LogoPortale() {
  return (
    <div className="relative shrink-0 size-[94px]" data-name="logo-portale">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[127.27%] left-[-15.79%] max-w-none top-[-6.82%] w-[702.89%]" src={imgLogoPortale} />
      </div>
    </div>
  );
}

function ImageWrapper() {
  return (
    <div className="bg-white content-stretch flex items-center p-[12px] relative rounded-[12px] shrink-0" data-name="image-wrapper">
      <LogoPortale />
    </div>
  );
}

function LogoMlol() {
  return (
    <div className="h-[75.032px] relative shrink-0 w-[186.504px]" data-name="Logo MLOL">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186.504 75.032">
        <g id="Logo MLOL">
          <path d={svgPaths.p2a3eb600} fill="var(--fill-0, #003326)" id="Vector" />
          <g id="Icone O MLOL">
            <path d={svgPaths.p19001580} fill="var(--fill-0, #003326)" id="Path" />
          </g>
          <path d={svgPaths.p5e6dd80} fill="var(--fill-0, #003326)" id="Vector_2" />
          <g id="Lettera M MLOL">
            <path d={svgPaths.p17988780} fill="var(--fill-0, #003326)" id="h" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0" data-name="Text">
      <LogoMlol />
      <p className="css-ew64yg font-['Switzer_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#003326] text-[32px]">portale.medialibrary.it</p>
    </div>
  );
}

function LogoMlolPortale() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[60px] top-[80px]" data-name="logo-mlol-portale">
      <ImageWrapper />
      <Text />
    </div>
  );
}

function Texts() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[58px] items-start left-[calc(50%-17px)] text-[#003326] top-[312px] translate-x-[-50%] w-[926px]" data-name="Texts">
      <p className="css-4hzbpn font-['Rowan_Variable:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[104px] w-full">Inserisci qui il testo della tua comunicazione.</p>
      <p className="css-4hzbpn font-['Switzer_Variable:Semibold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[48px] w-full">Scrivi qui un testo secondario!</p>
    </div>
  );
}

export default function Comunicazione() {
  return (
    <div className="bg-[#cce6df] relative size-full" data-name="comunicazione">
      <ComposizioniSfondo />
      <LogoMlolPortale />
      <Texts />
    </div>
  );
}