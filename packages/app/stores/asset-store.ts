import { makeAutoObservable } from "mobx";
import { Asset } from "@chain-registry/types";

export default class AssetStore {
  assets: Asset[] = []

  constructor(assets: Asset[] = []) {
    this.assets = assets.map(asset => ({ ...asset }))
    makeAutoObservable(this, { findAsset: false, getRandom: false })
  }

  getRandom(exclude?: Asset) {
    if (this.assets.length === 0) { return null }
    if (exclude) {
      const assets = this.assets.filter(asset => asset.symbol !== exclude.symbol)
      return assets.length > 0 ? assets[Math.floor(Math.random() * assets.length)] : null
    }
    return this.assets[Math.floor(Math.random() * this.assets.length)]
  }

  findAsset(asset: Asset) {
    return this.assets.find(a => a.symbol === asset.symbol)
  }

  addAsset(asset: Asset) {
    if (this.findAsset(asset)) { return }
    this.assets.push(asset)
  }

  updateAsset(asset: Asset) {
    const target = this.findAsset(asset)
    if (target) {
      Object.assign(target, asset)
    }
  }

  removeAsset(asset: Asset) {
    const target = this.findAsset(asset)
    if (target) {
      this.assets.splice(this.assets.indexOf(target), 1)
    }
  }
}