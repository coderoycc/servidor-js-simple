const express = require('express')

const Service = require('./src/service')
const app = express()
const PORT = 3000

app.use(express.json()) //Permite recibir datos en forma de json de los clientes

//Responder a la peticion
app.get('/', (req, res)=>{
  res.json({
    message:'Hola',
    status: '200',
    body: Service.getUsers()
  })
})

//Peticion de un usuario con parametro id
app.get('/:id', (req, res)=>{ // aparte de la ruta se crea una nueva
  let {params: {id}} = req //req tiene la ruta y params los parámetros
  const user = Service.getUser(id)
  res.json({
    message:`Usuario ${id}`,
    body: user ? user: `Usuario ${id} No encontrado`,
  })
})

// Petición de creación de usuario
app.post('/', (req, res) => {
  let newUser = req.body; //body es el conjunto de datos que nos envia el cliente (JSON)
  res.status(201).json({ //envia un status 201 CREATED y un json con los datos
    message: 'Usuario Creado',
    body: Service.createUser(newUser) // Devuelve un nuevo usuario
  })
})

// Peticion de modificación de un registro PUT
app.put('/:id', (req, res) => {
  let {params: {id}} = req
  const { body: newData} = req
  const resUser = Service.updateUser(id, newData)
  res.json({
    message: resUser ? 'Modificado correctamente': `Error al modificar usuario con id: ${id}`,
    body: Service.getUsers()
  })
})

//Peticion de eliminación de un elemento mediante el ID
app.delete('/:id', (req, res) => {
  let {params: {id}} = req
  const resUser = Service.deleteUser(id)
  res.json({
    message: resUser ? 'Eliminado correctamente' : `El usuario de ID: ${id} no existe`,
    body: resUser
  })
})


// Levantamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})