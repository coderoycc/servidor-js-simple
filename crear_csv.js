const axios = require('axios')
const fs = require('fs').promises;
const path = require('path')

const main = async () => {
  //Funcion que usa promesas 
  let response = await axios.get('https://rickandmortyapi.com/api/character') //promesa

  let { data: { results } } = response //De data obtenemos el objeto results
  let characters = results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species
    }
  }) //salamente obtenemos el ID, el nombre, status y especie 
  const llaves = Object.keys(characters[0]).join(',')+'\n'
  
  //Formato de CSV
  characters = characters.map((character) => Object.values(character).join(','))
  characters = llaves + characters.join('\n')
  // console.log(characters)

  const direccion = path.join(__dirname,'data','data.csv') 
  console.log(direccion)

  await fs.writeFile(direccion, characters)


}

main();