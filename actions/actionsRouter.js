const express = require('express');
const actionModel = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await actionModel.get();
        res.status(200).json(actions);
    } catch(err) {
        res.status(404).json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const action = await actionModel.get(id);
        // refactor this to screen for valid id
        res.status(200).json(action);
    } catch(err) {
        res.status(404).json({ message: err });
    }
});

router.post('/', async (req, res) => {
    try {
        const newAction = req.body;
        const addedAction = await actionModel.insert(newAction);
        res.status(201).json(addedAction);
    } catch(err) {
        res.status(500).json({ message: err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const actionUpdate = req.body;
        const updatedAction = await actionModel.update(id, actionUpdate);
        // refactor to screen for valid id
        res.status(200).json(updatedAction);
    } catch(err) {
        res.status(500).json({ message: err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteCount = await projectModel.remove(id);
        res.status(200).json({deleteCount, id});
    } catch(err) {
        res.status(404).json({ message: err });
    }
});

module.exports = router;