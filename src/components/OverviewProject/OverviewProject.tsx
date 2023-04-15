import ProjectCard from "./ProjectCard";


export default function OverviewProject(){

    return (
        <div className="py-10 sm:py-20 px-4 sm:px-20">
            <div>
                <div className="mb-8">
                    <h2 className="text-4xl mb-2">Latest Works</h2>
                    <p className="text-xs text-tertiary">Perfect Solutions For digital experience</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
                <div className="mt-10 text-center">
                    <div className="text-secondary underline cursor-pointer font-semibold text-xl mb-2 hover:no-underline w-fit mx-auto">
                        <h2>ALL PROJECTS</h2>
                    </div>
                    <p className="text-[0.5rem] text-tertiary w-[50%] mx-auto">*Some projects not allow publish by NDA, if you want to see more, <span><a href="#">contact</a></span></p>
                </div>
            </div>
        </div>
    )
}