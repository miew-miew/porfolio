import NavigationBar from "./components/NavigationBar"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Banner from "./components/Banner"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
