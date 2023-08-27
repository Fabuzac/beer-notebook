const express = require('express');
// Utilisation de bodyParser pour analyser les données JSON dans les requêtes
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// const router = express.Router();

app.use(bodyParser.json());

const db = require('../database/database'); // Importez la connexion à la base de données depuis un fichier séparé

const beersRoutesController = require('./beers.js');
const productNumberRoutesController = require('./product-id.js');

app.use('/beers', beersRoutesController);
app.use('/productId', productNumberRoutesController);

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
  console.log(`Raccourci: http://localhost:3000/`);
});
