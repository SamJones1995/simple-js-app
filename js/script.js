let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	//pulls pokemon list from json
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
				/* eslint-disable no-console */
			console.error(e);
				/* eslint-enable no-console */
		})
	}
	//pulls pokemon details from json
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
			/* eslint-disable no-console */
			console.error(e)
			/* eslint-enable no-console */
		});
	}

	function addListItem(pokemon) {
		let pokeList = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');

		button.innerText = pokemon.name;
		button.classList.add('btn', 'pokemonButton');
		button.setAttribute('data-target', '#exampleModal');
		button.setAttribute('data-toggle', 'modal');
		//Event listener to make showDetails function when Pokemon button is clicked
		button.addEventListener('click', function() {
			showDetails(pokemon);
		});
		listItem.classList.add('list-group-item', 'border-0', 'align-items-center');


		listItem.appendChild(button);
		pokeList.appendChild(listItem);

	}



		function showDetails(pokemon) {
			pokemonRepository.loadDetails(pokemon).then(function () {
				showModal(pokemon);
			});
	}




function showModal(pokemon) { //Modal function
	/* eslint-disable no-undef */
	let modalBody = $('.modal-body');
	let modalTitle = $('.modal-title');
	//clear modal of existing content
	modalTitle.empty();
	modalBody.empty();

	//create element for Pokemon name in modal
	let nameElement = $('<h1>' + pokemon.name + '</h1>')
	//create element for Pokemon image
  let imageElement = $('<img class="modal-img" style="width:50%"">');
  imageElement.attr('src',pokemon.imageUrl);
  //create element for Pokemon height
  let heightElement = $('<p>' + 'Height : ' + pokemon.height + 'm' + '</p>');
  //create element for Pokemon weight
  let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + 'Kg' +'</p>');
	/* eslint-enable no-undef */

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		showModal: showModal
	};

})();

let scrollButton = document.getElementById('btn-back-to-top');
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		scrollButton.style.display = 'block';
	} else {
		scrollButton.style.display = 'none';
	}
}

scrollButton.addEventListener('click', backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
	/* eslint-disable no-undef */
$(document).ready(function(){
	$('#filter').on('keyup', function() {
		var value = $(this).val().toLowerCase();
		$('#listDIV *').filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	/* eslint-enable no-undef */
		});
	});
});

pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function(pokemon) {
		pokemonRepository.addListItem(pokemon);
		});
});
