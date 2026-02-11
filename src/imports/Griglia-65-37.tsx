import imgImgLista1 from "figma:asset/781dc28b50a951e58822aeb2f0ddec6dc80366b8.png";

function ImgLista() {
  return (
    <div className="h-full relative shrink-0 w-[523px]" data-name="img-lista1">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista1} />
    </div>
  );
}

function LeftComp() {
  return (
    <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="left-comp">
      <ImgLista />
    </div>
  );
}

function ImgLista1() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="img-lista2">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista1} />
    </div>
  );
}

function ImgLista2() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="img-lista3">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista1} />
    </div>
  );
}

function RightComp() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] h-full items-center relative shrink-0 w-[260px]" data-name="right-comp">
      <ImgLista1 />
      <ImgLista2 />
    </div>
  );
}

function ListComp() {
  return (
    <div className="absolute content-stretch flex gap-[5px] h-[711px] items-center justify-center left-0 top-0 w-[793px]" data-name="list-comp">
      <LeftComp />
      <RightComp />
    </div>
  );
}

export default function Griglia() {
  return (
    <div className="relative size-full" data-name="griglia">
      <ListComp />
    </div>
  );
}