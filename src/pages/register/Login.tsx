import { loginSchema } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Login = () => {
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
    <div className="container mx-auto px-4">
      <div className="">
        
        <div className="flex gap-20 items-center">
          <h1>AL MUAMALAT</h1>
          <div>
            <span>Questions</span>
            <h2>Ask Diyor</h2>
          </div>
        </div>

        <div className="flex flex-col">
         
          <h1>Get Started</h1>
          
          <form action="" onSubmit={handleSubmit(onSubmit)} className="">
            <input
              {...register("email")}
              placeholder="Email"
              className="border p-2 "
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="border p-2 "
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button className="bg-blue-500 text-white px-4 py-2">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
