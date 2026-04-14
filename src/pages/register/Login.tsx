import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import login_img from "@/assets/login_img.png";
import { useTranslation } from "react-i18next";
import logo from "@/assets/Logo.png";

const Login = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" h-screen p-6 ">
      <div className=" h-full grid grid-cols-2  ">
        {/* left */}
        <div className="flex flex-col  gap-10">
          <div className="flex gap-20 items-center pt-10">
            <img src={logo} alt="" />
            {/* <p>{t("hello my name is Shamshod")}</p> */}
            {/* <span>{t("hello my name is Akmal")}</span> */}
          </div>

          <div className="flex flex-col pt-50 gap-6">
            <h1 className="font-bold text-5xl">{t("Get started")}</h1>

            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="w-100 flex flex-col gap-5"
            >
              <Input
                {...register("email")}
                placeholder="Email"
                className="border py-5 "
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <Input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="border py-5  "
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <Button className="bg-[#009688] text-xl p-5 ">
                {" "}
                {t("Sign in")}
              </Button>
            </form>
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
