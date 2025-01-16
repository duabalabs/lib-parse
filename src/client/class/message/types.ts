import Parse from "../../../parse.js";

import { User } from "../user";

export interface IMessage extends Parse.Object {
  text: string;
  sender: User;
}
