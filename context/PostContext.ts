import React from "react";
import { IPost } from "../models/IPost";

const ReposContext = React.createContext<IPost[]>([]);

export default ReposContext;
