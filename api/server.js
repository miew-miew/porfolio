const express = require("express");
const router = express.Router();const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Serveur en cours d'exécution"));

// Configuration de Nodemailer pour envoyer des emails via Gmail
const contactEmail = nodemailer.createTransport({
  service: 'gmail', // Spécification du service d'email
  auth: { // Authentification à l'aide d'un compte Gmail
    user: "famenontsoa.nyaina@gmail.com", // mon adresse mail
    pass: "rqms vojk whtx wmss" // App Password générer pour compte Gmail, depuis les paramètres de sécurité du compte google
  },
});

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
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;


  const mail = {
    from: email, // Adresse e-mail de l'expéditeur
    to: "famenontsoa.nyaina@gmail.com", //le destinataire: mon adresse mail
    subject: "Soumission du formulaire de contact - Portfolio", //l'objet du mail
    // Définition du corps de l'email en HTML
    html: `<p>Nom: ${name}</p>
           <p>Email: ${email}</p>
           <p>Téléphone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Envoi de l'email à l'aide de l'instance de transport Nodemailer
  contactEmail.sendMail(mail, (error) => {
    // Si une erreur survient, envoi d'une réponse JSON avec l'erreur
    if (error) {
      res.json(error);
    } else {
      // Si l'email est envoyée avec succès, envoi d'une réponse JSON avec un message de succès
      res.json({ code: 200, status: "Message envoyé" });
    }
  });
});