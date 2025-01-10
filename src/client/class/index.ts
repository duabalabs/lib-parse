import { SubClass } from "../initialize";
import { TradeSignal, TRADESIGNAL_CLASSNAME } from "./trade-signal";
import { User, USER_CLASSNAME } from "./user";

const CustomSubClasses: SubClass[] = [
  {
    className: USER_CLASSNAME,
    class: User as any,
  },
  {
    className: TRADESIGNAL_CLASSNAME,
    class: TradeSignal as any,
  },
];
export const SubClasses: SubClass[] = [...CustomSubClasses];

export * from "./chat";
export * from "./trade-signal";
export * from "./user";
