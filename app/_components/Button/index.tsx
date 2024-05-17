import { RiLoader4Fill } from "react-icons/ri";

type ButtonType = {
  btnType?: "submit" | "reset" | "button";
  title: string;
  handleClick?: () => void;
  className?: string;
  isLoading?: boolean;
};

const Button = ({
  btnType,
  title,
  handleClick,
  className,
  isLoading,
}: ButtonType) => {
  return (
    <button
      disabled={isLoading}
      type={btnType}
      className={`flex justify-center items-center bg-[#8c6dfd] font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${className}`}
      onClick={handleClick}
    >
      {isLoading && <RiLoader4Fill className={`rotate-constant w-8 h-8`} />}
      {!isLoading && title}
    </button>
  );
};

export default Button;
