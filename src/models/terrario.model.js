// /models/terrario.model.js
import mongoose from 'mongoose';

const TerrarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  foto: { type: String, required: true },
  fechaHoraRegistro: { type: Date, default: Date.now }
});

const Terrario = mongoose.model('Terrario', TerrarioSchema);

export default Terrario;
