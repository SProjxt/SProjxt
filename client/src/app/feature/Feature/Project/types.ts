export interface Card {
  id: number;
  projectName: string;
  state: string;
  users: User[];
}

export interface User {
  id: number;
  name: string;
}
