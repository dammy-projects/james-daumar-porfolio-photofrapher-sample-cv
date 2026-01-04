
export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
}

export interface VisionResult {
  concept: string;
  lighting: string;
  technique: string;
  vibe: string;
}

export enum Section {
  HERO = 'hero',
  GALLERY = 'gallery',
  ABOUT = 'about',
  VISION = 'vision',
  CONTACT = 'contact'
}
