const router = require("express").Router();
const { inventoryControllers } = require("../controllers");
const auth = require('../middleware/auth')


router.post("/", auth, inventoryControllers.addInventory);
router.get("/", auth, inventoryControllers.fetchAllInventories);
router.get("/find/:idInventory", auth, inventoryControllers.findInventory);
router.get("/findInventoryHistory", auth, inventoryControllers.findInventoryHistory)

module.exports = router;
