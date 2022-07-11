import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onSubmitPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: "",
    },
  });
  function handlechange(e) {
    const value = e.target.value;
    let name = "";
    if (e.target.name === "frontUrl") {
      name = "front";
      setFormData({
        ...formData,
        sprites: { ...formData.sprites, [name]: value },
      });
    } else if (e.target.name === "backUrl") {
      name = "back";
      setFormData({
        ...formData,
        sprites: { ...formData.sprites, [name]: value },
      });
    } else {
      name = e.target.name;
      setFormData({ ...formData, [name]: value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => onSubmitPokemon(data))
      .catch(err => console.err(err));
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Name'
            placeholder='Name'
            name='name'
            onChange={handlechange}
          />
          <Form.Input
            fluid
            label='hp'
            placeholder='hp'
            name='hp'
            onChange={handlechange}
          />
          <Form.Input
            fluid
            label='Front Image URL'
            placeholder='url'
            name='frontUrl'
            onChange={handlechange}
          />
          <Form.Input
            fluid
            label='Back Image URL'
            placeholder='url'
            name='backUrl'
            onChange={handlechange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
