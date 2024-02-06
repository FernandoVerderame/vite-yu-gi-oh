const apiUri = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

const typesPokemon = [
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water"
]

const colorMap = {
    "Bug": '#f8d5a3',
    "Dark": '#044286',
    "Electric": '#97b3e6',
    "Fairy": '#fceaff',
    "Fighting": '#E6E0D4',
    "Fire": '#FDDFDF',
    "Flying": '#F5F5F5',
    "Ghost": '#663388',
    "Grass": '#DEFDE0',
    "Ground": '#f4e7da',
    "Ice": '#DEF3FD',
    "Normal": '#F5F5F5',
    "Poison": '#98d7a5',
    "Psychic": '#eaeda1',
    "Rock": '#d5d5d4',
    "Steel": '#gray',
    "Water": '#DEF3FD'
}

export { typesPokemon, colorMap, apiUri }