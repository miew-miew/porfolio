const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Serveur en cours d'exécution"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth:{
      user: "famenontsoa.nyaina@gmail.com", // mon adresse mail
      pass: "rqms vojk whtx wmss" // App Password générer pour compte Gmail, depuis les paramètres de sécurité du compte google
  }
})

// Vérification de la connexion Nodemailer
contactEmail.verify((error) => {
  if (error) {
    console.log(error); // Si une erreur survient, affichage de l'erreur dans la console
  } else {
    console.log("Prêt à envoyer"); // Si la vérification est réussie, affichage d'un message de succès
  }
});

router.post("/contact", (req, res) => {
  // Récupération des informations du formulaire de contact
  const { firstName, lastName, email, phone, message } = req.body;

  // Validation des données d'entrée
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ code: 400, status: "Erreur de validation" });
  }

  const mail = {
    from: email, // Adresse e-mail de l'expéditeur
    to: "famenontsoa.nyaina@gmail.com", //le destinataire: mon adresse mail
    subject: "Soumission du formulaire de contact - Portfolio", //l'objet du mail
    // Définition du corps de l'email en HTML
    html: `<p>Nom: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Téléphone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Envoi de l'email à l'aide de l'instance de transport Nodemailer
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error); // Si une erreur survient, affichage de l'erreur dans la console
      res.status(500).json({ code: 500, status: "Erreur d'envoi" });
    } else {
      console.log("Email envoyé avec succès"); // Si l'email est envoyée avec succès, affichage d'un message de succès
      res.json({ code: 200, status: "Message envoyé" });
    }
  });
});