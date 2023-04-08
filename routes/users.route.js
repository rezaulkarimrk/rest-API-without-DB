const router = require("express").Router();
const { 
    getAllUsers,
    createUsers,
    updateUser,
    deleteUser,
} = require("../controllers/users.controllers");

router.get("/", getAllUsers);
router.post("/", createUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;