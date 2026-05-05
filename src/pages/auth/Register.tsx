import { otpApi, otpApiRegister, registerApi } from "@/api/auth";
import login_img from "@/assets/login_img.png";
import logo from "@/assets/Logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { otpSchema } from "@/schemas/otp.schem";
import { registerSchema } from "@/schemas/register.schem";
import { useAuthStore } from "@/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type RegisterForm = {
  first_name: string;
  email: string;
  password: string;
  phone_number: string;
  last_name: string;
  confirm_password: string;
};

type OtpForm = {
  otp: string;
};

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"register" | "otp">("register");
  const { register: setUser } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //registratsiya
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone_number: "+998",
    },
  });

  //otp
  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    formState: { errors: otpErrors },
  } = useForm<OtpForm>({
    resolver: zodResolver(otpSchema),
  });

  const registerMutation = useMutation({
    mutationFn: registerApi,

    onSuccess: (data, variables) => {
      toast.success("Muvaffaqiyatli ro‘yxatdan o‘tdingiz");
      setEmail(variables.email);
      setStep("otp");
      console.log(data);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Xatolik yuz berdi");
    },
  });

  //otp
  const otpMutation = useMutation({
    mutationFn: otpApiRegister,
    onSuccess: (data) => {
      setUser(data.user);
      toast.success("Register successful");
      navigate("/home");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "OTP xatolik");
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    const { confirm_password, ...payload } = data;

    registerMutation.mutate(payload);
  };

  const onSubmitOtp = (data: OtpForm) => {
    otpMutation.mutate({
      email,
      otp: data.otp,
    });
  };

  return (
    <div className=" h-screen p-6 ">
      <div className=" h-full grid grid-cols-2  ">
        {/* left */}
        <div className="flex flex-col  gap-10">
          <div className="flex gap-20 items-center pt-10">
            <img src={logo} alt="" />
          </div>

          <div className="flex flex-col pt-20 gap-6">
            <h1 className="font-bold text-5xl">{t("Get started")}</h1>

            {step == "register" ? (
              <form
                action=""
                className="w-100 flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input {...register("last_name")} placeholder="Last Name" />
                {errors.last_name && (
                  <p className="text-red-500">{errors.last_name.message}</p>
                )}

                <Input {...register("first_name")} placeholder="First Name" />
                {errors.first_name && (
                  <p className="text-red-500">{errors.first_name.message}</p>
                )}

                <Input {...register("email")} placeholder="Your Email" />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Password"
                  />

                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirm_password")}
                    placeholder="Confirm Password"
                  />

                  {errors.confirm_password && (
                    <p className="text-red-500">
                      {errors.confirm_password.message}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {/* <Input
                  type="password"
                  {...register("confirm_password")}
                  placeholder="Confirm Password"
                />

                {errors.confirm_password && (
                  <p className="text-red-500">
                    {errors.confirm_password.message}
                  </p>
                )} */}

                {/* <Input {...register("password")} placeholder="Password" />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )} */}

                <Input
                  {...register("phone_number")}
                  placeholder="Your phone number"
                />
                {errors.phone_number && (
                  <p className="text-red-500">{errors.phone_number.message}</p>
                )}

                <Button type="submit" disabled={registerMutation.isPending}>
                  {registerMutation.isPending ? "Loading..." : "Submit"}
                </Button>
              </form>
            ) : (
              <div className="">
                <form
                  action=""
                  className="w-100 flex flex-col gap-5"
                  onSubmit={handleSubmitOtp(onSubmitOtp)}
                >
                  <p>
                    OTP yuborildi: <b>{email}</b>
                  </p>

                  <Input placeholder="Enter OTP" {...registerOtp("otp")} />
                  {otpErrors.otp && (
                    <p className="text-red-500">{otpErrors.otp.message}</p>
                  )}

                  <Button type="submit" disabled={otpMutation.isPending}>
                    {otpMutation.isPending ? "Verifying..." : "Verify OTP"}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* right */}
        <div className="bg-[#009688] rounded-2xl flex flex-col justify-center items-center p-10 gap-y-20">
          <img src={login_img} alt="" />
          <span className="text-white text-2xl font-bold w-150 text-center">
            Welcome to AI Muamalat Empowering Your Journey in Islamic Finance
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
