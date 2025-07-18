export interface Project {
    id: number
    title: string
    description: string
    screenshot: string
    stack: string[]
    demo: string
    github?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Projet 1",
        description: "Description du projet avec les points clés... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eum, dolorum modi culpa nihil commodi voluptate perspiciatis voluptatem nam porro atque recusandae minima aliquid minus incidunt quo ea sunt deleniti. Debitis possimus consequuntur, quasi voluptatum quia, repellat magnam id quisquam rerum animi eligendi incidunt dolores enim! Iusto delectus est quibusdam.",
        screenshot: "https://placehold.co/600x400",
        stack: ["React", "API"],
        demo: "http://fakeurl.com",
        github: "http://fakeurl.com"
    },
    {
        id: 2,
        title: "Projet 2",
        description: "Description du projet avec les points clés... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eum, dolorum modi culpa nihil commodi voluptate perspiciatis voluptatem nam porro atque recusandae minima aliquid minus incidunt quo ea sunt deleniti. Debitis possimus consequuntur, quasi voluptatum quia, repellat magnam id quisquam rerum animi eligendi incidunt dolores enim! Iusto delectus est quibusdam.",
        screenshot: "https://placehold.co/600x400",
        stack: ["Next.js", "Django", "API"],
        demo: "http://fakeurl.com",
        github: "http://fakeurl.com"
    },
]