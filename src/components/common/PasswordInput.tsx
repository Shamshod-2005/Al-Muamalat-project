import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import type { FieldErrors, Path, UseFormRegister } from "react-hook-form";

type PasswordInputProps<T extends Record<string, unknown>> = {
  form: {
    register: UseFormRegister<T>;
    formState: { errors: FieldErrors<T> };
  };
  label?: string;
  name: Path<T>;
  placeholder?: string;
};

const PasswordInput = <T extends Record<string, unknown>>({
  form,
  label,
  name,
  placeholder,
}: PasswordInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      {label && <Label className="text-lg">{label}</Label>}

      <Input
        className="py-5"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...form.register(name)}
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-10 text-gray-500"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>

      <p className="text-red-500 text-sm">
        {form.formState.errors[name]?.message as string | undefined}
      </p>
    </div>
  );
};

export default PasswordInput;
