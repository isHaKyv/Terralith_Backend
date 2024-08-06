// /controllers/terrario.controller.js
import Terrario from '../models/terrario.model.js';

export const createTerrario = async (req, res) => {
  try {
    const { nombre, foto } = req.body;
    const nuevoTerrario = new Terrario({ nombre, foto });
    await nuevoTerrario.save();
    res.status(201).json(nuevoTerrario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTerrarios = async (req, res) => {
  try {
    const terrarios = await Terrario.find();
    res.status(200).json(terrarios);
  } catch (error) {
    res.status (500).json({ message: error.message });
  }
};
