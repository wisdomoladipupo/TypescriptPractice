import { createContext } from "react";
import { Pet } from "./ApiResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "fido",
    animal: "dog",
    description: "lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
