import { GameState } from "./GameState";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    betCallback(gameState.minimum_raise);
  }

  public showdown(gameState: GameState): void {

  }
};

export default Player;
