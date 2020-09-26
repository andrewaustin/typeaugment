import type { Dino } from './Dino';

export class Cage {
  public dino: Dino;
  constructor(dino: Dino) {
    this.dino = dino;
  }
}
