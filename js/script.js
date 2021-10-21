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
	if (pokemonList[i].height > 6) {
		document.write(`<html><body><div class=pokeList> -Thats a bigun!</div></body></html>`);
	}
}

