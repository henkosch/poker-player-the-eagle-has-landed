import { GameState } from "./GameState";
import { handToOdds } from "./CardScorer";

var allInThreshold = 44;
var raiseThreshold = 35.9;
var checkThreshold = 33;
var maxCheckAmount = 50;

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {

    // pre-flop strategy
    if (gameState.bet_index == 0) {
      var bet = preFlopBet(gameState);
      betCallback(bet);
    }

    // post flop strategy
    if (gameState.bet_index > 0) {
      var bet = postFlopBet(gameState);
      betCallback(bet);
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
  var player = gameState.players[gameState.in_action];
  var odds = handToOdds(player.hole_cards);

  if (gameState.current_buy_in > 6 && odds < checkThreshold) return 0;
  return gameState.minimum_raise;
}

export default Player;
