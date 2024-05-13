type Props = {
  children: React.ReactNode;
  variant?: string;
  disabled?: boolean;
};

const Index = ({ children, variant = "", disabled = false }: Props) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`bg-emerald-600 uppercase text-white font-bold rounded-md p-2 px-10  text-xs leading-[21px] tracking-[0.2px] md:text-sm ${variant}`}
    >
      {children}
    </button>
  );
};

export default Index;
