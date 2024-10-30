"use server";

type TextareaTypes = {
  name: "message";
  placeholder?: string;
};

function Textarea({ name, placeholder }: TextareaTypes) {
  return (
    <textarea
      name={name}
      rows={7}
      className="resize-none rounded-lg border-none bg-gray-100 px-6 py-4 outline-none placeholder:text-gray-500 dark:bg-darkTertiary dark:placeholder:text-darkSecondary"
      placeholder={placeholder}
    />
  );
}

export default Textarea;
