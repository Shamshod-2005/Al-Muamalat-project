import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
  form,
  label,
  name,
  placeholder,
}: {
  form: any;
  label?: string;
  name: string;
  placeholder?:string
}) => {
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
        {form.formState.errors[`${name}`]?.message}
      </p>
    </div>
  );
};

export default PasswordInput;
