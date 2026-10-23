export interface Program {
  id: string;
  name: string;
  time: string;
  startTime: string; // HH:mm format for 24h calculation
  endTime: string;
  tagline: string;
  description: string;
  contents: string[];
  target: string;
  host: string;
  category: 'Religi' | 'News' | 'Entertainment' | 'Komunitas' | 'Lifestyle';
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  category: 'Malang' | 'News' | 'Lifestyle' | 'Inspirasi' | 'Religi' | 'UMKM' | 'Kesehatan' | 'Komunitas';
  date: string;
  author: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  series: string;
  category: 'Inspirasi' | 'Religi' | 'UMKM' | 'Lifestyle' | 'Community';
  duration: string;
  date: string;
  host: string;
  guest?: string;
  description: string;
  audioUrl?: string;
  thumbnail: string;
}

export interface DimoRole {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  speech: string;
  color: string;
  badge: string;
}

export interface AdPackage {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  suitableFor: string;
  popular?: boolean;
}
