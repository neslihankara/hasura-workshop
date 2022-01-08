import { request, gql } from "graphql-request";

const query = gql`
  query {
    profiles {
      name
    }
  }
`;

export const getProfiles = async () => {
  const result = await request(
    "https://charmed-basilisk-20.hasura.app/v1/graphql",
    query
  );

  return result;
};
