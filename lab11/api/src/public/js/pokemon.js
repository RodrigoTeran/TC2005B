const wrapper = document.getElementById("wrapper");
const step = 49;
let offset = 1;
let isfetching = true;
let limit = offset + step;

async function addPokemon(pokemonName) {
    const body = {
        pokemon: pokemonName
    }

    await fetch("api/pokemon", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function createPokemon(pokemon) {
    const div = document.createElement("div");
    const divText = document.createElement("div");
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    divText.innerText = pokemon.name;
    div.appendChild(img);
    div.appendChild(divText);
    div.addEventListener("click", async () => {
        await addPokemon(pokemon.name);
    });
    wrapper.appendChild(div);
}

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data);
        });
}

function fetchPokemons() {
    for (let i = offset; i <= offset + limit; i++) {
        fetchPokemon(i);
    }
    offset = limit + 1;
    limit = offset + step;

    const t = setTimeout(() => {
        isfetching = false;
        clearTimeout(t);
    }, 500);

}

window.addEventListener("scroll", (e) => {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 200;
    if (currentScroll + modifier > documentHeight && !isfetching) {
        isfetching = true;
        fetchPokemons();
    }
});

fetchPokemons();