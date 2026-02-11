import imgRectangle4 from "figma:asset/781dc28b50a951e58822aeb2f0ddec6dc80366b8.png";

export default function Ebook() {
  return (
    <div className="relative size-full" data-name="ebook">
      <div className="absolute h-[621px] left-0 top-0 w-[404px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <div className="absolute h-[301px] left-[424px] top-0 w-[196px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <div className="absolute h-[301px] left-[424px] top-[320px] w-[196px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle4} />
      </div>
    </div>
  );
}