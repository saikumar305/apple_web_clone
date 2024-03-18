import Hero from "./components/Hero"
import Highlighs from "./components/Highlighs"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <> <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Navbar/>
  <Hero/>
  <Highlighs/>
    </>
   

  )
}

export default App