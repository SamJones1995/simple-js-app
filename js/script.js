let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	function addListItem(pokemon) {
		let pokeList = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button-class');
		//Event listener to make showDetails function when Pokemon button is clicked
		button.addEventListener('click', function(event) {
			showDetails(pokemon);
		})
		listItem.appendChild(button);
		pokeList.appendChild(listItem);
		button.addEventListener("click", function(event) {
			showDetails(pokemon)
		});
	}

	function loadList() {
		return fetch(apiUrl).then(function (response){
			return response.json();
		}).then(function(json) {
			json.results.forEach(function (item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			})
		}).catch(function (e) {
			console.error(e);
		})
	}

	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function(response) {
			return response.json();
		}).then(function (details) {
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			item.weight = details.weight;
			item.types = details.types;
		}).catch(function (e) {
			console.error(e)
		});
	}

		function showDetails(pokemon) {
	    pokemonRepository.loadDetails(pokemon).then(function () {
	      showModal(pokemon);
	    });
	}
	

	let modalContainer = document.querySelector('#modal-container');

function showModal(pokemon) { //Modal function

	modalContainer.innerHTML = '';
  
  let modal = document.createElement('div');
  modal.classList.add('modal');

	let closeButtonElement = document.createElement('button'); //Close button element
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
	closeButtonElement.addEventListener('click', hideModal);

  let modalPokemonName = document.createElement('h1'); //Display pokemon name
   modalPokemonName.innerText = pokemon.name;

  let modalPokemonImg = document.createElement('img'); //Display pokemon img
  modalPokemonImg.src = pokemon.imageUrl; 

  
  let modalPokemonHeight = document.createElement('p'); //Display pokemon height
   modalPokemonHeight.innerText = 'Height: ' + pokemon.height;

  let modalPokemonWeight = document.createElement('p'); //Display pokemon weight
   modalPokemonWeight.innerText = 'Weight: ' + pokemon.weight;

  modal.appendChild(closeButtonElement);
  modal.appendChild(modalPokemonName);
  modal.appendChild(modalPokemonImg);
  modal.appendChild(modalPokemonHeight);
  modal.appendChild(modalPokemonWeight);

  modalContainer.appendChild(modal);
	modalContainer.classList.add('is-visible');
	}

	function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
	}

	window.addEventListener('keydown', (e) => { //Allows Esc key to hide modal
	  let modalContainer = document.querySelector('#modal-container');
	  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
	    hideModal();  
	  }
	});
  
  modalContainer.addEventListener('click', (e) => { //Allows clicking outside modal to close modal
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails
	};

})();


pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function(pokemon) {
		pokemonRepository.addListItem(pokemon);
		});
}); 
