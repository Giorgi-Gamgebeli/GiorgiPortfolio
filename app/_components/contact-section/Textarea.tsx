import { FieldValues, UseFormRegister, Path } from "react-hook-form";

type TextareaTypes<T extends FieldValues> = {
  id: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
};

function Textarea<T extends FieldValues>({
  id,
  register,
  placeholder,
}: TextareaTypes<T>) {
  return (
    <textarea
      id={id}
      rows={7}
      className="resize-none rounded-lg border-none bg-gray-100 px-6 py-4 outline-none placeholder:text-gray-500 dark:bg-darkTertiary dark:placeholder:text-darkSecondary"
      {...register(id)}
      placeholder={placeholder}
    />
  );
}

export default Textarea;
