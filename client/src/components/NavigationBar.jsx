import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/FN.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

function NavigationBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, []) 

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
            href="#home"
            className={activeLink === 'home' ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink('home')} 
            >
                Accueil
            </Nav.Link>  
            <Nav.Link 
            href="#skills"
            className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} 
            onClick={() => onUpdateActiveLink('skills')} 
            >
                Compétences
            </Nav.Link>   
            <Nav.Link 
            href="#projects"
            className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} 
            onClick={() => onUpdateActiveLink('projects')} 
            >
                Réalisations
            </Nav.Link>           
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ny-aina-razanakoto-b8832a293/"> <img src={navIcon1} alt="" /> </a>
                <a href="https://www.facebook.com/profile.php?id=100084949747616"> <img src={navIcon2} alt="" /> </a>
                <a href="https://www.instagram.com/prettyy_lul/"> <img src={navIcon3} alt="" /> </a>
            </div>
            <button onClick={() => window.location.href = '#connect'} className="vvd">
              <span>Me contacter</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;