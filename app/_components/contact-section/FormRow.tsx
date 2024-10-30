"use server";

type LoginFormRowTypes = {
  label?: string;
  children: React.ReactElement<HTMLInputElement>;
};

function FormRow({ label, children }: LoginFormRowTypes) {
  return (
    <div className="flex w-full flex-col gap-4">
      {label && <label htmlFor={children?.props.id}>{label}</label>}
      {children}
    </div>
  );
}

export default FormRow;
