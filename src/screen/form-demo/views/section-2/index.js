import { Typography } from "@mui/material";
import React from "react";
import RenderForm from "../../../../components/render-form/render-form";

const SectionTwo = (props) => {
  return (
    <>
      <Typography variant="h6">Section: 1</Typography>
      <RenderForm {...props} />
    </>
  );
};

export default SectionTwo;
