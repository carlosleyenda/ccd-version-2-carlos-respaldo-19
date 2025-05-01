
export type ResourceType = 'document' | 'video' | 'tutorial' | 'template' | 'software' | 'article';
export type ResourceCategory = 'engineering' | 'mining' | 'management' | 'safety' | 'environment' | 'general';

export interface Resource {
  id: string;
  title: string;
  description?: string;
  type: ResourceType;
  category: ResourceCategory;
  fileType?: string;
  thumbnail: string;
  url?: string;
  fileSize?: string;
  createdAt: string;
  updatedAt: string;
  author?: string;
  featured?: boolean;
  downloadCount?: number;
  isFavorite?: boolean;
}
