import { ParseBaseClass } from "../baseClasses";
import { IMessage } from "./types";

export const MESSAGE_CLASSNAME = "Message";

export interface Message extends IMessage {}
export class Message extends ParseBaseClass {
  constructor(message?: IMessage) {
    super(MESSAGE_CLASSNAME);
    this.fromObject(message);
  }
}
