import { Card } from "./GameState";
import _ = require("lodash");

var highCardRanks = ["10", "J", "Q", "K", "A" ];

var rankValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
];

export function hasHighCards(cards: Card[]) {
    var ranks = cards.map(c => c.rank);
    return _.intersection(ranks, highCardRanks).length > 0;
}

export function rankToValue(rank: string) {
    return rankValues.indexOf(rank);
}

export function rankNormalize(rank: string) {
    if (rank == "10") return "T";
    return rank;
}

export function handToString(cards: Card[]) {
    if (cards.length != 2) return "";

    var card1 = cards[0];
    var card2 = cards[1];

    if (rankToValue(card2.rank) > rankToValue(card1.rank)) {
        card1 = cards[1];
        card2 = cards[0];
    }

    var result = rankNormalize(card1.rank) + rankNormalize(card2.rank);

    if (card1.suit == card2.suit && card1.rank != card2.rank) {
        result += "s";
    }

    if (card1.suit != card2.suit && card1.rank != card2.rank) {
        result += "o";
    }

    return result;
}

export function handToOdds(cards: Card[]) {
    var handString = handToString(cards);
    var odds = cardOdds[handString];
    return odds ? odds.Odds : 0;
}

var cardOdds = 
{
  "22": {
   "Odds": 30.7
  },
  "33": {
   "Odds": 33.5
  },
  "44": {
   "Odds": 36.8
  },
  "55": {
   "Odds": 40.1
  },
  "66": {
   "Odds": 43.2
  },
  "77": {
   "Odds": 46.4
  },
  "88": {
   "Odds": 49.9
  },
  "99": {
   "Odds": 53.5
  },
  "AA": {
   "Odds": 73.4
  },
  "AKs": {
   "Odds": 50.7
  },
  "AKo": {
   "Odds": 48.2
  },
  "AQs": {
   "Odds": 49.4
  },
  "AQo": {
   "Odds": 46.8
  },
  "AJs": {
   "Odds": 48.2
  },
  "AJo": {
   "Odds": 45.6
  },
  "ATs": {
   "Odds": 47.1
  },
  "ATo": {
   "Odds": 44.4
  },
  "A9s": {
   "Odds": 44.8
  },
  "A9o": {
   "Odds": 41.8
  },
  "A8s": {
   "Odds": 43.7
  },
  "A8o": {
   "Odds": 40.8
  },
  "A7s": {
   "Odds": 42.6
  },
  "A7o": {
   "Odds": 39.4
  },
  "A6s": {
   "Odds": 41.3
  },
  "A6o": {
   "Odds": 38
  },
  "A5s": {
   "Odds": 41.4
  },
  "A5o": {
   "Odds": 38.2
  },
  "A4s": {
   "Odds": 40.4
  },
  "A4o": {
   "Odds": 36.9
  },
  "A3s": {
   "Odds": 39.4
  },
  "A3o": {
   "Odds": 35.9
  },
  "A2s": {
   "Odds": 38.5
  },
  "A2o": {
   "Odds": 35
  },
  "KK": {
   "Odds": 68.9
  },
  "KQs": {
   "Odds": 47.1
  },
  "KQo": {
   "Odds": 44.4
  },
  "KJs": {
   "Odds": 45.9
  },
  "KJo": {
   "Odds": 43.1
  },
  "KTs": {
   "Odds": 44.9
  },
  "KTo": {
   "Odds": 42
  },
  "K9s": {
   "Odds": 42.4
  },
  "K9o": {
   "Odds": 39.5
  },
  "K8s": {
   "Odds": 40.2
  },
  "K8o": {
   "Odds": 37.2
  },
  "K7s": {
   "Odds": 39.4
  },
  "K7o": {
   "Odds": 36.1
  },
  "K6s": {
   "Odds": 38.4
  },
  "K6o": {
   "Odds": 35
  },
  "K5s": {
   "Odds": 37.4
  },
  "K5o": {
   "Odds": 34
  },
  "K4s": {
   "Odds": 36.4
  },
  "K4o": {
   "Odds": 32.8
  },
  "K3s": {
   "Odds": 35.5
  },
  "K3o": {
   "Odds": 31.9
  },
  "K2s": {
   "Odds": 34.6
  },
  "K2o": {
   "Odds": 30.9
  },
  "QQ": {
   "Odds": 64.9
  },
  "QJs": {
   "Odds": 44.1
  },
  "QJo": {
   "Odds": 41.4
  },
  "QTs": {
   "Odds": 43.1
  },
  "QTo": {
   "Odds": 40.2
  },
  "Q9s": {
   "Odds": 40.7
  },
  "Q9o": {
   "Odds": 37.6
  },
  "Q8s": {
   "Odds": 38.6
  },
  "Q8o": {
   "Odds": 35.4
  },
  "Q7s": {
   "Odds": 36.7
  },
  "Q7o": {
   "Odds": 33.2
  },
  "Q6s": {
   "Odds": 35.8
  },
  "Q6o": {
   "Odds": 32.3
  },
  "Q5s": {
   "Odds": 34.9
  },
  "Q5o": {
   "Odds": 31.3
  },
  "Q4s": {
   "Odds": 33.9
  },
  "Q4o": {
   "Odds": 30.2
  },
  "Q3s": {
   "Odds": 33
  },
  "Q3o": {
   "Odds": 29.2
  },
  "Q2s": {
   "Odds": 32.2
  },
  "Q2o": {
   "Odds": 28.4
  },
  "JJ": {
   "Odds": 61.2
  },
  "JTs": {
   "Odds": 41.9
  },
  "JTo": {
   "Odds": 39
  },
  "J9s": {
   "Odds": 39.6
  },
  "J9o": {
   "Odds": 36.5
  },
  "J8s": {
   "Odds": 37.5
  },
  "J8o": {
   "Odds": 34.2
  },
  "J7s": {
   "Odds": 35.4
  },
  "J7o": {
   "Odds": 32.1
  },
  "J6s": {
   "Odds": 33.6
  },
  "J6o": {
   "Odds": 29.8
  },
  "J5s": {
   "Odds": 32.8
  },
  "J5o": {
   "Odds": 29.1
  },
  "J4s": {
   "Odds": 31.8
  },
  "J4o": {
   "Odds": 28.1
  },
  "J3s": {
   "Odds": 30.9
  },
  "J3o": {
   "Odds": 27.1
  },
  "J2s": {
   "Odds": 30.1
  },
  "J2o": {
   "Odds": 26.2
  },
  "TT": {
   "Odds": 57.7
  },
  "T9s": {
   "Odds": 38.9
  },
  "T9o": {
   "Odds": 35.7
  },
  "T8s": {
   "Odds": 36.9
  },
  "T8o": {
   "Odds": 33.6
  },
  "T7s": {
   "Odds": 34.9
  },
  "T7o": {
   "Odds": 31.4
  },
  "T6s": {
   "Odds": 32.8
  },
  "T6o": {
   "Odds": 29.2
  },
  "T5s": {
   "Odds": 30.8
  },
  "T5o": {
   "Odds": 27.1
  },
  "T4s": {
   "Odds": 30.1
  },
  "T4o": {
   "Odds": 26.4
  },
  "T3s": {
   "Odds": 29.3
  },
  "T3o": {
   "Odds": 25.5
  },
  "T2s": {
   "Odds": 28.5
  },
  "T2o": {
   "Odds": 24.7
  },
  "98s": {
   "Odds": 36
  },
  "98o": {
   "Odds": 32.9
  },
  "97s": {
   "Odds": 34.2
  },
  "97o": {
   "Odds": 30.9
  },
  "96s": {
   "Odds": 32.3
  },
  "96o": {
   "Odds": 28.8
  },
  "95s": {
   "Odds": 30.4
  },
  "95o": {
   "Odds": 26.7
  },
  "94s": {
   "Odds": 28.4
  },
  "94o": {
   "Odds": 24.6
  },
  "93s": {
   "Odds": 27.8
  },
  "93o": {
   "Odds": 23.9
  },
  "92s": {
   "Odds": 27
  },
  "92o": {
   "Odds": 22.9
  },
  "87s": {
   "Odds": 33.9
  },
  "87o": {
   "Odds": 30.6
  },
  "86s": {
   "Odds": 32
  },
  "86o": {
   "Odds": 28.6
  },
  "85s": {
   "Odds": 30.2
  },
  "85o": {
   "Odds": 26.5
  },
  "84s": {
   "Odds": 28.1
  },
  "84o": {
   "Odds": 24.4
  },
  "83s": {
   "Odds": 26.3
  },
  "83o": {
   "Odds": 22.4
  },
  "82s": {
   "Odds": 25.8
  },
  "82o": {
   "Odds": 21.7
  },
  "76s": {
   "Odds": 32
  },
  "76o": {
   "Odds": 28.5
  },
  "75s": {
   "Odds": 30.1
  },
  "75o": {
   "Odds": 26.5
  },
  "74s": {
   "Odds": 28.2
  },
  "74o": {
   "Odds": 24.5
  },
  "73s": {
   "Odds": 26.3
  },
  "73o": {
   "Odds": 22.4
  },
  "72s": {
   "Odds": 24.5
  },
  "72o": {
   "Odds": 20.4
  },
  "65s": {
   "Odds": 30.2
  },
  "65o": {
   "Odds": 26.7
  },
  "64s": {
   "Odds": 28.5
  },
  "64o": {
   "Odds": 24.7
  },
  "63s": {
   "Odds": 26.5
  },
  "63o": {
   "Odds": 22.7
  },
  "62s": {
   "Odds": 24.8
  },
  "62o": {
   "Odds": 20.7
  },
  "54s": {
   "Odds": 28.8
  },
  "54o": {
   "Odds": 25.2
  },
  "53s": {
   "Odds": 27.1
  },
  "53o": {
   "Odds": 23.3
  },
  "52s": {
   "Odds": 25.3
  },
  "52o": {
   "Odds": 21.3
  },
  "43s": {
   "Odds": 26.2
  },
  "43o": {
   "Odds": 22.3
  },
  "42s": {
   "Odds": 24.6
  },
  "42o": {
   "Odds": 20.5
  },
  "32s": {
   "Odds": 23.6
  },
  "32o": {
   "Odds": 19.5
  }
};