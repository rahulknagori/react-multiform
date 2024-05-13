import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import FormErrorMessage from "@/components/UI/Form/FormErrorMessage";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomFormGroup = ({ name, type = "text", label }: Props) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-gray-700 capitalize text-light text-xs leading-[21px] md:text-sm"
      >
        {label}
      </label>
      <Field
        type={type}
        name={name}
        className="form-input rounded-lg mt-1 block w-full py-2 px-2.5 text-light text-xs leading-[21px] md:text-sm"
      />
      <FormErrorMessage name={name} />
    </>
  );
};

export default CustomFormGroup;
