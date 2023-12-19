export type TypePlayer = {
  id?: number,
  name: string,
  race: string,
  class: string
}

export type TypeMonster = {
  id?: number,
  type: string
}

export const newPlayer: TypePlayer = {
  name: 'Player',
  race: 'Dwarf',
  class: 'Mage'
}

export const newMonster: TypeMonster = {
  type: 'Monster'
}