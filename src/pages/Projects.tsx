import PageWrapper from "../components/PageWrapper"
import ProjectsGrid from "../components/projects/ProjectGrid"
import ProjectsCTA from "../components/projects/ProjectsCTA"
import ProjectsHeader from "../components/projects/ProjectsHeader"


const Projects = () => {
  return (
    <PageWrapper>
      <ProjectsHeader/>
      <ProjectsGrid />
      <ProjectsCTA />
    </PageWrapper>
  )
}

export default Projects