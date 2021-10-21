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
	document.write(pokemonList[i].name + ' height:' + pokemonList[i].height);
	if (pokemonList[i].height > 6) {
		document.write(' -Thats a bigun!');
	}
}

