type Props = {};
import Link from "next/link";
import SuccessCard from "./components/SuccessCard";

const Page = (props: Props) => {
  return (
    <div className="px-10">
      <Link href="/">
        <div className="text-lg text-white font-bold bg-emerald-600 w-fit p-2 rounded-md mt-10">
          Home
        </div>
      </Link>
      <SuccessCard />
    </div>
  );
};

export default Page;
