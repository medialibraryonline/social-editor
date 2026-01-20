import svgPaths from "./svg-14z1dm488a";
import imgLogoPortale from "figma:asset/f2d6c4215d1c91df8725eef582921488fe9bda8f.png";
import imgImgLista3 from "figma:asset/781dc28b50a951e58822aeb2f0ddec6dc80366b8.png";

function IconeOMlol() {
  return (
    <div className="relative size-[385.486px]" data-name="Icone O MLOL">
      <div className="absolute inset-[0_0_-0.03%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385.486 385.601">
          <g id="Icone O MLOL">
            <path clipRule="evenodd" d={svgPaths.pafa0700} fill="var(--fill-0, #99CCBF)" fillRule="evenodd" id="Path" />
          </g>
        </svg>
      </div>
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
    <div className="absolute contents left-[calc(50%-49.24px)] top-[calc(50%-34.92px)] translate-x-[-50%] translate-y-[-50%]" data-name="comp1">
      <div className="absolute flex items-center justify-center left-[calc(50%-393.94px)] size-[424.112px] top-[calc(50%-430.95px)] translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[353.926deg]">
          <IconeOMlol />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+347.75px)] size-[319.51px] top-[calc(50%+68.76px)] translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.393deg]">
          <IconeOMlol1 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-439.49px)] size-[300.016px] top-[calc(50%+423.16px)] translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[343.295deg]">
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
    <div className="absolute content-stretch flex items-center left-1/2 rounded-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="composizioni-sfondo1">
      <ComposizioniRisorseListe />
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
    <div className="absolute bottom-[66.97px] content-stretch flex gap-[24px] items-center left-[calc(50%+0.5px)] translate-x-[-50%]" data-name="logo-mlol-portale">
      <ImageWrapper />
      <Text />
    </div>
  );
}

function ImgLista2() {
  return (
    <div className="absolute h-[338px] left-[686px] top-[673.28px] w-[260px]" data-name="img-lista3">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista3} />
    </div>
  );
}

function ImgLista1() {
  return (
    <div className="absolute h-[338px] left-[686px] top-[306.28px] w-[260px]" data-name="img-lista2">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista3} />
    </div>
  );
}

function ImgLista() {
  return (
    <div className="absolute h-[711px] left-[134px] top-[306px] w-[523px]" data-name="img-lista1">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista3} />
    </div>
  );
}

function Griglia() {
  return (
    <div className="absolute contents left-[134px] top-[306px]" data-name="griglia">
      <ImgLista2 />
      <ImgLista1 />
      <ImgLista />
    </div>
  );
}

export default function Lista() {
  return (
    <div className="bg-[#cce6df] relative size-full" data-name="lista">
      <ComposizioniSfondo />
      <LogoMlolPortale />
      <p className="absolute bottom-[17.63%] css-4hzbpn font-['Switzer_Variable:Medium',sans-serif] font-medium leading-none left-1/2 text-[#003326] text-[32px] text-center top-[80%] translate-x-[-50%] w-[900px]">Curata da: Inserisci nome</p>
      <p className="absolute css-4hzbpn font-['Rowan_Variable:Medium',sans-serif] font-medium leading-[1.25] left-1/2 text-[#003326] text-[56px] text-center top-[calc(50%-513px)] translate-x-[-50%] w-[900px]">Inserire nome della lista</p>
      <p className="absolute css-4hzbpn font-['Switzer_Variable:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#003326] text-[48px] text-center top-[calc(50%-605px)] translate-x-[-50%] uppercase w-[900px]">Lista</p>
      <Griglia />
    </div>
  );
}