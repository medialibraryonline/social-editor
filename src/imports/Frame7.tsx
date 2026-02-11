function Ebook1() {
  return (
    <div className="absolute contents inset-[22%_27.31%_21.98%_27.13%]" data-name="ebook">
      <div className="absolute bg-[#99ccbf] inset-[22%_27.31%_21.98%_27.13%]" data-name="immagine 1" />
    </div>
  );
}

function Ebook() {
  return (
    <div className="bg-[#cce6df] h-[70px] overflow-clip relative shrink-0 w-[56px]" data-name="ebook">
      <Ebook1 />
      <div className="absolute bg-[#539685] inset-[13.48%_26.02%_81.48%_25.93%]" />
      <div className="absolute bg-[#539685] inset-[86.59%_37.04%_8.37%_36.94%]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <Ebook />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Risorsa</p>
    </div>
  );
}

function Ebook3() {
  return (
    <div className="absolute contents inset-[27.04%_21.3%_26.96%_21.3%]" data-name="ebook">
      <div className="absolute bg-[#99ccbf] inset-[27.04%_41.3%_26.96%_21.3%]" data-name="immagine 1" />
      <div className="absolute bg-[#99ccbf] inset-[27.04%_21.3%_50.67%_60.56%]" data-name="immagine 2" />
      <div className="absolute bg-[#99ccbf] inset-[50.74%_21.3%_26.96%_60.56%]" data-name="immagine 3" />
    </div>
  );
}

function Ebook2() {
  return (
    <div className="bg-[#cce6df] h-[70px] overflow-clip relative shrink-0 w-[56px]" data-name="ebook">
      <Ebook3 />
      <div className="absolute bg-[#539685] inset-[13.48%_26.02%_81.48%_25.93%]" />
      <div className="absolute bg-[#539685] inset-[86.59%_37.04%_8.37%_36.94%]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <Ebook2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Lista di risorse (ebook)</p>
    </div>
  );
}

function Ebook4() {
  return (
    <div className="absolute contents inset-[29.19%_11.59%]" data-name="ebook">
      <div className="absolute bg-[#99ccbf] inset-[29.19%_38.35%_29.19%_11.59%]" data-name="immagine 1" />
      <div className="absolute bg-[#99ccbf] inset-[29.19%_11.59%_50.64%_64.12%]" data-name="immagine 2" />
      <div className="absolute bg-[#99ccbf] inset-[50.64%_11.59%_29.19%_64.12%]" data-name="immagine 3" />
    </div>
  );
}

function Audiolibri() {
  return (
    <div className="bg-[#cce6df] h-[70px] overflow-clip relative shrink-0 w-[56px]" data-name="audiolibri">
      <Ebook4 />
      <div className="absolute bg-[#539685] inset-[13.48%_26.02%_81.48%_25.93%]" />
      <div className="absolute bg-[#539685] inset-[86.59%_37.04%_8.37%_36.94%]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <Audiolibri />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Lista di risorse (audiolibri)</p>
    </div>
  );
}

function Comunicazione() {
  return (
    <div className="bg-[#cce6df] h-[70px] overflow-clip relative shrink-0 w-[56px]" data-name="comunicazione">
      <div className="absolute bg-[#539685] inset-[13.78%_17.78%_81.19%_8.15%]" />
      <div className="absolute bg-[#539685] inset-[21.19%_39.35%_73.78%_8.15%]" />
      <div className="absolute bg-[#539685] inset-[35.93%_27.41%_62.59%_8.15%]" />
      <div className="absolute bg-[#539685] inset-[39.78%_27.41%_58.74%_8.15%]" />
      <div className="absolute bg-[#539685] inset-[43.63%_27.41%_54.89%_8.15%]" />
      <div className="absolute bg-[#539685] inset-[47.48%_27.41%_51.04%_8.15%]" />
      <div className="absolute bg-[#539685] inset-[51.33%_27.41%_47.19%_8.15%]" />
      <div className="absolute bg-[#539685] inset-[55.19%_27.41%_43.33%_8.15%]" />
      <div className="absolute bg-[#539685] inset-[59.04%_27.41%_39.48%_8.15%]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <Comunicazione />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Comunicazione</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px relative">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame4 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white content-stretch flex items-center p-[10px] relative rounded-[4px] size-full">
      <Frame3 />
    </div>
  );
}