let pokemonRepository = (function () {
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
	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	function showDetails(pokemon){
		console.log(pokemon.name);
	}

	function addListItem(pokemon) {
		let pokeList = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = (pokemon.name);
		button.classList.add('button-class');
		//Event listener to make showDetails function when Pokemon button is clicked
		button.addEventListener('click', function(event) {
			showDetails(pokemon);
		})
		listItem.appendChild(button);
		pokeList.appendChild(listItem);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};

})();


 
pokemonRepository.getAll().forEach(function(pokemon) {
	pokemonRepository.addListItem(pokemon);
	});