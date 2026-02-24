import { Navbar } from "@/layout/Navbar"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
import { Contact } from "@/sections/Contact"

function App() {
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
