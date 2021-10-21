let pokemonList = [
	Bulbasaur = {
		name: "Bulbasaur",
		height: 7,
		type: ['grass','poison'],
	},
	Charmander = {
		name: "Charmander",
		height: 6,
		type: 'fire'
	},
	Squirtle = {
		name: "Squirtle",
		height: 5,
		type: 'water'
	}	
];

for (let i = 0; i < pokemonList.length; i++) {
	document.write(`<html><body><div class=pokeList>${pokemonList[i].name} height: ${pokemonList[i].height}</div></body></html>`);
	//Adds Pokemon names and heights along with height description.
	if (pokemonList[i].height > 6) {
	// If statement denoting condition for below message. HTML included to add message to div class .pokeList 
		document.write(`<html><body><div class=pokeList> -Thats a bigun!</div></body></html>`);
	}
}

