import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

function Contact() {

    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = response.json()
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({success: true, message: "Message envoyé avec succès."})
        }else{
            setStatus({success: false, message: "Une erreur est survenue. Veuillez réessayer."})
        }
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="" />
                    </Col>
                    <Col md={6}>
                        <h2>
                            <form onSubmit={handleSubmit} action="">
                                <h2>Envoi moi un message</h2>
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="Votre nom" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.lastName} placeholder="Votre prénom" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="email" value={formDetails.email} placeholder="Votre email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className="p-1">
                                        <input type="tel" value={formDetails.phone} placeholder="Numéro de téléphone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                    </Col>
                                    <Col>
                                        <textarea value={formDetails.message} placeholder="Votre message" rows="6" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                        <button type="submit"> <span>{buttonText}</span> </button>
                                    </Col>
                                    {
                                        status.message && 
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact