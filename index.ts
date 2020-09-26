import { Dino } from './Dino';
import { Cage } from './Cage';

// (1) Why can this not be `declare global`?
declare module './Dino' {
  interface Dino {
    name: string;
  }
}

const Roary = new Dino(4200);
// (2) This works!
Roary.name = 'Roary';

const largeCage = new Cage(Roary);
largeCage.dino.name = 'ROARy';
