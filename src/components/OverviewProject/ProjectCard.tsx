import { Link } from "react-router-dom";
import { ProjectType } from "../../../dataTypes";


export default function ProjectCard( props: { project: ProjectType}){
    const projectId = props.project._id;
    const projectCategories = props.project.category
 
    return (
        <Link to={`/projects/${projectId}`}>
            <div className="h-[25rem] border border-tertiary rounded-lg overflow-hidden hover:-rotate-3 hover:scale-[1.04]">
                <div className="h-[75%] bg-tertiary overflow-hidden p-2">
                    <img src={props.project.images[0]} alt={props.project.title} className="h-full aspect-video object-cover object-center hover:scale-[1.03]"/>
                </div>
                <div className="h-[25%] px-4 py-2 flex flex-col justify-between">
                    <p className="font-semibold flex gap-3">
                        {
                            projectCategories.map((category) => {
                                return (
                                    <span className="text-sm">{category}</span>
                                )
                            })
                        }
                    </p>
                    <p>{props.project.title}</p>
                </div>
            </div>
        </Link>
    )
}