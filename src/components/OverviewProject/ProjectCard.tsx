import { Link } from "react-router-dom";


export default function ProjectCard(){
    const projectId = 5;
    return (
        <Link to={"/projects/" + projectId}>
            <div className="h-[25rem] rounded-lg overflow-hidden hover:-rotate-3 hover:scale-[1.04]">
                <div className="h-[75%] bg-teal-400 overflow-hidden">
                    <img src="" alt="" className="h-full w-full object-cover hover:scale-[1.03]"/>
                </div>
                <div className="h-[25%] bg-rose-300 px-4 py-2 flex flex-col justify-between">
                    <h2 className="font-semibold">Category</h2>
                    <p>IkniteSpaceIn</p>
                </div>
            </div>
        </Link>
    )
}