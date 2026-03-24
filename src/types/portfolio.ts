export interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}

export interface Project {
  id: string;
  title: string;
  categoryId: string;
  image: string;
  location?: string;
}

export interface PhotographerData {
  name: string;
  tagline: string;
  about: {
    story: string[];
    highlights: string[];
    profileImage: string;
  };
  categories: Category[];
  featuredProjects: Project[];
}
