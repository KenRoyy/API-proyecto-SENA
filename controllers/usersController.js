import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        const savedUser = await user.save()
        res.status(201).json({ message: 'Usuario registrado exitosamente', user: savedUser })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(201).json({ message: 'usuario eliminado exitosamente' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario actualizado', user: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const getUser = async (req,res) => {
   try {
        const user = await User.findById(req.params.id) 

        if(!user) return res.status(404).json({message: "Usuario obtenido"})

        res.status(200).json(user);
   } catch (error) {
        res.status(400).json({ error: error.message })
   } 
}
