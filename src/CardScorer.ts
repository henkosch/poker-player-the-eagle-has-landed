import { Card } from "./GameState";
import _ = require("lodash");

var highCardRanks = ["10", "J", "Q", "K", "A" ];

export function hasHighCards(cards: Card[]) {
    var ranks = cards.map(c => c.rank);
    return _.intersection(ranks, highCardRanks).length > 0;
} 