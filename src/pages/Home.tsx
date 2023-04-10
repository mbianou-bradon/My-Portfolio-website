import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import OverviewProject from "../components/OverviewProject/OverviewProject";


export default function Home(){

    return (
        <div>
            <Hero/>
            <IntroSection />
            <OverviewProject/>
        </div>
    )
}