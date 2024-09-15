import { createConnection } from "typeorm";

export const AppDataSource = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "estadio_swiftkick",
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
}).then(connection => {
    console.log("Conexión a la base de datos realizada correctamente");
    return connection;
}).catch(error => {
    console.error("Error al conectar a la base de datos:", error);
    throw error;
});