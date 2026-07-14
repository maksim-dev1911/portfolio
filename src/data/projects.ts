import agencyLandingImg from '@/assets/agencyLandingImg.png';
import socialNetworkImg from "@/assets/social-networkImg.png";
import appleLandingImg from "@/assets/appleLandingImg.png";
import finTruckImg from "@/assets/finTruckImg.png";
import type {IProject} from "@/interfaces/projects";

export const projectData: IProject[] = [
    {
        projectId: 1,
        category: 'Social Media Platform',
        title: 'Social Network',
        description: 'A modern social networking platform built with React and TypeScript. Users can create and edit profiles, publish posts, interact with other users, manage friends, and communicate through a real-time chat powered by WebSockets. The application features authentication, image uploads, responsive design, and a clean, intuitive user experience.',
        image: socialNetworkImg,
        techStack: [
            {title: '⚛️ React'},
            {title: '🔷 TypeScript'},
            {title: '🧰 Redux Toolkit'},
            {title: '🌊 MaterialUI'},
            {title: '🔌 WebSocket'},
            {title: '🌐 REST API'},
            {title: '📨 Axios'},
            {title: '🧭 React Router'},
            {title: '📝 React Final Form'},
        ],
        linkToCode: 'https://github.com/maksim-dev1911/SocialNetwork'
    },
    {
        projectId: 2,
        category: 'Product Landing Page',
        title: 'Apple Landing',
        description: 'A premium product landing page inspired by Apple\'s design philosophy. The project demonstrates responsive design, pixel-perfect implementation, smooth UI animations, and attention to visual detail using modern frontend technologies.',
        image: appleLandingImg,
        techStack: [
            {title: '🌐 HTML5'},
            {title: '🎨 SCSS'},
            {title: '🟨 JavaScript'},
            {title: '⚡ Vite'},
        ],
        linkToCode: 'https://github.com/maksim-dev1911/apple-landing'
    },
    {
        projectId: 3,
        category: 'Creative Agency Landing',
        title: 'Agency Landing Page',
        description: 'A responsive landing page for a creative digital agency built with HTML and SCSS. The project focuses on clean design, semantic markup, responsive layouts, and a smooth user experience across all devices.',
        image: agencyLandingImg,
        techStack: [
            {title: '🌐 HTML5'},
            {title: '🎨 SCSS'},
            {title: '⚡ Vite'},
        ],
        linkToCode: 'https://github.com/maksim-dev1911/creative-agency-landing'
    },
    {
        projectId: 4,
        category: 'Coming Soon',
        title: 'Fin Truck',
        description: 'Fintruck is a modern financial platform designed to simplify the way individuals and businesses manage their finances. The platform provides secure, intuitive, and efficient digital financial solutions, bringing together payment services, expense tracking, financial analytics, and business management tools in one centralized web experience.',
        image: finTruckImg,
        techStack: [
            {title: '🌐 HTML5'},
            {title: '🎨 SCSS'},
            {title: '⚡ Vite'},
        ],
        linkToCode: 'https://github.com/maksim-dev1911/creative-agency-landing'
    }
]