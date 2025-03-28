import React, { useContext } from "react";
import { ChangeContext } from "../store/Context";

const Text = () => {
  const { change } = useContext(ChangeContext)

  return <div>{change}</div>;
};

export default Text;
