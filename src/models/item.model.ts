export type Item = {
  id: number;
  category: 'creatures' | 'equipment' | 'materials' | 'monsters' | 'treasure';
  name: string;
  description: string;
  image: string;
  cooking_effect?: string;
  properties?: { attack: number; defense: number };
  hearts_recovered?: number;
  drops?: string[];
};
