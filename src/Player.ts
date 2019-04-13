import { GameState, Card } from "./GameState";
import {Score} from "./Score";
import * as _ from 'lodash';

export interface Player {
  hole_cards: Card[]
  gamestate: GameState
}

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    this.gamestate = gameState
    if(this.hole_cards.length == 0) {
      gameState.players.forEach((player, index) => {
        if(player.hole_cards != null) {
          player.hole_cards.forEach( (card, _) => {
            this.hole_cards.push(card);
          })
        }
      })
    }

    this.bet(betCallback)
  }

  bet(callback) {
    if (this.gamestate.community_cards.length > 0) {
        var cards = _.merge(this.hole_cards, this.gamestate.community_cards)
        var s = new Score()
        s.scoreHand(cards, this.gamestate, callback)
    } else {
      callback(0)
    }
  }

  public showdown(gameState: GameState): void {

  }
};

export default Player;
