"use client";
import FormCard from "@/components/UI/Form/FormCard";
import IndividualForm from "@/components/MultiForm/IndividualForm";
import { useDispatch, useSelector } from "react-redux";
import { MultiFormType } from "@/utils/types/multiFormType";
import BusinessForm from "@/components/MultiForm/BusinessForm";
import BankForm from "@/components/MultiForm/BankForm";
import Stepper from "@/components/Stepper/index";
import { setMultiFormData } from "@/app/GlobalRedux/Features/MultiForm/multiFormSlice";

type Props = {};

const Index = (props: Props) => {
  const dispatch = useDispatch();
  const multiFormData = useSelector(
    (state: { multiForm: MultiFormType }) => state.multiForm
  );

  const goBack = () => {
    const currStep = multiFormData.activeStep;
    if (currStep > 1) {
      dispatch(
        setMultiFormData({
          ...multiFormData,
          activeStep: currStep - 1,
        })
      );
    }
  };

  return (
    <div className="max-w-[800px] m-auto">
      <div className="flex justify-between">
        {multiFormData.activeStep > 1 && multiFormData.activeStep !== 4 ? (
          <div
            onClick={() => goBack()}
            className="cursor-pointer text-blue-600 underline"
          >
            Back
          </div>
        ) : (
          <div></div>
        )}
        <div className="w-32">
          <Stepper activeStep={multiFormData.activeStep || 1} />
        </div>
      </div>
      <FormCard variant="m-auto mt-4  ">
        {multiFormData.activeStep == 1 ? <IndividualForm /> : null}
        {multiFormData.activeStep == 2 ? <BusinessForm /> : null}
        {multiFormData.activeStep == 3 ? <BankForm /> : null}
        {multiFormData.activeStep === 4 ? (
          <p className="text-center md:text-2xl">
            Validating application .....
          </p>
        ) : null}
      </FormCard>
    </div>
  );
};

export default Index;
