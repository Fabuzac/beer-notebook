const express = require('express');
const router = express.Router();
const db = require('../database/database.js'); // Importez la connexion à la base de données depuis un fichier séparé

// GET
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

// POST
router.post('/', (req, res) => {
  const newBeer = req.body;

  if (!newBeer.name || !newBeer.type || !newBeer.abv) {
    return res.status(400).json({ error: 'Les champs name, type et abv sont requis.' });
  }

  // Vérifier si la bière existe déjà
  db.query('SELECT * FROM beers WHERE name = ?', [newBeer.name], (err, results) => {
    if (err) {
      console.error('Erreur lors de la recherche de la bière:', err);
      res.status(500).json({ error: 'Erreur lors de la recherche de la bière' });
    } else {
      if (results.length > 0) {
        const existingBeer = results[0];
        return res.status(409).json({ message: 'Une bière avec ce nom existe déjà.', beer: existingBeer });
      }

      // Insérer la nouvelle bière dans la base de données
      db.query('INSERT INTO beers SET ?', newBeer, (err, result) => {
        if (err) {
          console.error('Erreur lors de l\'insertion de la bière:', err);
          res.status(500).json({ error: 'Erreur lors de l\'insertion de la bière' });
        } else {
          newBeer.id = result.insertId;
          res.status(201).json({ message: 'Nouvelle bière ajoutée avec succès', beer: newBeer });
        }
      });
    }
  });
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
