import mongoose from 'mongoose';
import {ContactSchema} from "../models/restModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    new Contact(req.body).save()
        .then(contact => {
            res.json(contact);
        }).catch(err => {
            console.log(`Error on adding new Contact.`);
            console.log(`Error message: ${err.message}`);
            res.send(err.message);
    })
}

export const getContacts = (req, res) => {
    Contact.find()
        .then(contacts => {
            res.json(contacts);
        }).catch(err => {
            console.log(`Error on getting Contact list.`);
            console.log(`Error message: ${err.message}`);
            res.send(err.message);
    });
}

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactId)
        .then(contact => {
            res.json(contact);
        }).catch(err => {
            console.log(`Error on getting Contact.`);
            console.log(`Error message: ${err.message}`);
            res.send(err.message);
    });
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, {new: true })
        .then(contact => {
            res.json(contact);
        }).catch(err => {
            console.log(`Error on updating Contact.`);
            console.log(`Error message: ${err.message}`);
            res.send(err.message);
    });
}

export const deleteContact = (req, res) => {
    Contact.deleteOne({_id: req.params.contactId})
        .then(() => {
            res.json({message: `Contact with ID ${req.params.contactId} was deleted successfully.`});
        }).catch(err => {
            console.log(`Error on deleting Contact by ID: ${req.params.contactId}`);
            console.log(`Error message: ${err.message}`);
            res.send(err.message);
    });
}