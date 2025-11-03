export type IconName = "FileCheck" | "Radio" | "Lightbulb" | "User" | "Clock";

export interface AppFeature {
  name: string;
  icon: string;
}

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: IconName;
  color: string;
  bgColor: string;
  bgPattern: string;
  features: AppFeature[];
  comingSoon?: boolean;
}
