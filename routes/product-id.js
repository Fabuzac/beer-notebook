const express = require('express');
const router = express.Router();
const db = require('../database/database.js'); // Importez la connexion à la base de données depuis un fichier séparé

// GET->ALL
router.get('/', (req, res) => {

  // Récupérer tous les product id

  db.query('SELECT * FROM product_id', (err, results) => {
    if (err) {

      // console.error('❌ Erreur lors de la récupération des numeros de produits:', err);
      res.status(500).json({ error: '❌ Erreur lors de la récupération des numeros de produits' });

    } else {
      res.json(results);

    }
  });
});

// GET->ONE
router.get('/id', (req, res) => {

  // TODO: passer ID de maniere dynamique
  db.query('SELECT * FROM product_id WHERE id = 16', (err, results) => {
    if (err) {

      // console.error('❌ Erreur lors de la récupération des numeros de produits:', err);
      res.status(500).json({ error: '❌ Erreur lors de la récupération de ID pour un produit' });

    } else {
      res.json(results);

    }
  });
});

// Point de terminaison pour ajouter un nouveau numero
router.post('/', (req, res) => {
  const { productId } = req.body;

  // if (!productId.product_id || !productId.type || !productId.abv) {
  //   return res.status(400).json({ error: 'Les champs product_id, type et abv sont requis.' });
  // }

  // Vérifier si le productId existe déjà
  db.query('SELECT * FROM product_id WHERE product_id = ?', [productId], (err, results) => {

    if (err) {
      console.error('❌ Erreur lors de la recherche de la productId:', err);
      res.status(500).json({ error: 'Erreur lors de la recherche de la productId ❌' });

    } else {

      if (results.length > 0) {      

          const existingProductId = results[0];
          return res.status(409).json({ message: 'Un product Id similaire existe déjà. ✅', beer: existingProductId });
      }

      // Insérer le nouveau product_id dans la base de données en utilisant des paramètres

      const currentDate = new Date(); // Obtenez la date actuelle
      db.query('INSERT INTO product_id (product_id, created_date) VALUES (?, ?)', [productId, currentDate], (err, result) => {

        if (err) {
          console.error('❌ Erreur lors de l\'insertion de la productId:', err);
          res.status(500).json({ error: 'Erreur lors de l\'insertion de la productId ❌' });

        } else {

          productId.id = result.insertId;
          res.status(201).json({ message: '✅ Nouveau productId ajouté avec succès', beer: productId });
        }
      });

    }
  });
});

module.exports = router;
