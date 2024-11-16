import { cn } from "@/utils/helpers";

interface InputFieldProps extends React.ComponentProps<"input"> {
  label: string;
  labelClassName?: string

}

const InputField: React.FC<InputFieldProps> = ({ labelClassName, className, id, label, ...reestProps }) => {
  return (
    <div>
      <label htmlFor={id} className={cn("block mb-2 text-sm font-medium text-gray-900 dark:text-white", labelClassName)}>
        {label}
      </label>
      <input

        className={cn("bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", className)}
        {...reestProps}
      />
    </div>
  );
};




export default InputField;