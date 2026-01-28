const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  addToCart,
  updateCart,
  removeFromCart
} = require("../controllers/cartController");

const router = express.Router();

router.post("/", auth, addToCart);
router.put("/:id", auth, updateCart);
router.delete("/:id", auth, removeFromCart);

module.exports = router;
