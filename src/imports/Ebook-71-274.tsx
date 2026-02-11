import svgPaths from "./svg-7fuhm8u1d5";
import imgLogoPortale from "figma:asset/774d95e2d58d9aeb3fbd1f3af48079283b2af255.png";
import imgImmagine1 from "figma:asset/781dc28b50a951e58822aeb2f0ddec6dc80366b8.png";

function IconeOMlol() {
  return (
    <div className="relative size-[385.486px]" data-name="Icone O MLOL">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385.486 385.601">
        <g id="Icone O MLOL">
          <path clipRule="evenodd" d={svgPaths.pafa0700} fill="var(--fill-0, #99CCBF)" fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function IconeOMlol1() {
  return (
    <div className="relative size-[289.115px]" data-name="Icone O MLOL">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 289.115 289.115">
        <g id="Icone O MLOL">
          <path clipRule="evenodd" d={svgPaths.p26c70200} fill="var(--fill-0, #99CCBF)" fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function IconeOMlol2() {
  return (
    <div className="relative size-[240.929px]" data-name="Icone O MLOL">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240.929 240.929">
        <g id="Icone O MLOL">
          <path clipRule="evenodd" d={svgPaths.p1b9b2900} fill="var(--fill-0, #99CCBF)" fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Comp() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-49.24px)] top-[calc(50%-34.92px)]" data-name="comp1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-393.94px)] size-[424.112px] top-[calc(50%-430.95px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-6.07deg]">
          <IconeOMlol />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+347.75px)] size-[319.51px] top-[calc(50%+68.76px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.39deg]">
          <IconeOMlol1 />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-439.49px)] size-[300.016px] top-[calc(50%+423.16px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-16.71deg]">
          <IconeOMlol2 />
        </div>
      </div>
    </div>
  );
}

function ComposizioniRisorseListe() {
  return (
    <div className="h-[1350px] overflow-clip relative shrink-0 w-[1080px]" data-name="composizioni-risorse-liste">
      <Comp />
    </div>
  );
}

function ComposizioniSfondo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-1/2 rounded-[40px] top-1/2" data-name="composizioni-sfondo1">
      <ComposizioniRisorseListe />
    </div>
  );
}

function LogoPortale() {
  return (
    <div className="relative shrink-0 size-[94px]" data-name="logo-portale">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoPortale} />
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
      <p className="font-['Switzer_Variable:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#003326] text-[32px]">portale.medialibrary.it</p>
    </div>
  );
}

function LogoMlolPortale() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[66.97px] content-stretch flex gap-[24px] items-center left-[calc(50%+0.5px)]" data-name="logo-mlol-portale">
      <ImageWrapper />
      <Text />
    </div>
  );
}

function Ebook1() {
  return (
    <div className="absolute contents left-[230px] top-[365px]" data-name="ebook">
      <div className="absolute h-[621px] left-[230px] top-[365px] w-[404px]" data-name="immagine 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImmagine1} />
      </div>
      <div className="absolute h-[301px] left-[654px] top-[365px] w-[196px]" data-name="immagine 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImmagine1} />
      </div>
      <div className="absolute h-[301px] left-[654px] top-[685px] w-[196px]" data-name="immagine 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImmagine1} />
      </div>
    </div>
  );
}

export default function Ebook() {
  return (
    <div className="bg-[#cce6df] relative size-full" data-name="ebook">
      <ComposizioniSfondo />
      <LogoMlolPortale />
      <p className="-translate-x-1/2 absolute bottom-[17.63%] font-['Switzer_Variable:Medium',sans-serif] font-medium leading-none left-1/2 text-[#003326] text-[32px] text-center top-[80%] w-[900px] whitespace-pre-wrap">Curata da: Inserisci nome</p>
      <p className="-translate-x-1/2 absolute font-['Rowan_Variable:Medium',sans-serif] font-medium leading-[1.25] left-1/2 text-[#003326] text-[56px] text-center top-[calc(50%-513px)] w-[900px] whitespace-pre-wrap">Inserire nome della lista</p>
      <p className="-translate-x-1/2 absolute font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#003326] text-[48px] text-center top-[calc(50%-605px)] uppercase w-[900px] whitespace-pre-wrap">Lista</p>
      <Ebook1 />
    </div>
  );
}