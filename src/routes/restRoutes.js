import {addNewContact, getContacts, getContactById, updateContact, deleteContact} from "../controllers/restController";

const routes = (app) => {
    app.route('/contact')
        .get(getContacts)

        .post(addNewContact)

    app.route('/contact/:contactId')
        .get(getContactById)

        .put(updateContact)

        .delete(deleteContact)
}

export default routes;