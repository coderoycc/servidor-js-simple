//Manejo de datos, controlar CRUD
const data = require('../data/MOCK_DATA.json')

function createUser(dataUser) {
  let newUser = {
    id: parseInt(data[data.length].id) + 1,
    ...dataUser
  }
  data.push(newUser) 
  //Solo almacena el valor en la variable, no lo escribe en el archivo
  return newUser
}

function getUser(id){
  const identificador = parseInt(id)
  let user = data.find(person=>person.id === identificador)
  return user
}

function updateUser(id, dataUpdate){
  const ide = parseInt(id)
  try{
    let userIndex = data.findIndex(person=>person.id === ide)
    if(userIndex!=-1){
      data[userIndex] = {id: id, ...dataUpdate} 
    }else{
      throw new Error(`Error, el usuario con id: ${ide} no existe`)
    }
  } catch(err){
    console.log('Error', err);
    return false
  }
  return true 
}
function deleteUser(id){
  const ide = parseInt(id)
  let userIndex = data.findIndex(person=>person.id === ide)
  let user = {}
  try{
    if(userIndex != -1){
      user = data.splice(userIndex, 1)
    }else{
      throw new Error('Usuario no encontrado')
    }
  }catch(err){
    return null
  }
  return user
}
module.exports = {
  getUsers: ()=> data,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
