export interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  categoryId: string;
  image: string;
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
  featuredProjects: FeaturedProject[];
}