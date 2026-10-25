import mongoose from "mongoose";

const personaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String},
    telefono: { type: String, required: true },
    direccion: { type: String},
    pago: { type: boolean, default: false },
    numeros_boleto: [{ type: Number, required: true }],
    rifa: { type: mongoose.Schema.Types.ObjectId, ref: "Rifa" },
});

export default mongoose.model("Persona", personaSchema);