const router = require('express').Router();
const {
  recipesCtrl,
  filterGastronomy,
  filterIngredients,
  createRecipes,
  updateRecipes,
  deleteRecipes,
} = require('../controllers/app.ctrl');



// Récupérer toutes les recettes / Attention : les parametre apres '?' sont pris en compte dans cette route
router.get('/recipes', recipesCtrl);

// Filtrer les recettes par gastronomie et ingrédients
router.get('/recipes/gastronomy', filterGastronomy);

// ci dessous : ne sert pas, ne prend pas en compte le parametre apres le ? de l'url de la requete
//router.get('/recipes/ingredients', filterIngredients);

// Créer une nouvelle recette
router.post('/recipes', createRecipes);
// Modifier une recette existante
router.put('/recipes/:id', updateRecipes);
// Supprimer une recette
router.delete('/recipes/:id', deleteRecipes);

router.get('*', (req, res) => res.redirect('/recipes'));
module.exports = router;