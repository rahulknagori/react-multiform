import React from "react";
import { ErrorMessage } from "formik";

type Props = {
  name: string;
};

const FormErrorMessage = ({ name }: Props) => {
  return (
    <ErrorMessage
      name={name}
      component="small"
      className="text-red-500 text-xs md:text-sm"
    />
  );
};

export default FormErrorMessage;
