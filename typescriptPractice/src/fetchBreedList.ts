import { QueryFunction } from "@tanstack/react-query";
import { BreedListApiResponse, Animal } from "./ApiResponsesTypes";

const fetchBreedList: QueryFunction<BreedListApiResponse, ["breeds", Animal]> =
  async function ({ queryKey }) {
    const animal = queryKey[1];

    if (!animal) return [];

    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );

    if (!res.ok) {
      throw new Error(`breeds ${animal} fetch not ok`);
    }

    return res.json();
  };

export default fetchBreedList;
