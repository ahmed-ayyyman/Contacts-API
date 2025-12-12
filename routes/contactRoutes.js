const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
// For GET all contacts & POST new contact → no :id
router.route("/").get(getAllContacts).post(createContact);

// For PUT and DELETE by ID → separate route with :id
router
  .route("/:id")
  .getContact(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
