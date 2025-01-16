import Parse from "../../../parse.js";

export interface IUser extends Parse.User {
  username: string;
  email: string;
  phone: string;
  password: string;
  emailVerified: boolean;
  avatarUrl: string;
  //OTHERs
  averageRating: string;
  ratings: string;
}
