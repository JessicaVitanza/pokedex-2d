let i = 1;
let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
fetch(result)
  .then((res) => res.json())
  .then((res) => displayPokemon(res));

  const containerInfo = document.querySelector(".pokedex-info-container");
  const namePokemon = document.querySelector(".pokemon-name");
  const type = document.querySelector(".pokemon-types");
  const id = document.querySelector(".pokedex-smallScreen");

  const img = document.querySelector(".pokedex-screen-image");

  const displayPokemon = (pokemon) => {
    
    img.src = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    namePokemon.textContent = "Name: " + pokemon.name;
    type.textContent = "Type: " + pokemon.types[0].type.name;
    id.textContent = "ID # " + createId(pokemon.id);
    function createId (id) {
        if ( !id ) return null;
        if ( id < 10 ) {return `00${id}`}
        else if ( id < 100 ){ return `0${id}`}
        return id 
    }
    containerInfo.append(namePokemon, type);

  }

  const containerBtns = document.querySelector(".pokedex-blackButtons");
  const prev = document.querySelector(".pokedex-blackButton-prev");
  const next = document.querySelector(".pokedex-blackButton-next");
  containerBtns.append(prev, next);

  next.addEventListener("click", () => {

    document.querySelector(".one").classList.add("active1");
    document.querySelector(".two").classList.add("active2");
    document.querySelector(".three").classList.add("active3");

    i++;
      
    result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => {displayPokemon(res)
        document.querySelector(".one").classList.remove("active1");
        document.querySelector(".two").classList.remove("active2");
        document.querySelector(".three").classList.remove("active3");
      });
  });

  prev.addEventListener("click", () => {
    
    document.querySelector(".one").classList.add("active1");
    document.querySelector(".two").classList.add("active2");
    document.querySelector(".three").classList.add("active3");

    i--;

    result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
      .then((res) => res.json())
      .then((res) => {displayPokemon(res)
        document.querySelector(".one").classList.remove("active1");
        document.querySelector(".two").classList.remove("active2");
        document.querySelector(".three").classList.remove("active3");});
      
  });
