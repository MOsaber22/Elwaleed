import About from "../components/About"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import Facility from "../components/Facility"
import Hero from "../components/Hero"
import Markets from "../components/Markets"
import Office from "../components/Office"
import Process from "../components/Process"
import Products from "../components/Products"
import WhyUs from "../components/WhyUs"
import Leadership from "../components/Leadership"

const Home = () => {
  return (
     <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Facility />
        <Office />
        <Leadership />
        <Markets />
        <WhyUs />
        <Certifications />
        <Contact />
      </main>
  )
}

export default Home