import { ParseBaseClass } from "../baseClasses";
import { ITradeSignal } from "./types";

export const TRADESIGNAL_CLASSNAME = "TradeSignal";
export interface TradeSignal extends ITradeSignal {}
export class TradeSignal extends ParseBaseClass {
  constructor(tradesignal?: ITradeSignal) {
    super(TRADESIGNAL_CLASSNAME);
    this.fromObject(tradesignal);
  }
}

export * from "./types";
