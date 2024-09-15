import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import app from "./server";
import { PORT } from "./config";

AppDataSource.then(() => {
    console.log("La conexión a la base de datos está lista");

    app.listen(PORT, () => {
        console.log(`El servidor está escuchando en el puerto ${PORT}`);
    });
}).catch(error => {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
});