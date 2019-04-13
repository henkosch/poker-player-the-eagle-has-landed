import { GameState } from "./GameState";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    if(this.should_raise(gameState)) {
      betCallback(this.raise_amount(gameState))
    } else {
      //check
      betCallback(0);
    }
  }

  should_raise(gameState: GameState) : boolean {
    return true
  }

   raise_amount(gameState: GameState) : number {
    // TODO ret amount
    return gameState.minimum_raise
  }

  public showdown(gameState: GameState): void {

  }
};

export default Player;
