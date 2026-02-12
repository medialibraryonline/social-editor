import svgPaths from "./svg-nh0klp6fcg";

function Mlol() {
  return (
    <div className="h-[47.474px] relative shrink-0 w-[118px]" data-name="mlol">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 47.4739">
        <g id="mlol">
          <path d={svgPaths.p26f8a00} fill="var(--fill-0, #003326)" id="Vector" />
          <g id="Icone O MLOL" />
          <path d={svgPaths.pd08fd00} fill="var(--fill-0, #003326)" id="Vector_2" />
          <g id="Lettera M MLOL">
            <path d={svgPaths.p1ddb2e00} fill="var(--fill-0, #003326)" id="h" />
          </g>
          <path d={svgPaths.pe00be40} fill="var(--fill-0, #003326)" id="Exclude" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] h-[65px] items-start relative shrink-0 w-[335px]">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Mlol />
      <div className="font-['Switzer_Variable:Semibold',sans-serif] font-semibold leading-none relative shrink-0 text-[#003326] text-[16px] w-[125px] whitespace-pre-wrap">
        <p className="mb-0">editor grafico</p>
        <p>per social media</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[65px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[24px] relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px]">Seleziona Portale</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[111.086px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-center tracking-[-0.1504px]">Scegli un portale</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px]">Seleziona Template</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[20px] left-[21.4px] top-0 w-[48.734px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24.5px] not-italic text-[#0a0a0a] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">Risorsa</p>
    </div>
  );
}

function Container6() {
  return <div className="bg-[#539685] h-[0.914px] shrink-0 w-full" data-name="Container" />;
}

function Container7() {
  return <div className="bg-[#99ccbf] h-[10.094px] shrink-0 w-full" data-name="Container" />;
}

function Container8() {
  return <div className="bg-[#539685] h-[0.914px] shrink-0 w-full" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute bg-[#cce6df] content-stretch flex flex-col gap-[0.617px] h-[18px] items-start left-0 overflow-clip pl-[3.906px] pr-[3.93px] pt-[2.422px] top-px w-[14.398px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text />
        <Container5 />
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.133px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px]">Scegli il colore di sfondo</p>
    </div>
  );
}

function Container11() {
  return <div className="bg-[#cce6df] rounded-[16777200px] shrink-0 size-[18px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[22.5px] not-italic text-[#0a0a0a] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">Chiaro</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Container11 />
        <Text1 />
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.023px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan2 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px]">Seleziona icone sfondo</p>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.164px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Nessuna</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan3 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <PrimitiveButton3 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px]">Seleziona immagine della risorsa</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[97.4px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon4 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[183.4px] not-italic text-[#0a0a0a] text-[14px] text-center top-[8.5px] tracking-[-0.1504px]">Scegli immagine</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel4 />
      <Button />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px]">Scrivi il titolo del post</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px]">Inserisci qui il titolo del post</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel5 />
      <TextInput />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[411px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container9 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[89.17px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#030213] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon5 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[183.67px] not-italic text-[14px] text-center text-white top-[10.5px] tracking-[-0.1504px]">{`Scarica l'immagine`}</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[139.91px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_81_305)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667V8" id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333H8.00667" id="Vector_3" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_81_305">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#eceef2] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[183.41px] not-italic text-[#030213] text-[14px] text-center top-[6.5px] tracking-[-0.1504px]">Info</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[24px] pr-[25px] pt-[24px] relative size-full">
        <Group />
        <Container1 />
        <Button1 />
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}