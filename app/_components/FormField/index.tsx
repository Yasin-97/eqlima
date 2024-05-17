import { ChangeEventHandler } from "react";

type FormFieldType = {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  labelName?: string;
  className?: string;
  textAreaRow?: number;
  value?: string;
  inputType?: string;
  isTextArea?: boolean;
  isLoading?: boolean;
  maxLength?: number;
};
const FormField = ({
  labelName,
  className,
  placeholder,
  inputType,
  value,
  handleChange,
  isLoading,
  maxLength,
}: FormFieldType) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-semibold text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}

      <input
        maxLength={maxLength}
        disabled={isLoading}
        spellCheck
        value={value}
        onChange={handleChange}
        type={inputType}
        step="1"
        placeholder={placeholder}
        className={`py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent text-white text-[14px] placeholder:font-semibold placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px] ${className}`}
      />
    </label>
  );
};

export default FormField;
