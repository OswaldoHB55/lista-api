import  express from "express"
import { config } from "dotenv"
config();


import usuarioRoute from "./routes/usuario.routes.js"
const app  = express(); //ejecutando la libreria.
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api", usuarioRoute)//

app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});











// config()

// import usuariosRoutes from "./routes/usuario.routes.js"

// const PORT = process.env.PORT || 3000;

// const app = express()

// app.use(express.json())

// app.use("/api/usuario", usuariosRoutes)

// app.listen(PORT, ()=> {
//     console.log("Servidor escuchando en el puerto http://localhost:" + PORT)
// })
