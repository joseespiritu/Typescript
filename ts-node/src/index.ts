import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(3);

charmander.publicApi = 'https://joseespiritu.netlify.app';
console.log(charmander);