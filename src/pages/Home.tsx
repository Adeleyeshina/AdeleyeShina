import ContactForm from "../components/ContactForm"
import AboutPreview from "../components/home/AboutPreview"
import ContactCTA from "../components/home/ContactCTA"
import FeaturedProjects from "../components/home/FeaturedProjects"
import Hero from "../components/home/Hero"
import ServicesPreview from "../components/home/ServicesPreview"
import SkillsPreview from "../components/home/SkillPreview"
import PageWrapper from "../components/PageWrapper"



const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <ServicesPreview />
      <ContactCTA />
      <ContactForm />
    </PageWrapper>
  )
}

export default Home