import { FieldValues, UseFormRegister, Path } from "react-hook-form";

type InputTypes<T extends FieldValues> = {
  id: Path<T>;
  register: UseFormRegister<T>;
  type: string;
  placeholder?: string;
};

function Input<T extends FieldValues>({
  id,
  register,
  type,
  placeholder,
}: InputTypes<T>) {
  return (
    <input
      id={id}
      className="rounded-lg border-none bg-gray-100 px-6 py-4 outline-none placeholder:text-gray-500 dark:bg-darkTertiary dark:placeholder:text-darkSecondary"
      {...register(id)}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
