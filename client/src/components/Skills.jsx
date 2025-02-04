import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProgressCircle from "./skill_components/ProgressCircle"; // Make sure the path is correct

function Skills() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>Compétences</h1>
                            <p>J'ai eu l'opportunité d'acquérir diverses compétences grâce à mes études et mes expériences.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <ProgressCircle skill="HTML, CSS" percentage={80} />
                                <ProgressCircle skill="PHP, Laravel" percentage={40} />
                                <ProgressCircle skill="React JS" percentage={50} />
                                <ProgressCircle skill="Node JS" percentage={50} />
                                <ProgressCircle skill="JAVA" percentage={25} />
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;