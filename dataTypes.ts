export interface ProjectType {
    _id : string;
    title: string;
    desc: string;
    images: string[];
    socialLinks: {
        liveLink: string;
        GitHub: string; 
    };
    techStacks: string[];
    category: string[];
}

export interface BlogType {
    title: string;
    coverImage: string;
    content: string;
}
