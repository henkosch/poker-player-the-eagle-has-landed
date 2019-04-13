import { RainmanResult } from './Score';
import * as _ from 'lodash';
import { GameState, Card } from "./GameState";
import { get } from "request";

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

  // betCallback: (bet: number) => void
  public scoreHand(cards: Card[], state: GameState, callback: (int) => void) {
    var url = this.rankUrl + "?cards=" + JSON.stringify(cards)
    get(url, {}, (error, response, body) => {
      if(error){
        callback(0)
      }

      var rainman = <RainmanResult>JSON.parse(body.toString())
      if(rainman.rank > 0){
        callback(state.minimum_raise)
      } else {
        callback(0)
      }
    })
  }


}
