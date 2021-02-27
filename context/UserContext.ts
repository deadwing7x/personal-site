import React from "react";
import { IUser } from "../models/IUser";

const UserContext = React.createContext<IUser>({
  avatar_url: "",
  html_url: "",
  name: "",
});

export default UserContext;
