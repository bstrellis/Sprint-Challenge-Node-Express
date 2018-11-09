const express = require('express');
const projectModel = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await projectModel.get();
        res.status(200).json(projects);
    } catch(err) {
        res.status(404).json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const project = await projectModel.get(id);
        // refactor this to screen for valid id
        res.status(200).json(project);
    } catch(err) {
        res.status(404).json({ message: err });
    }
});

router.post('/', async (req, res) => {
    try {
        const newProject = req.body;
        const addedProject = await projectModel.insert(newProject);
        res.status(201).json(addedProject);
    } catch(err) {
        res.status(500).json({ message: err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const projectUpdate = req.body;
        const updatedProject = await projectModel.update(id, projectUpdate);
        // refactor to screen for valid id
        res.status(200).json(updatedProject);
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