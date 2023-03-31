import Layout from "../../components/layout/layout";
import Banner from "../../components/shared/banner";
import AnimatedSection from "../../components/shared/animated-section";
import {Element} from "react-scroll";
import SupportSection from "../../components/shared/support-section";
import AboutSection from "../../components/shared/about-section";
import AdoptionSection from "../../components/shared/adoption-section";

const HomePage = () => {

    return (
        <Layout>
            <Element name="home">
                <AnimatedSection backgroundColor="background.paper">
                    <Banner/>
                </AnimatedSection>
            </Element>

            <Element name="about">
                <AnimatedSection>
                    <AboutSection/>
                </AnimatedSection>
            </Element>
            <Element name="adoption">
                <AnimatedSection backgroundColor="background.paper">
                    <AdoptionSection/>
                </AnimatedSection>
            </Element>

            <Element name="contact">
                <AnimatedSection backgroundColor="background.paper">
                    <SupportSection/>
                </AnimatedSection>
            </Element>

        </Layout>
    )
}

export default HomePage;