import { FaAngleDown } from "react-icons/fa";

const CustomSelect = ({
  option,
  label,
  className,
  inputClassName,
  labelClassName,
  options,
  onChange,
}: {
  option: string;
  label?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  options?: string[];
  onChange?: (e: any) => void;
}) => {
  return (
    <form className={`flex items-center gap-2 ${className}`}>
      {label && (
        <label
          className={`font-medium text-primary-text dark:text-white ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className={`relative min-w-32 ${inputClassName}`}>
        <select
          id="rows"
          onChange={onChange}
          className="appearance-none bg-transparent border border-gray-200 text-gray-900 text-sm rounded-xs focus:outline-none block w-full p-2.5 pr-4 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">{option}</option>
          {options &&
            options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary-text dark:text-white">
          <FaAngleDown />
        </div>
      </div>
    </form>
  );
};

export default CustomSelect;
