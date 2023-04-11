import client from "@/apollo/apollo-client";
import { gql } from "@apollo/client";
import { useState } from "react";

export default function EvolutionPopup({ pokemon }) {
  const [evolutions, setEvolutions] = useState(null);
  const [showEvolutions, setShowEvolutions] = useState(false);

  const handleShowEvolutions = async () => {
    console.log("clicked")
    setShowEvolutions(!showEvolutions)

    if (!evolutions)
    {
      const { data } = await client.query({
        query: gql`
      query pokemon($id: String){
  pokemon(id: $id){
    id
    number
    name
   evolutions{
      id
      number
      name
     
      image
    }
  }
}`,
        variables: {
          id: pokemon.id,
        },
      });
      setEvolutions(data.pokemon.evolutions);
    }
  };

  return (
    <div>
      <button onClick={() => handleShowEvolutions()}>Show Evolutions</button>
      {evolutions && showEvolutions === true &&
        <div>
          <h3>Evolutions:</h3>
          {evolutions.map((evolution) => (
            <div key={evolution.id}>
              <img src={evolution.image} alt={evolution.name} />
              <p>{evolution.name}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
