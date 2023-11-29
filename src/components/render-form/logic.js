export const getFieldArrayInputs = (fields, inputProps, fieldProps) => {
  let results = [];
  let groups = [];

  fields.forEach((obj, index) => {
    groups = [];
    Object.keys(obj).forEach((key, groupIndex) => {
      console.log("this is key", key);
      if (key !== "id") {
        const primaryProps = {
          name: `${inputProps.name}.[${index}].${key}`,
          key: `test.[${index}].${key}`,
        };
        let props = {
          ...primaryProps,
          ...{ fieldProps, label: `${fieldProps.label} ${index + 1}` },
        };

        if (fieldProps.customPerField) {
          props = {
            ...props,
            ...{
              label:
                fieldProps.customPerField[groupIndex]?.label || props.label,
            },
          };
        }

        groups.push(props);
      }
    });
    results.push(groups);
  });

  return results;
};
