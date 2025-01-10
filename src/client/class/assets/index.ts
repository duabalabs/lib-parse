import { ParseBaseClass } from "../baseClasses";
import { IAssets } from "./types";

export const ASSETS_CLASSNAME = "Assets";
export interface Assets extends IAssets {}
export class Assets extends ParseBaseClass {
  constructor(assets?: IAssets) {
    super(ASSETS_CLASSNAME);
    this.fromObject(assets);
  }
}

export * from "./types";
