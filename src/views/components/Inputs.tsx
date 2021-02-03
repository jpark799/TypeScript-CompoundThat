import React from "react";
import { Typography } from "@material-ui/core/";

type InputProps = {
  title: string;
  // type: string;
  // value: number;
};

const Inputs = (props : InputProps) => {
	return (
  <>
  <Typography>
    {props.title}
  </Typography>

  </>
  )
};

export default Inputs;
