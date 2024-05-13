"use client";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormErrorMessage from "@/components/UI/Form/FormErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { MultiFormType } from "@/utils/types/multiFormType";
import { setMultiFormData } from "@/app/GlobalRedux/Features/MultiForm/multiFormSlice";
import CustomFormGroup from "../../UI/Form/CustomFormGroup";
import SubmitBtn from "@/components/UI/Form/SubmitBtn";

type Props = {};
type FormValues = {
  name: string;
  email: string;
  address: string;
};

const formFields = [
  {
    id: 1,
    label: "name",
    name: "name",
    type: "text",
  },
  {
    id: 2,
    label: "email",
    name: "email",
    type: "email",
  },
];

const Index = (props: Props) => {
  const dispatch = useDispatch();
  const multiFormData = useSelector(
    (state: { multiForm: MultiFormType }) => state.multiForm
  );

  const initialValues: FormValues = {
    name: multiFormData.name,
    email: multiFormData.email,
    address: multiFormData.address,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(false);
    dispatch(
      setMultiFormData({
        ...multiFormData,
        ...values,
        activeStep: 2,
      })
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
            {formFields.map((item) => (
              <div key={item.id}>
                <CustomFormGroup
                  label={item.label}
                  name={item.name}
                  type={item.type}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 md:mt-6">
            <label
              htmlFor="address"
              className="block text-gray-700  text-light text-xs leading-[21px] md:text-sm"
            >
              Address
            </label>
            <Field
              as="textarea"
              name="address"
              id="address"
              className="form-input rounded-lg resize-none mt-1 block w-full py-2 px-2.5 text-light text-xs leading-[21px] md:text-sm"
            />
            <FormErrorMessage name="address" />
          </div>
          <div className="mt-4 md:mt-6">
            <SubmitBtn disabled={isSubmitting}>Submit</SubmitBtn>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Index;
