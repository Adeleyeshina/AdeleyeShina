
import AboutIntro from "../components/about/AboutIntro"
import AboutTimeline from "../components/about/AboutExperience"
import PageWrapper from "../components/PageWrapper"
import AboutHighlights from "../components/about/AboutHighlight"
import AboutValues from "../components/about/AboutValues"
import AboutCTA from "../components/about/AboutCTA"


const About = () => {
  return (
    <PageWrapper>
      <AboutIntro />
      <AboutTimeline />
      {/* <AboutSkills /> */}
      <AboutHighlights />
      <AboutValues />
      <AboutCTA />
    </PageWrapper>
  )
}

export default About