import { Request, Response, NextFunction } from "express";

// Middleware para verificar si todos los campos requeridos están presentes en el cuerpo de la solicitud
const checkRequiredFields = (requiredFields: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const missingFields: string[] = [];
        for (const field of requiredFields) {
            if (!(field in req.body)) {
                missingFields.push(field);
            }
        }
        if (missingFields.length > 0) {
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(", ")}` });
        }
        next();
    };
};

export { checkRequiredFields };