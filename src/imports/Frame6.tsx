function Frame() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <div className="bg-[#cce6df] rounded-[100px] shrink-0 size-[18px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Chiaro</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <div className="bg-[#158267] rounded-[100px] shrink-0 size-[18px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Medio</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <div className="bg-[#004d3a] rounded-[100px] shrink-0 size-[18px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Scuro</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[74px]">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-white content-stretch flex items-center p-[10px] relative rounded-[4px] size-full">
      <Frame3 />
    </div>
  );
}