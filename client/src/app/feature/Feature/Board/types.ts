export interface Board {
  Lists: List[];
}

export interface List {
  name: string;
  cards: Card[];
}

export interface Card {
  name: string;
  owner: string;
}
