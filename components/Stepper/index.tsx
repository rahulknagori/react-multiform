"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { MultiFormType } from "@/utils/types/multiFormType";
import { setMultiFormData } from "@/app/GlobalRedux/Features/MultiForm/multiFormSlice";

type Props = { activeStep: number };

const Index = ({ activeStep }: Props) => {
  const multiFormData = useSelector(
    (state: { multiForm: MultiFormType }) => state.multiForm
  );

  const dispatch = useDispatch();

  const setActiveStep = (step: number) => {
    dispatch(
      setMultiFormData({
        ...multiFormData,
        activeStep: step,
      })
    );
  };

  return (
    <div className="w-full flex justify-between relative items-center">
      <div onClick={() => setActiveStep(1)} className="cursor-pointer">
        <div className="w-6 h-6 flex items-center justify-center font-semibold text-white rounded-full bg-[#178288] border border-[#178288] z-10">
          {activeStep > 1 ? (
            <Image
              width={17}
              height={17}
              src={"/media/icons/check-mark.png"}
              alt="check-icon"
            />
          ) : (
            "1"
          )}
        </div>
      </div>
      <hr
        className={`border flex-1 ${
          activeStep >= 2 ? "border-[#178288]" : "border-[#D1D5DB]"
        }`}
      ></hr>
      <div
        onClick={() => setActiveStep(2)}
        className={` ${
          activeStep > 2 ? "cursor-pointer" : "pointer-events-none"
        }`}
      >
        <div
          className={`w-6 h-6 flex items-center justify-center font-semibold rounded-full border  ${
            activeStep >= 2
              ? "border-[#178288] bg-[#178288] text-white"
              : "border-[#D1D5DB] text-[#D1D5DB]"
          } z-10`}
        >
          {activeStep > 2 ? (
            <Image
              width={17}
              height={17}
              src={"/media/icons/check-mark.png"}
              alt="check-icon"
            />
          ) : (
            "2"
          )}
        </div>
      </div>

      <hr
        className={`border flex-1 ${
          activeStep >= 3 ? "border-[#178288]" : "border-[#D1D5DB]"
        }`}
      ></hr>
      <div
        onClick={() => setActiveStep(3)}
        className={` ${
          activeStep > 3 ? "cursor-pointer" : "pointer-events-none"
        }`}
      >
        <div
          className={`w-6 h-6 flex items-center justify-center font-semibold rounded-full border  ${
            activeStep >= 3
              ? "border-[#178288] bg-[#178288] text-white"
              : "border-[#D1D5DB] text-[#D1D5DB]"
          } z-10`}
        >
          {activeStep > 3 ? (
            <Image
              width={17}
              height={17}
              src={"/media/icons/check-mark.png"}
              alt="check-icon"
            />
          ) : (
            "3"
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
