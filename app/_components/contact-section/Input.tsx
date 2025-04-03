type InputProps = {
  name: "name" | "email";
  type: string;
  placeholder?: string;
};

function Input({ name, type, placeholder }: InputProps) {
  return (
    <input
      name={name}
      className="rounded-lg border-none bg-gray-100 px-6 py-4 outline-none placeholder:text-gray-500 dark:bg-darkTertiary dark:placeholder:text-darkSecondary"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
