import svgPaths from "@/imports/svg-p6zt12xz2f";
import { ColorScheme } from '../TemplateEditor';

interface MlolFullLogoProps {
  colorScheme: ColorScheme;
}

export function MlolFullLogo({ colorScheme }: MlolFullLogoProps) {
  const fill = colorScheme === 'chiaro' ? '#003326' : '#ffffff';
  
  return (
    <div className="h-[81.156px] w-[201.72px]" data-name="Logo MLOL">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201.72 81.1553">
        <g id="Logo MLOL">
          <path d={svgPaths.p3b7a6900} fill={fill} id="Vector" />
          <g id="Icone O MLOL">
            <path d={svgPaths.p14392d80} fill={fill} id="Path" />
          </g>
          <path d={svgPaths.p103cb920} fill={fill} id="Vector_2" />
          <g id="Lettera M MLOL">
            <path d={svgPaths.p10fe8f80} fill={fill} id="h" />
          </g>
        </g>
      </svg>
    </div>
  );
}
