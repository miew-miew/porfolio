import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/web-development.png"
import { useEffect, useState } from "react";
import "animate.css"

function Banner() {
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Un développeur web"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 / Math.random * 100)
    const period = 2000

    useEffect(() => {
        const ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNumber % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ""){
            setIsDeleting(false)
            setLoopNumber(loopNumber + 1)
            setDelta(500)
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenue sur mon portfolio</span>
                        <h2>{`Salutation, Je suis Famenontsoa Ny Aina`} <br /> <span className="wrap">{text}</span> </h2>
                        <p>Passionée par le potentiel créatif du web, je cherche à acquérir plus de connaissances</p>
                        <button onClick={() => window.location.href = '#connect'}>Me contacter <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;