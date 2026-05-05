import login_img from "@/assets/login_img.png";
import logo from "@/assets/Logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { loginApi, otpApi, ResendOtpApi } from "@/api/auth";
import { otpSchema } from "@/schemas/otp.schem";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

type LoginForm = {
  email: string;
  password: string;
};

type OtpForm = {
  otp: string;
};

const Login = () => {
  const { t } = useTranslation();
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");

  const [timeLeft, setTimeLeft] = useState(60);
  const [isExpired, setIsExpired] = useState(false);
  const [canResend, setCanResend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    formState: { errors: otpErrors },
  } = useForm<OtpForm>({
    resolver: zodResolver(otpSchema),
  });

  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (_, variables) => {
      toast.success("Emailga parol yuborildi");
      setEmail(variables.email);
      setStep("otp");

      startTimer();
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || "Xatolik";
      toast.error(message);
    },
  });

  const otpMutation = useMutation({
    mutationFn: otpApi,
    onSuccess: (data) => {
      login({
        user: data.user,
        accessToken: data.tokens.accessToken,
        refreshToken: data.tokens.refreshToken,
      });

      toast.success("Login successful");
      navigate("/home");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "OTP xatolik");
    },
  });

  const onSubmit = async (data: LoginForm) => {
    loginMutation.mutate(data);
  };

  const onSubmitOtp = (data: OtpForm) => {
    otpMutation.mutate({
      email,
      otp: data.otp,
    });
  };

  const startTimer = () => {
    setTimeLeft(60);
    setIsExpired(false);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resendMutation = useMutation({
    mutationFn: ResendOtpApi,

    onSuccess: () => {
      toast.success("OTP qayta yuborildi");

      otpMutation.reset();

      startTimer();
    },

    onError: () => {
      toast.error("Resend failed");
    },
  });

  return (
    <div className=" h-screen overflow-hidden ">
      <div className=" h-full p-6 grid grid-cols-2  ">
        {/* left */}
        <div className="flex flex-col h-full justify-center gap-10">
          <div className="flex gap-20 items-center pt-10">
            <img src={logo} alt="" />
          </div>

          <div className="flex flex-col justify-center flex-1 gap-6">
            <h1 className="font-bold text-5xl">{t("Get started")}</h1>

            {step == "login" ? (
              <>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-100 flex flex-col gap-5"
                >
                  <Input {...register("email")} placeholder="Email" />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}

                  <Input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}

                  <Button type="submit" disabled={loginMutation.isPending}>
                    {loginMutation.isPending ? "Loading..." : "Sign in"}
                  </Button>
                  <p className="text-lg text-center mt-3">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-600 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </>
            ) : (
              <div className="">
                <form
                  action=""
                  className="w-100 flex flex-col gap-5"
                  onSubmit={handleSubmitOtp(onSubmitOtp)}
                >
                  <p>
                    Emailingizga kod yuborildi: <b>{email}</b>
                  </p>

                  <Input placeholder="Enter OTP" {...registerOtp("otp")} />
                  {!isExpired && timeLeft > 0 && (
                    <p className="text-gray-500">
                      Code expires in: <b>{timeLeft}s</b>
                    </p>
                  )}

                  {otpErrors.otp && (
                    <p className="text-red-500">{otpErrors.otp.message}</p>
                  )}
                  <Button type="submit" disabled={otpMutation.isPending}>
                    {otpMutation.isPending ? "Verifying..." : "Verify OTP"}
                  </Button>

                  {isExpired && (
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => resendMutation.mutate({ email })}
                      disabled={resendMutation.isPending}
                    >
                      {resendMutation.isPending ? "Sending..." : "Resend OTP"}
                    </Button>
                  )}
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

export default Login;
