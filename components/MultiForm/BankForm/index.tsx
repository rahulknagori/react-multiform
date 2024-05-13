"use client";
import { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MultiFormType } from "@/utils/types/multiFormType";
import CustomFormGroup from "../../UI/Form/CustomFormGroup";
import SubmitBtn from "@/components/UI/Form/SubmitBtn";
import { setMultiFormData } from "@/app/GlobalRedux/Features/MultiForm/multiFormSlice";

type Props = {};
type FormValues = {
  accHolderName: string;
  accNumber: number | string;
  bankName: string;
  ifscCode: number | string;
};

const formFields = [
  {
    id: 1,
    label: "Account Holder Name",
    name: "accHolderName",
    type: "text",
  },
  {
    id: 2,
    label: "Account number",
    name: "accNumber",
    type: "text",
  },
  {
    id: 3,
    label: "Bank Name",
    name: "bankName",
    type: "text",
  },
  {
    id: 4,
    label: "IFSC Code",
    name: "ifscCode",
    type: "text",
  },
];

const validationSchema = Yup.object({
  accHolderName: Yup.string().required("Account holder name is required"),
  accNumber: Yup.number()
    .typeError("Account number must be a number")
    .required("Account number is required"),
  bankName: Yup.string().required("Bank name is required"),
  ifscCode: Yup.number()
    .typeError("IFSC code must be a number")
    .required("IFSC code is required"),
});

const Index = (props: Props) => {
  const dispatch = useDispatch();
  const multiFormData = useSelector(
    (state: { multiForm: MultiFormType }) => state.multiForm
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initialValues: FormValues = {
    accHolderName: multiFormData.accHolderName,
    accNumber: multiFormData.accNumber,
    bankName: multiFormData.bankName,
    ifscCode: multiFormData.ifscCode,
  };

  const handleSubmit = (
    _: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setLoading(true);
    dispatch(
      setMultiFormData({
        ...multiFormData,
        activeStep: 4,
      })
    );
    localStorage.clear();

    setTimeout(() => {
      setSubmitting(false);
      router.push("/success");
    }, 4000);
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
                  name={item.name || ""}
                  type={item.type}
                />
              </div>
            ))}
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
