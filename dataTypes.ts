export interface Project {
    title: string;
    desc: string;
    images: string[];
    socialMedia: {
        liveLink: string;
        github: string; 
    };
    techStacks: string[];
    categories: string[];
}

export interface Blog {
    title: string;
    coverImage: string;
    content: string;
}
