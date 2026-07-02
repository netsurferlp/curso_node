import { generateToken } from "../utils/token.generator.js";

const defaultUser = {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    password: "admin123",
    admin: true,
    };

    export const login = (req, res) => {
        const { email, password } = req.body;
    
        // Validar credenciales
        if (!email || !password) {
            return res.status(400).json({ message: "❌ Por favor, proporciona email y contraseña",

        });
     }
     if (email !== defaultUser.email || password !== defaultUser.password) {
        return res.status(401).json({ message: "❌ Credenciales inválidas",

         });
    }

    const token = generateToken(defaultUser);
    res.json({ message: "✅ Login exitoso", token,

     });
};
