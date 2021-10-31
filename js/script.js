let pokemonList = [
	Bulbasaur = {
		name: "Bulbasaur",
		height: 7,
		type: ['grass','poison'],
	},
	 CHarmander = {
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
 
pokemonList.forEach(function(pokemon) {
	document.write(`<html><body><div class=pokeList>${pokemon.name} height: ${pokemon.height}</div></body></html>`);
	//Adds Pokemon names and heights along with height description.
	if (pokemon.height > 6) {
	// If statement denoting condition for below message. HTML included to add message to div class .pokeList 
		document.write(`<html><body><div class=pokeList> -Thats a bigun!</div></body></html>`);
	}
});