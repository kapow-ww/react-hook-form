import React from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import SectionOne from "./views/section-1";
import SectionTwo from "./views/section-2";
import { formSchema } from "./formSchema";

const ButtonSection = ({ onReset }) => (
  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}>
    <Button variant="contained" color="error" onClick={onReset}>
      ล้างข้อมูล
    </Button>
    <Button variant="contained" type="submit">
      บันทึก
    </Button>
  </Box>
);

const FormDemo = () => {
  const propsUseForm = useForm({
    defaultValues: {
      fullName: "asd",
      lastName: "asd",
      fullName2: "asd",
      lastName2: "asd",
      contact: [
        { name: "", phone: "", line: "" },
        { name: "", phone: "", line: "" },
        { name: "", phone: "", line: "" },
      ],
      test2: [
        { email: "", text2: "" },
        { text1: "", text2: "" },
      ],
    },
  });

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  const onReset = () => {
    propsUseForm.reset();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">Render Form test</Typography>

      <FormProvider {...propsUseForm}>
        <form onSubmit={propsUseForm.handleSubmit(onSubmitHandler)}>
          <SectionOne
            form={formSchema.SectionOneForm}
            propsUseForm={propsUseForm}
            girdProps={{ spacing: 2 }}
          />

          <SectionTwo
            form={formSchema.SectionTwoForm}
            propsUseForm={propsUseForm}
            girdProps={{ spacing: 2 }}
          />

          <ButtonSection onReset={onReset} />
        </form>
      </FormProvider>

      <pre>{JSON.stringify(propsUseForm.watch(), null, 2)}</pre>
    </Box>
  );
};

export default FormDemo;
