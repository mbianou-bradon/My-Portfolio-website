export interface Project {
    title: string;
    desc: string;
    images: string[];
    socialMedia: SocialMedia;
}

interface SocialMedia {
    liveLink: string;
    github: string;
}