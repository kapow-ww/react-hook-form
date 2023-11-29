import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import ControllerTextField from "./controller/text-field";
import { useFieldArray } from "react-hook-form";
import { getFieldArrayInputs } from "./logic";

const RenderForm = ({ girdProps, ...props }) => {
  const { form, propsUseForm } = props;

  const generateInput = (inputProps) => {
    switch (inputProps.type) {
      case "text-field":
        return <ControllerTextField {...inputProps} {...propsUseForm} />;
      default:
        throw new Error("Not have this type");
    }
  };
  const renderTypeInput = (inputProps) => {
    if (inputProps.fieldArray) {
      if (inputProps.fieldArray.length === 0) {
        throw new Error(`Empty field array.`);
      }
      const fieldArrayProps = new useFieldArray({
        name: inputProps.fieldArray.name,
        control: propsUseForm.control,
      });

      const inputs = getFieldArrayInputs(
        fieldArrayProps.fields,
        inputProps,
        inputProps.fieldArray?.fieldProps
      );

      let elementGroups = [];

      for (let input of inputs) {
        for (let prop of input) {
          const newInputProps = {
            ...prop,
            type: inputProps.type,
            control: inputProps.control,
            ...{ fieldControl: fieldArrayProps },
          };

          elementGroups.push(generateInput(newInputProps));
        }
      }
      return <Box {...inputProps.fieldArray.BoxProps}>{elementGroups}</Box>;
    }

    return generateInput(inputProps);
  };

  return (
    <Grid container {...girdProps}>
      {form.map((inputProps) => (
        <Grid item {...inputProps.gridItemProps} key={`${inputProps.name}`}>
          {renderTypeInput(inputProps)}
        </Grid>
      ))}
    </Grid>
  );
};

export default RenderForm;
