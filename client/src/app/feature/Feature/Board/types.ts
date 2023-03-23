export interface List {
  id: number;
  name: string;
  cards: Card[];
}

export interface Card {
  id: number;
  name: string;
  owner: string;
}
