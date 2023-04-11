import client from "@/apollo/apollo-client";
import { gql } from "@apollo/client";

export default async function fetchEvolution(id) {
  try
  {
    const { data } = await client.query({
      query: gql`
        query pokemon($id: String) {
          pokemon(id: $id) {
            id
            number
            name
            image
            evolutions {
              id
              number
              name
              
              image
            }
          }
        }
      `,
      variables: {
        id: id,
      },
    });
    return data.pokemon;
  } catch (error)
  {
    console.error(`Error fetching evolution for Pokemon ${id}: ${error}`);
    return null;
  }
}
