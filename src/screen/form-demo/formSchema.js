export const formSchema = {
  SectionOneForm: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text-field",
      defaultValue: "",
      required: true,
      gridItemProps: { xs: 12, sm: 12, md: 6 },
    },
    {
      name: "lastName",
      label: "last Name",
      type: "text-field",
      defaultValue: "",
      required: true,
      gridItemProps: { xs: 12, sm: 12, md: 6 },
    },
    {
      name: "contact",
      label: "contact",
      type: "text-field",
      defaultValue: "",
      required: true,
      gridItemProps: {
        xs: 12,
        sm: 12,
        md: 6,
      },
      fieldArray: {
        name: "contact",
        BoxProps: {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
        },
        fieldProps: {
          label: "เพิ่มอีเมลล์",
          placeholder: "เพิ่มอีเมลล์",
          customPerField: [
            { label: "เพิ่มชื่อ-นามสกุล" },
            { label: "เพิ่มเบอร์ติดต่อ" },
            { label: "เพิ่มไลน์ไอดี" },
          ],
        },
      },
    },
    {
      name: "test2",
      label: "ไอ่หน้าจืดนั่น",
      type: "text-field",
      defaultValue: "",
      required: true,
      gridItemProps: { xs: 12, sm: 12, md: 6 },
      fieldArray: {
        name: "test2",
        BoxProps: {
          sx: { display: "flex", flexDirection: "column", gap: 1 },
        },
        fieldProps: {
          label: "เพิ่มเบอร์ติดต่อ",
          placeholder: "เพิ่มเบอร์ติดต่อ",
        },
      },
    },
  ],
  SectionTwoForm: [
    {
      name: "fullName2",
      label: "Full Name2",
      type: "text-field",
      defaultValue: "",
      required: true,
      gridItemProps: { xs: 12, sm: 12, md: 6 },
    },
    {
      name: "lastName2",
      label: "last Name2",
      type: "text-field",
      defaultValue: "",
      required: true,
      gridItemProps: { xs: 12, sm: 12, md: 6 },
    },
  ],
};
