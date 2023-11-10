"use strict";

const pokemonContainer = document.querySelector(".pokemons");

const request = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

console.log(request);

const renderPokemon = function (data) {
  const html = `
  <article class="pokemon">
    <img class="pokemon__img" src="${data.sprites.front_default}" />
    <div class="pokemon__data">
      <h3 class="pokemon__name">${data.name}</h3>
      <h4 class="pokemon__region">Pokedex id: ${data.id}</h4>
      <p class="pokemon__row"><span></span></p>
      <p class="pokemon__row"><span></span></p>
      <p class="pokemon__row"><span></span>/p>
    </div>
  </article>
  `;
  pokemonContainer.insertAdjacentHTML("beforeend", html);
  pokemonContainer.style.opacity = 1;
};

const getPokemonData = function (pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => renderPokemon(data));
};

getPokemonData("pikachu");
