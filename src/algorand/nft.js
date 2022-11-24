import { Wallet } from "algorand-session-wallet";
import { CreateToken, getToken } from "./algorand";

export function ipfsURL(cid) {
  return cid;
}

export class Token {
  id;
  name;
  unitName;
  url;
  metadataHash;
  total;
  decimals;
  creator;
  manager;
  reserve;
  clawback;
  freeze;
  defaultFrozen;

  constructor(t) {
    this.id = t.id || 0;
    this.name = t.name || "";
    this.unitName = t.unitName || "";
    this.url = t.url || "";
    this.metadataHash = t.metadataHash || "";
    this.total = t.total || 0;
    this.decimals = t.decimals || 0;
    this.creator = t.creator || "";
    this.manager = t.manager || "";
    this.reserve = t.reserve || "";
    this.clawback = t.clawback || "";
    this.freeze = t.freeze || "";
    this.defaultFrozen = t.defaultFrozen || false;
  }

  static fromParams(t) {
    const p = t.params;
    return new Token({
      id: t.index,
      name: p.name || "",
      unitName: p["unit-name"] || "",
      url: p.url || "",
      metadataHash: p["metadata-hash"] || "",
      total: p.total || 0,
      decimals: p.decimals || 0,
      creator: p.creator || "",
      manager: p.manager || "",
      reserve: p.reserve || "",
      clawback: p.clawback || "",
      freeze: p.freeze || "",
      defaultFrozen: p["default-frozen"] || false,
    });
  }
  valid() {
    return this.id > 0 && this.total > 0 && this.url !== "";
  }
}

export class NFT {
  token = new Token({});
  constructor(token) {
    this.token = token;
  }

  static async create(wallet, activeConf, cid, certname) {
    console.log("Called");
    const asset_id = await CreateToken(
      wallet,
      activeConf,
      ipfsURL(cid),
      certname
    );
    console.log("AssetID: " + asset_id);
    localStorage.setItem("token_id", asset_id.toString());
    localStorage.token_id = asset_id.toString();
    return await NFT.fromAssetId(activeConf, asset_id);
  }

  static async fromAssetId(activeConf, assetId) {
    return await getToken(activeConf, assetId);
  }
}
