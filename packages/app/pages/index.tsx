import React from "react";
import Pools from '../components/pools-list';
import { asset_list } from '@chain-registry/osmosis';
import { AssetStore, PoolStore } from "../stores";

export default function Index() {
  return (<>
    <Pools store={new PoolStore(new AssetStore(asset_list.assets))} />
  </>
  );
}
