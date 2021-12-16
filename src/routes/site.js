var express = require('express');
var router = express.Router();
var indexController = require('../controllers/site.js');

router.get("/", indexController.getHomepage);
router.get("/menu", indexController.getMenu);
router.get("/panier", indexController.getCart);
router.get("/produit/:id", indexController.getProductDetails);
router.post("/ajouter-panier", indexController.postCart);
router.get("/checkout", indexController.getCheckout);

module.exports = router;