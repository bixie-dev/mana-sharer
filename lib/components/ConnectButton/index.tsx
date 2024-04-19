import { ButtonHTMLAttributes } from "react";

export default function ConnectButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return (
    <button {...rest} className={`p-4 rounded-full bg-cyan-500 ${className || ''}`} />
  )
}