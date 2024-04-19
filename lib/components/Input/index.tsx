import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

export default function Input(props: Props) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white dark:bg-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3 ${className || ''}`}
    />
  )
}