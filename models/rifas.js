import mongoose from "mongoose";

const RifaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    fecha_sorteo: { type: Date, required: true },
    valor_boleto: { type: Number, required: true },
    cantidad_boletos: { type: Number, required: true },
});

export default mongoose.model("Rifa", RifaSchema);