import React from "react";
import { IRepo } from "../models/IRepo";

const ReposContext = React.createContext<IRepo[]>([]);

export default ReposContext;
