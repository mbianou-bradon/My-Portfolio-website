import { Hero, IntroSection, LetsConnects, OverviewBlog, OverviewProject } from "../../components";


export default function Home(){

    return (
        <div>
            <Hero />
            <IntroSection />
            <OverviewProject />
            <OverviewBlog />
            <LetsConnects />
        </div>
    )
}