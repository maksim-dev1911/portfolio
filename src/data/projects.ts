import socialNetworkIcon from "@/assets/socialNetworkIcon.png";
import todoListIcon from "@/assets/todoListIcon.png";
import todoListImg from "@/assets/todo-list.jpg";
import socialNetworkImg from "@/assets/social-network.jpg";
import type {IProject} from "@/interfaces/projects";

export const projectData: IProject[] = [
    {
        projectId: 1,
        framework: 'React / Redux / Material UI',
        title: "Social Network",
        iconImage: socialNetworkIcon,
        image: socialNetworkImg
    },
    {projectId: 2, framework: 'React / Redux', title: "Todo List", iconImage: todoListIcon, image: todoListImg},
    {
        projectId: 3,
        framework: 'React / Redux',
        title: "Social Network",
        iconImage: socialNetworkIcon,
        image: todoListImg
    }
]