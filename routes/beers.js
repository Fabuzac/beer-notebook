const express = require('express');
const router = express.Router();
const db = require('../database/database.js'); // Importez la connexion à la base de données depuis un fichier séparé

// GET ALL
router.get('/', (req, res) => {
  // Récupérer toutes les bières de la base de données
  db.query('SELECT * FROM beers', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des bières:', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des bières' });
    } else {
      res.json(results);
    }
  });
});


// GET ONE
router.get('/:id', (req, res) => {

  let product_id = req.params.id;

  //
  db.query('SELECT * FROM beers WHERE product_id = ?', [product_id], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des bières:', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des bières' });
    } else {
      return res.json(results);
    }
  }); 
});

// POST
router.post('/', (req, res) => {
  let newBeer = req.body;
  let manufacturing_location = newBeer.manufacturing_places_tags.toString();
  let currentDate = new Date();

  //TODO: si n'existe pas, cree dans l'API

  //  Insérer la nouvelle bière dans la base de données
  db.query(`INSERT INTO beers 
    (
      brand,
      product_id,
      created_date,
      generic_name_fr,
      product_name_fr,
      image_url,
      manufacturing_places_tags,
      quantity
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
  [
    newBeer.brand, 
    newBeer.product_id, 
    currentDate, 
    newBeer.generic_name_fr, 
    newBeer.product_name_fr, 
    newBeer.image_url, 
    manufacturing_location, 
    newBeer.quantity,
  ],
  (err, result) => {

    if (err) {
      console.error('❌ Erreur lors de l\'insertion de la bière:', err);
      res.status(500).json({ error: 'Erreur lors de l\'insertion de la bière ❌' });

    } else {

      console.log('consoleLog: ✅ Nouvelle bière ajoutée avec succès: ' + newBeer.brand )
      newBeer = result;
      return res.status(200).json({ message: '✅ Nouvelle bière ajoutée avec succès', beer: newBeer });
    } 
  });

  // if (!newBeer.name || !newBeer.type || !newBeer.abv) {
  //   return res.status(400).json({ error: 'Les champs name, type et abv sont requis.' });
  // }

  // Vérifier si la bière existe déjà
  // db.query('SELECT * FROM beers WHERE brand = ?', [newBeer.brand], (err, results) => {
  //   if (err) {

  //     console.error('❌ Erreur lors de la recherche de la bière:', err);
  //     res.status(500).json({ error: 'Erreur lors de la recherche de la bière ❌' });

  //   } else {
  //     if (results.length > 0) {

  //     // Insérer la nouvelle bière dans la base de données
  //     let currentDate = new Date(); // Obtenez la date actuelle
  //     db.query('INSERT INTO beers (brand, product_id, created_date) VALUES (?, ?, ?)', [newBeer.brand, newBeer.product_id, currentDate], (err, result) => {

  //       if (err) {
  //         console.error('❌ Erreur lors de l\'insertion de la bière:', err);
  //         res.status(500).json({ error: 'Erreur lors de l\'insertion de la bière ❌' });

  //       } else {

  //         newBeer = result.insertId;
  //         res.status(201).json({ message: '✅ Nouvelle bière ajoutée avec succès', beer: newBeer });
  //       }
  //     });

  //       const existingBeer = results[0];
  //       return res.status(409).json({ message: 'Une bière avec ce nom existe déjà.', beer: existingBeer });
  //     }

      
  //   }
  // });
});

// PUT
router.put('/:id', (req, res) => {
  const beerId = req.params.id;
  const updatedBeer = req.body;

  db.query('UPDATE beers SET ? WHERE id = ?', [updatedBeer, beerId], (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour de la bière:', err);
      res.status(500).json({ error: 'Erreur lors de la mise à jour de la bière' });
    } else {
      res.json({ message: 'Bière mise à jour avec succès', beerId });
    }
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  const beerId = req.params.id;

  db.query('DELETE FROM beers WHERE id = ?', beerId, (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de la bière:', err);
      res.status(500).json({ error: 'Erreur lors de la suppression de la bière' });
    } else {
      res.json({ message: 'Bière supprimée avec succès', beerId });
    }
  });
});

module.exports = router;
