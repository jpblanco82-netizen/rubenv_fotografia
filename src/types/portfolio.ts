export interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  videos?: string[];
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
    featuredImage?: string;
    images?: string[];
  };
  categories: Category[];
  workshops?: {
    title: string;
    description: string;
    mainImage: string;
    upcomingDates: {
      id: number;
      date: string;
      location: string;
      status: string;
    }[];
  };
  featuredProjects: FeaturedProject[];
}