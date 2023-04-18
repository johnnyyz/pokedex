var pokemonNumber = document.getElementById('pokemonNumber');

document.querySelector('input[id=search]').addEventListener('click',()=>{
    
    searchPokemon(pokemonNumber.value);

    function capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function searchPokemon(pokemonNumber){
        var pokemonSprite = document.querySelector('.pokemonSprite');
        var info1 = document.getElementById('info1');
        var info2 = document.getElementById('info2');
        var info3 = document.getElementById('info3');
        var info4 = document.getElementById('info4');
        var info5 = document.getElementById('info5');
        
        var abilities = [];
        var types = [];
        var stats = [];

        fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonNumber)
            .then(response => response.json())
            .then(pokemon => {
                info1.innerHTML = '<h1>Abilities:</h1>';
                info2.innerHTML = '<h1>Types:</h1>';
                info3.innerHTML = '<h1>Stats:</h1>';
                info4.innerHTML = '<h1>Height:</h1>';
                info5.innerHTML = '<h1>Weight:</h1>';
                
                
                pokemonSprite.innerHTML = '<img src="'+pokemon.sprites.other["official-artwork"].front_default+'"</img><br><h1>'+capitalize(pokemon.name)+'</h1>';

                pokemon.abilities.map((index)=>{
                    abilities.push(index.ability.name);
                })
                pokemon.types.map((index)=>{
                    types.push(index.type.name);
                })
                pokemon.stats.map((index)=>{
                    stats.push(index.stat.name+': '+index.base_stat);
                })
                
                info1.innerHTML += '<p>'+abilities.join(', ')+'</p>';
                info2.innerHTML += '<p>'+types.join(', ')+'</p>';
                info3.innerHTML += '<p>'+stats.join(', ')+'</p>';
                info4.innerHTML += '<p>'+pokemon.height/10+' m</p>';
                info5.innerHTML += '<p>'+pokemon.weight/10+' kg</p>';
                

                

            })

    }
})

// fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonNumber)
//             .then(response => response.json())
//             .then(pokemon => {
//                 info1.innerHTML = '<h1>Abilities:</h1>';
//                 pokemonSprite.innerHTML = '<img src="'+pokemon.sprites.other["official-artwork"].front_default+'"</img><br><h1>'+capitalize(pokemon.name)+'</h1>'
//                 pokemon.abilities.map((index)=>{
//                     abilities.push(index.ability.name);
                    
//                 })
//                 console.log(abilities[0]);
//                 info1.innerHTML += '<p>'+abilities.join(', ')+'</p>';

                

//             })

//     }
// })



