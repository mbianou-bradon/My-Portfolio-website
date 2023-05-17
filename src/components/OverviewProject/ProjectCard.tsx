import { Link } from "react-router-dom";
import { ProjectType } from "../../../dataTypes";


export default function ProjectCard( props: { project: ProjectType}){
    const projectId = props.project._id;
    const projectCategories = props.project.category
    console.log(projectCategories)
    return (
        <Link to={`/projects/${projectId}`}>
            <div className="h-[25rem] rounded-lg overflow-hidden hover:-rotate-3 hover:scale-[1.04]">
                <div className="h-[75%] bg-tertiary overflow-hidden p-2">
                    <img src={props.project.images[0]} alt="" className="h-full aspect-video object-cover object-center hover:scale-[1.03]"/>
                </div>
                <div className="h-[25%] bg-rose-300 px-4 py-2 flex flex-col justify-between">
                    <h2 className="font-semibold">
                        {
                            projectCategories.map((category) => {
                                return (
                                    <span>{category}</span>
                                )
                            })
                        }
                    </h2>
                    <p>{props.project.title}</p>
                </div>
            </div>
        </Link>
    )
}