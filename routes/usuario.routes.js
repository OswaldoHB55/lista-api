import { Router } from 'express' 
import fs from 'fs'  
import path from 'path'

const usuariosFile = path.join(process.cwd(), "data", "usuario.json")
const router = Router() 

router.get('/', (req, res)=> {
    const usuarios = readFile()
    res.json(usuarios);
});


function readFile() {
    const result = fs.readFileSync(usuariosFile, "utf-8")
    const json = JSON.parse(result)
    return json
}


export default router