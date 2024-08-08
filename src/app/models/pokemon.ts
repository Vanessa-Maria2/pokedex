import { PokemonAbility } from "./ability";
import { Species } from "./species";
import { PokemonSprites } from "./sprites";

export type PokemonType = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    abilities: PokemonAbility[];
    species: Species;
    sprites: PokemonSprites;
}