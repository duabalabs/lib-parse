import { SubClass } from "../initialize";
import { User, USER_CLASSNAME } from "./user";

const CustomSubClasses: SubClass[] = [
  {
    className: USER_CLASSNAME,
    class: User as any,
  },
];
export const SubClasses: SubClass[] = [...CustomSubClasses];

export * from "./chat";
export * from "./user";
