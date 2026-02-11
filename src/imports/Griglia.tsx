import imgImgLista1 from "figma:asset/5f18e834adbf2fb69b2a55b07f8eca695905a78c.png";
import imgImgLista2 from "figma:asset/17702930fd153a0fd553d44899b255d41989102c.png";
import imgImgLista3 from "figma:asset/6c9be65aa370ac40d1f48af380e9d12e82a1d837.png";

function ImgLista() {
  return (
    <div className="h-[776px] relative shrink-0 w-[524px]" data-name="img-lista1">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista1} />
    </div>
  );
}

function LeftComp() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="left-comp">
      <ImgLista />
    </div>
  );
}

function ImgLista1() {
  return (
    <div className="h-[366px] relative shrink-0 w-full" data-name="img-lista2">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista2} />
    </div>
  );
}

function ImgLista2() {
  return (
    <div className="h-[407px] relative shrink-0 w-full" data-name="img-lista3">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgLista3} />
    </div>
  );
}

function RightComp() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[260px]" data-name="right-comp">
      <ImgLista1 />
      <ImgLista2 />
    </div>
  );
}

function ListComp() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-start justify-center left-0 top-0 w-[793px]" data-name="list-comp">
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