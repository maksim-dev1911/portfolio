export type TechStackObj = {
    title: string;
}

export interface IProject {
    projectId: number;
    category: string,
    title: string;
    description: string;
    image: string;
    techStack: Array<TechStackObj>;
    linkToCode: string;
}