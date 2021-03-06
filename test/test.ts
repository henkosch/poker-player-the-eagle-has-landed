import 'mocha';
import { assert } from 'chai';
import { hasHighCards, handToString, handToOdds } from '../src/CardScorer';
import { preFlopBet } from '../src/Player';
import { GameState } from '../src/GameState';
import { Score } from '../src/Score';
import * as _ from 'lodash';

describe('CardScorer', () => {
  it('hasHighCards', () => {
    assert.isTrue(hasHighCards([
        { rank: "1", suit: "hearts"},
        { rank: "10", suit: "hearts"},
        { rank: "J", suit: "hearts"},
        { rank: "Q", suit: "hearts"},
    ]));
  });

  it('handToString T4s', () => {
    assert.equal("T4s", handToString([
        { rank: "4", suit: "hearts"},
        { rank: "10", suit: "hearts"},
    ]));
  });

  it('handToString 22', () => {
    assert.equal("22", handToString([
        { rank: "2", suit: "hearts"},
        { rank: "2", suit: "diamonds"},
    ]));
  });

  it('handToString A8o', () => {
    assert.equal("A8o", handToString([
        { rank: "8", suit: "hearts"},
        { rank: "A", suit: "diamonds"},
    ]));
  });

  it('handToOdds A8o', () => {
    assert.equal(40.8, handToOdds([
        { rank: "8", suit: "hearts"},
        { rank: "A", suit: "diamonds"},
    ]));
  });

  it('handToOdds xxxx', () => {
    assert.equal(0, handToOdds([
        { rank: "x", suit: "hearts"},
        { rank: "x", suit: "diamonds"},
    ]));
  });

  it('preFlopBet allIn', () => {
    var gameState: GameState = {
      tournament_id: null,
      game_id: null,
      round: null,
      bet_index: 0,
      small_blind: null,
      current_buy_in: 0,
      pot: 0,
      minimum_raise: 0,
      dealer: 0,
      orbits: 0,
      in_action: 0,
      players: [{
        id: 0,
        name: null,
        status: null,
        version: null,
        stack: 1000,
        bet: 0,
        hole_cards: [
          { rank: "A", suit: "hearts"},
          { rank: "K", suit: "diamonds"}
        ]
      }],
      community_cards: []
    };

    assert.equal(1000, preFlopBet(gameState));
  });

  it('preFlopBet raise', () => {
    var gameState: GameState = {
      tournament_id: null,
      game_id: null,
      round: null,
      bet_index: 0,
      small_blind: null,
      current_buy_in: 0,
      pot: 0,
      minimum_raise: 100,
      dealer: 0,
      orbits: 0,
      in_action: 0,
      players: [{
        id: 0,
        name: null,
        status: null,
        version: null,
        stack: 1000,
        bet: 0,
        hole_cards: [
          { rank: "K", suit: "hearts"},
          { rank: "5", suit: "hearts"}
        ]
      }],
      community_cards: []
    };

    assert.equal(300, preFlopBet(gameState));
  });

  it('postFlopBet', (callback) => {
    var gameState: GameState = {
      tournament_id: null,
      game_id: null,
      round: null,
      bet_index: 1,
      small_blind: null,
      current_buy_in: 0,
      pot: 0,
      minimum_raise: 100,
      dealer: 0,
      orbits: 0,
      in_action: 0,
      players: [{
        id: 0,
        name: null,
        status: null,
        version: null,
        stack: 1000,
        bet: 0,
        hole_cards: [
          { rank: "K", suit: "hearts" },
          { rank: "5", suit: "hearts" }
        ]
      }],
      community_cards: [
        { rank: "Q", suit: "hearts" },
        { rank: "6", suit: "hearts" },
        { rank: "A", suit: "spades"}
      ]
    };

    var s = new Score();
    var cards = _.concat(gameState.community_cards, [
      { rank: "Q", suit: "spades" },
      { rank: "5", suit: "hearts" }
    ] )
    var testCallback = (amount) => {
     assert.equal(100, amount);
     callback();
    }
    s.scoreHand(cards, gameState, testCallback)
  });
});
