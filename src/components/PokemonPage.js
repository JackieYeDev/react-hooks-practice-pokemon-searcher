import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [criteria, setCriteria] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, []);
  function onSearchChange(searchString) {
    setCriteria(searchString);
  }
  function onSubmitPokemon(pokemonData) {
    setPokemon([...pokemon, pokemonData]);
  }
  const pokemonToRender = pokemon.filter(p =>
    p.name.toLowerCase().includes(criteria.toLowerCase())
  );
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmitPokemon={onSubmitPokemon} />
      <br />
      <Search handleSearch={onSearchChange} />
      <br />
      <PokemonCollection pokemon={pokemonToRender} />
    </Container>
  );
}

export default PokemonPage;
