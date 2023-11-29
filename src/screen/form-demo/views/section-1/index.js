import React from "react";
import { Typography } from "@mui/material";
import RenderForm from "../../../../components/render-form/render-form";

const SectionOne = (props) => {
  return (
    <>
      <Typography variant="h6">Section: 1</Typography>
      <RenderForm {...props} />
    </>
  );
};

export default SectionOne;
