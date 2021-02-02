
//Los detalles
async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=5`;
    const response = await fetch(url);
    const data = await response.json()
    return data;
}

async function getPopularPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=15`;
    const response = await fetch(url);
    const data = await response.json();
    //images
    const imagePokemon = data.results.map((data,index)=>({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
        1}.png`
    }))
    //console.log(imagePokemon)
    return imagePokemon

}

async function init3() {
    const firstPokemon = await getPopularPokemon();
    const pokemonList = document.getElementById('movies');
    firstPokemon.forEach(movie =>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `<div id="divPokemon"> <h5>${movie.name}</h5> <img src="${movie.image}"/> </div>`;
        pokemonList.appendChild(listItem);
    });
}

init3()
