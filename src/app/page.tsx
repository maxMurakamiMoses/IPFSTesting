import About from '@/components/about'
import Experience from '@/components/experience'
import Intro from '@/components/Intro'
import Projects from '@/components/projects'
import SectionDivider from '@/components/SectionDivider'
import Skills from '@/components/skills'
import Interests from '@/components/Interests/Interests'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Interests />
    </main>
  )
}