import { Card } from "./GameState";

export interface RainmanResult {
  rank: number;
  value: number;
  second_value: number;
  kickers: number[];
  cards_used: Card[];
  cards: Card[];
}

export class Score {
  rankUrl = "http://rainman.leanpoker.org/rank"


  public async scoreHand(cards: Card[], callback: (result: RainmanResult) => any) {
  }
}
