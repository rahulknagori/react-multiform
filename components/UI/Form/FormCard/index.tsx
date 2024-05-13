import styles from "./formcard.module.css";

type Props = {
  children: React.ReactNode;
  variant?: string;
};

const Index = ({ children, variant = "" }: Props) => {
  return (
    <div
      className={`shadow-md p-4 rounded-lg ${styles["card-container"]} ${variant}`}
    >
      {children}
    </div>
  );
};

export default Index;
