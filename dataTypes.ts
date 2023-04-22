export interface ProjectType {
    title: string;
    desc: string;
    images: string[];
    socialMedia: {
        liveLink: string;
        GitHub: string; 
    };
    techStacks: string[];
    categories: string[];
}

export interface BlogType {
    title: string;
    coverImage: string;
    content: string;
}
