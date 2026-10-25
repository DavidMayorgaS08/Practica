import rifas from '../models/rifas.js';

const rifasControllers = {
    // crear tamaño de rifa
    postRifa: async (req, res) => {
        try {
            const rifa = rifas.create(req.body);
            res.json(rifa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default rifasControllers;