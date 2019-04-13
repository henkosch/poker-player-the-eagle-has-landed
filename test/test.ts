import 'mocha';
import { assert } from 'chai';
import { hasHighCards } from '../src/CardScorer';

describe('CardScorer', () => {
  it('hasHighCards', () => {
    assert.isTrue(hasHighCards([
        { rank: "1", suit: "hearts"},
        { rank: "10", suit: "hearts"},
        { rank: "J", suit: "hearts"},
        { rank: "Q", suit: "hearts"},
    ]));
  });
});