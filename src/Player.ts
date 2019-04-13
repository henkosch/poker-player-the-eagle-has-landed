import { GameState } from "./GameState";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    betCallback(100);
  }

  public showdown(gameState: GameState): void {

  }
};

export default Player;
