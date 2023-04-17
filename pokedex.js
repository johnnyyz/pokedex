var quantidade = document.getElementById('quantidade');

document.querySelector('input[id=pesquisar]').addEventListener('click',()=>{
    
    pegaPokemons(quantidade.value);
    
    function pegaPokemons(quantidade){
        fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
            .then(response => response.json())
            .then(allpokemon => {

                var pokemons = [];

                allpokemon.results.map((valor) => {
                    fetch(valor.url)
                        .then(response => response.json())
                        .then(singlePokemon => {
                            pokemons.push({ nome: valor.name, imagem: singlePokemon.sprites.front_default });

                            if (pokemons.length == quantidade) {
                                var pokemonBoxes = document.querySelector('.pokemonBoxes');
                                pokemonBoxes.innerHTML = "";
                                pokemons.map((valor) => {
                                    pokemonBoxes.innerHTML += '<div class="pokemonBox"> <img src="' + valor.imagem + '"><p>' + valor.nome + '</p></div>';
                                })
                            }
                        })
                })

            })

    }
})



