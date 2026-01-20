import { ReactNode } from 'react';

interface CanvasIsolatorProps {
  children: ReactNode;
}

/**
 * This component creates an isolated rendering context for html2canvas
 * by overriding all CSS variables that might use oklch colors
 */
export function CanvasIsolator({ children }: CanvasIsolatorProps) {
  const style = {
    width: '1080px',
    height: '1350px',
    position: 'relative' as const,
    // Override all potential color variables with standard colors
    '--background': '#ffffff',
    '--foreground': '#000000',
    '--card': '#ffffff',
    '--card-foreground': '#000000',
    '--popover': '#ffffff',
    '--popover-foreground': '#000000',
    '--primary': '#030213',
    '--primary-foreground': '#ffffff',
    '--secondary': '#f3f3f5',
    '--secondary-foreground': '#030213',
    '--muted': '#ececf0',
    '--muted-foreground': '#717182',
    '--accent': '#e9ebef',
    '--accent-foreground': '#030213',
    '--destructive': '#d4183d',
    '--destructive-foreground': '#ffffff',
    '--border': 'rgba(0, 0, 0, 0.1)',
    '--input': 'transparent',
    '--ring': '#b3b3b3',
  } as React.CSSProperties;

  return <div style={style}>{children}</div>;
}
