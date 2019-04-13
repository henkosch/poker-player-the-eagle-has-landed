import { GameState, Card } from "./GameState";
import {Score} from "./Score";
import * as _ from 'lodash';
import { handToOdds } from "./CardScorer";

var allInThreshold = 44;
var raiseThreshold = 35.9;
var checkThreshold = 33;
var maxCheckAmount = 50;

export interface Player {
  hole_cards: Card[]
  gamestate: GameState
}

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    this.gamestate = gameState
    // if(this.hole_cards.length == 0) {
    //   gameState.players.forEach((player, index) => {
    //     if(player.hole_cards != null) {
    //       player.hole_cards.forEach( (card, _) => {
    //         this.hole_cards.push(card);
    //       })
    //     }
    //   })
    // }

    // pre-flop strategy
    if (gameState.bet_index == 0) {
      var bet = preFlopBet(gameState);
      betCallback(bet);
    }

    // post flop strategy
    if (gameState.bet_index > 0) {
      var player = gameState.players[gameState.in_action];
      var odds = handToOdds(player.hole_cards);

      if (gameState.current_buy_in > 50) {
        betCallback(0)
        // this.bet(betCallback)
      } else {
        betCallback(gameState.minimum_raise)
      }
    }
  }

  bet(callback) {
    if (this.gamestate.community_cards.length > 0) {
      var cards = _.concat(this.hole_cards, this.gamestate.community_cards)
      var s = new Score()
      s.scoreHand(cards, this.gamestate, callback)
    } else {
      callback(0)
    }
  }

  public showdown(gameState: GameState): void {

  }

};

export function preFlopBet(gameState: GameState) {
  var player = gameState.players[gameState.in_action];
  var odds = handToOdds(player.hole_cards);

  if (odds >= allInThreshold) {
    return player.stack; // all in
  } else if (odds >= raiseThreshold) {
    return gameState.minimum_raise * 3; // minimum raise
  } else if (odds >= checkThreshold && gameState.current_buy_in < maxCheckAmount) {
    return gameState.current_buy_in - player.bet; // check in
  } else {
    return 0;
  }
}

export function postFlopBet(gameState: GameState) {

}

export default Player;
