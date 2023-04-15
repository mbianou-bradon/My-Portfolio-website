import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import OverviewBlog from "../components/OverviewBlog/OverviewBlog";
import OverviewProject from "../components/OverviewProject/OverviewProject";
import letsConnect from "../components/letsConnect";


export default function Home(){

    return (
        <div>
            <Hero/>
            <IntroSection />
            <OverviewProject />
            <OverviewBlog />
            <letsConnect/>
        </div>
    )
}