import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection";
import OverviewBlog from "../components/OverviewBlog/OverviewBlog";
import OverviewProject from "../components/OverviewProject/OverviewProject";
import LetsConnects from "../components/LetsConnects";


export default function Home(){

    return (
        <div>
            <Hero/>
            <IntroSection />
            <OverviewProject />
            <OverviewBlog />
            <LetsConnects />
        </div>
    )
}