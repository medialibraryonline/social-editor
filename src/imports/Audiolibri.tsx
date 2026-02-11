import imgRectangle1 from "figma:asset/781dc28b50a951e58822aeb2f0ddec6dc80366b8.png";

export default function Audiolibri() {
  return (
    <div className="relative size-full" data-name="audiolibri">
      <div className="absolute left-0 size-[621px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <div className="absolute left-[641px] size-[301px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <div className="absolute left-[641px] size-[301px] top-[320px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}