"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { setMultiFormData } from "@/app/GlobalRedux/Features/MultiForm/multiFormSlice";
import { MultiFormIntial } from "@/utils/data/MultiFormIntial";

type Props = {};

const SuccessCard = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
    dispatch(setMultiFormData(MultiFormIntial));
  }, []);

  return (
    <div className="mt-10 md:text-5xl flex justify-center gap-5 items-center">
      <p>Form submitted successfully </p>{" "}
      <Image
        alt="success image party popper"
        src="/media/icons/party-popper.png"
        width={40}
        height={40}
      />
    </div>
  );
};

export default SuccessCard;
