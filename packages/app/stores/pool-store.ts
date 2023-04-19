import { makeAutoObservable } from "mobx";
import { Asset } from "@chain-registry/types";
import { PoolsData } from "../components/pools-list";
import { getRandomAPR, getRandomMyLiquidity, getRandomPoolLiquidity } from "../utils";
import { AssetStore } from ".";

export default class PoolStore {
  pools: PoolsData[] = []
  assetStore: AssetStore

  static id = 0

  constructor(assetStore: AssetStore = new AssetStore()) {
    this.assetStore = assetStore
    makeAutoObservable(this, { assetStore: false })
  }

  addPool(asset1: Asset, asset2: Asset) {
    if (this.pools.find(pool => (
      (pool.token1.name === asset1.name && pool.token2.name === asset2.name) ||
      (pool.token1.name === asset2.name && pool.token2.name === asset1.name))
    )) { return }

    const myLiquidity = getRandomMyLiquidity()
    this.pools.push({
      id: String(++PoolStore.id),
      apr: getRandomAPR(),
      token1: { name: asset1.name, imgSrc: asset1.logo_URIs.png },
      token2: { name: asset2.name, imgSrc: asset2.logo_URIs.png },
      myLiquidity: myLiquidity,
      myBoundedAmount: myLiquidity,
      poolLiquidity: getRandomPoolLiquidity(),
      longestDaysUnbonding: Math.random() < 0.5,
    })
  }
}