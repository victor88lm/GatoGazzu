// slider.interface.ts
export interface Slide {
    id: number;
    imagePath: string;
    title: string;
    subtitle?: string;
    content?: string;
    altText: string;
  }