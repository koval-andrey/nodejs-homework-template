const addContact = require('./add')
const removeContact = require('./del')
const listContact = require('./getAll')
const getContactById = require('./getById')
const updateContact = require('./update')

module.exports = {
  addContact,
  removeContact,
  listContact,
  getContactById,
  updateContact,
}
