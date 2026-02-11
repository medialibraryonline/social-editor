interface IconProps {
  size?: 'small' | 'large';
}

export function RisorsaIcon({ size = 'large' }: IconProps) {
  const dimensions = size === 'small' ? { h: 'h-[18px]', w: 'w-[14.4px]' } : { h: 'h-[70px]', w: 'w-[56px]' };
  
  return (
    <div className={`bg-[#cce6df] ${dimensions.h} overflow-clip relative shrink-0 ${dimensions.w}`} data-name="ebook">
      <div className="absolute contents inset-[22%_27.31%_21.98%_27.13%]" data-name="ebook">
        <div className="absolute bg-[#99ccbf] inset-[22%_27.31%_21.98%_27.13%]" data-name="immagine 1" />
      </div>
      <div className="absolute bg-[#539685] inset-[13.48%_26.02%_81.48%_25.93%]" />
      <div className="absolute bg-[#539685] inset-[86.59%_37.04%_8.37%_36.94%]" />
    </div>
  );
}

export function ListaEbookIcon({ size = 'large' }: IconProps) {
  const dimensions = size === 'small' ? { h: 'h-[18px]', w: 'w-[14.4px]' } : { h: 'h-[70px]', w: 'w-[56px]' };
  
  return (
    <div className={`bg-[#cce6df] ${dimensions.h} overflow-clip relative shrink-0 ${dimensions.w}`} data-name="ebook">
      <div className="absolute contents inset-[27.04%_21.3%_26.96%_21.3%]" data-name="ebook">
        <div className="absolute bg-[#99ccbf] inset-[27.04%_41.3%_26.96%_21.3%]" data-name="immagine 1" />
        <div className="absolute bg-[#99ccbf] inset-[27.04%_21.3%_50.67%_60.56%]" data-name="immagine 2" />
        <div className="absolute bg-[#99ccbf] inset-[50.74%_21.3%_26.96%_60.56%]" data-name="immagine 3" />
      </div>
      <div className="absolute bg-[#539685] inset-[13.48%_26.02%_81.48%_25.93%]" />
      <div className="absolute bg-[#539685] inset-[86.59%_37.04%_8.37%_36.94%]" />
    </div>
  );
}

export function ListaAudiolibriIcon({ size = 'large' }: IconProps) {
  const dimensions = size === 'small' ? { h: 'h-[18px]', w: 'w-[14.4px]' } : { h: 'h-[70px]', w: 'w-[56px]' };
  
  return (
    <div className={`bg-[#cce6df] ${dimensions.h} overflow-clip relative shrink-0 ${dimensions.w}`} data-name="audiolibri">
      <div className="absolute contents inset-[29.19%_11.59%]" data-name="ebook">
        <div className="absolute bg-[#99ccbf] inset-[29.19%_38.35%_29.19%_11.59%]" data-name="immagine 1" />
        <div className="absolute bg-[#99ccbf] inset-[29.19%_11.59%_50.64%_64.12%]" data-name="immagine 2" />
        <div className="absolute bg-[#99ccbf] inset-[50.64%_11.59%_29.19%_64.12%]" data-name="immagine 3" />
      </div>
      <div className="absolute bg-[#539685] inset-[13.48%_26.02%_81.48%_25.93%]" />
      <div className="absolute bg-[#539685] inset-[86.59%_37.04%_8.37%_36.94%]" />
    </div>
  );
}

export function ComunicazioneIcon({ size = 'large' }: IconProps) {
  const dimensions = size === 'small' ? { h: 'h-[18px]', w: 'w-[14.4px]' } : { h: 'h-[70px]', w: 'w-[56px]' };
  
  return (
    <div className={`bg-[#cce6df] ${dimensions.h} overflow-clip relative shrink-0 ${dimensions.w}`} data-name="comunicazione">
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