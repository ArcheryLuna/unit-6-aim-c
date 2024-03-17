const Resources: {
    resourceId: number;
    resourceName: string;
    resourceType: string;
    resourcePaid: boolean;
    resourceAmount?: number;
    resourceLink: string;
}[] = [
    {
        resourceId: 1,
        resourceName: "React",
        resourceType: "Library",
        resourcePaid: false,
        resourceLink: "https://reactjs.org/"
    }, {
        resourceId: 2,
        resourceName: "Next.js",
        resourceType: "Framework",
        resourcePaid: false,
        resourceLink: "https://nextjs.org/"
    }, {
        resourceId: 3,
        resourceName: "ReFactoringUI",
        resourceType: "Book",
        resourcePaid: true,
        resourceAmount: 150,
        resourceLink: "https://refactoringui.com/"
    }, {
        resourceId: 4,
        resourceName: "TailwindCSS",
        resourceType: "Framework",
        resourcePaid: false,
        resourceLink: "https://tailwindcss.com/"
    }, {
        resourceId: 5,
        resourceName: "The C Programming Language",
        resourceType: "Book",
        resourcePaid: true,
        resourceAmount: 50,
        resourceLink: "https://amzn.to/49VIg0y"
    }, {
        resourceId: 6,
        resourceName: "Vue.js",
        resourceType: "Library",
        resourcePaid: false,
        resourceLink: "https://vuejs.org/"
    }, {
        resourceId: 7,
        resourceName: "Angular",
        resourceType: "Framework",
        resourcePaid: false,
        resourceLink: "https://angular.io/"
    }, {
        resourceId: 8,
        resourceName: "Design Patterns: Elements of Reusable Object-Oriented Software",
        resourceType: "Book",
        resourcePaid: true,
        resourceAmount: 60,
        resourceLink: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612"
    }, {
        resourceId: 9,
        resourceName: "SASS",
        resourceType: "Library",
        resourcePaid: false,
        resourceLink: "https://sass-lang.com/"
    }, {
        resourceId: 10,
        resourceName: "Clean Code: A Handbook of Agile Software Craftsmanship",
        resourceType: "Book",
        resourcePaid: true,
        resourceAmount: 45,
        resourceLink: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
    }, {
        resourceId: 11,
        resourceName: "Flutter",
        resourceType: "Framework",
        resourcePaid: false,
        resourceLink: "https://flutter.dev/"
    }, {
        resourceId: 12,
        resourceName: "You Don't Know JS",
        resourceType: "Book Series",
        resourcePaid: true,
        resourceAmount: 120,
        resourceLink: "https://github.com/getify/You-Dont-Know-JS"
    }, {
        resourceId: 13,
        resourceName: "GraphQL",
        resourceType: "Technology",
        resourcePaid: false,
        resourceLink: "https://graphql.org/"
    }, {
        resourceId: 14,
        resourceName: "Docker",
        resourceType: "Tool",
        resourcePaid: false,
        resourceLink: "https://www.docker.com/"
    }, {
        resourceId: 15,
        resourceName: "Eloquent JavaScript",
        resourceType: "Book",
        resourcePaid: true,
        resourceAmount: 30,
        resourceLink: "https://eloquentjavascript.net/"
    }
]

export default Resources;
