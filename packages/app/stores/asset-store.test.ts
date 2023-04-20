import { describe, expect, test } from '@jest/globals';
import { asset_list } from '@chain-registry/osmosis';
import { AssetStore } from '.';

describe('AssetStore', () => {
  const assets = asset_list.assets

  test('addAsset()', () => {
    const store = new AssetStore();
    expect(store.assets.length).toBe(0);

    store.addAsset(assets[0]);
    expect(store.assets.length).toBe(1);

    store.addAsset(assets[1]);
    expect(store.assets.length).toBe(2);

    store.addAsset(assets[0]);
    expect(store.assets.length).toBe(2);
  });

  test('findAsset()', () => {
    const store = new AssetStore(assets.slice(1));
    expect(store.findAsset(assets[0])).toBeUndefined();
    expect(store.findAsset(assets[1])).toBeDefined();
  })

  test('updateAsset()', () => {
    const store = new AssetStore(assets);
    const asset = assets[0];
    asset.base = 'new base';
    store.updateAsset(asset);
    expect(store.assets[0].base).toBe('new base');
  })

  test('removeAsset()', () => {
    const store = new AssetStore(assets);
    store.removeAsset(assets[0]);
    expect(store.assets.length).toBe(assets.length - 1);
  })

  test('getRandom() - no assets', () => {
    const store = new AssetStore();
    expect(store.getRandom()).toBeNull();
  })

  test('getRandom()', () => {
    const store = new AssetStore(assets.slice(0, 2));
    const asset1 = store.getRandom();
    expect(asset1).toBeDefined();
    const asset2 = store.getRandom(asset1);
    expect(asset2.symbol).not.toBe(asset1.symbol);
  })

})