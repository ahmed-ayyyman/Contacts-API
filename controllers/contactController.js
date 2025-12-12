//@desc   Get all contacts
//@route  GET /api/contacts
//@access Public
const getAllContacts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get All Contacts",
  });
};

//@desc   Get single contact by ID
//@route  GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: `Get contact with id ${id}`,
  });
};
//@desc   Create new contact
//@route  POST /api/contacts
//@access Public
const createContact = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: "Contact created successfully",
  });
};

//@desc   Update contact by ID
//@route  PUT /api/contacts/:id
//@access Public (change to Private later if needed)
const updateContact = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    message: `Contact with id ${id} updated successfully`,
  });
};

//@desc   Delete contact by ID
//@route  DELETE /api/contacts/:id
//@access Public (change to Private later)
const deleteContact = (req, res) => {
  const { id } = req.params;

  res.status(204).send(`Contact with ID: ${id} is deleted`);
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
