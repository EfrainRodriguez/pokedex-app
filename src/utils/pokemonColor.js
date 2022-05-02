const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
};

const createGradient = (colors) => {
  const gradient = colors.map((color) => `${color}`).join(', ');
  return `linear-gradient(to bottom, ${gradient})`;
};

export const getPokemonColorByType = (type) => colours[type];

export const getBackGroundColorByPokemon = (pokemon = {}) => {
  const { types = [] } = pokemon;
  if (types.length === 0) return {};
  if (types.length > 1) {
    let colors = [];
    types.forEach((thisType) => {
      const {
        type: { name }
      } = thisType;
      const color = getPokemonColorByType(name);
      colors.push(color);
    });
    return {
      backgroundImage: createGradient(colors)
    };
  }
  const {
    type: { name }
  } = types[0];
  return {
    backgroundColor: getPokemonColorByType(name)
  };
};
