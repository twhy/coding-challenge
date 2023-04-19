import { describe, expect, test } from '@jest/globals';
import { asset_list } from '@chain-registry/osmosis';
import { PoolStore } from '.';

describe('PoolStore', () => {
  const assets = asset_list.assets

  test('addPool()', () => {
    const store = new PoolStore();
    expect(store.pools.length).toBe(0);

    store.addPool(assets[0], assets[1]);
    expect(store.pools.length).toBe(1);
    expect(store.pools[0].token1.name).toBe(assets[0].name);
    expect(store.pools[0].token2.name).toBe(assets[1].name);

    store.addPool(assets[1], assets[2]);
    expect(store.pools.length).toBe(2);

    store.addPool(assets[0], assets[1]);
    expect(store.pools.length).toBe(2);

    store.addPool(assets[1], assets[0]);
    expect(store.pools.length).toBe(2);
  });
})