import { getMeApi, updateUserApi } from "@/api/auth";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileSchema } from "@/schemas/profile.schema";
import { useEffect } from "react";

const ProfileComponent = () => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProfileSchema }) =>
      updateUserApi(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const {
    data: user,
    isLoading: isUserLoading,
    error: errorUser,
  } = useQuery({
    queryKey: ["me"],
    queryFn: getMeApi,
  });

  console.log(user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      full_name: "",
      address: "",
      password: "",
      phone_number: "",
    },
  });

  // user kelganda formni to‘ldirish
  useEffect(() => {
    if (user) {
      reset({
        full_name: user.full_name,
        address: user.address,
        password: "",
        phone_number: user.phone_number,
      });
    }
  }, [user, reset]);

  // if (isUserLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (errorUser) {
  //   return <h1>Error</h1>;
  // }

  const onSubmit = (data: ProfileSchema) => {
    if (!user?.user_id) return;

    updateMutation.mutate({
      id: user.user_id,
      data,
    });
  };

  return (
    <div className="container mx-auto px-4 pt-30 pb-20">
      <div className="border shadow-xl p-10 rounded-2xl ">
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-10"
          >
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <Label className="text-xl">{t("Enter your name")}</Label>
              <Input className="py-5 !text-lg " {...register("full_name")} />
              <p className="text-red-500 text-sm">
                {errors.full_name?.message}
              </p>
            </div>

            {/* ADDRESS */}
            <div className="flex flex-col gap-2">
              <Label className="text-xl">
                {t("Enter your address (optional)")}
              </Label>
              <Input className="py-5 !text-lg  " {...register("address")} />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <Label className="text-xl">{t("Enter password")}</Label>
              <Input
                className="py-5 !text-lg  "
                type="password"
                {...register("password")}
                placeholder="Password"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-2">
              <Label className="text-xl">{t("Your phone number")}</Label>
              <Input className="py-5 !text-lg " {...register("phone_number")} />
              <p className="text-red-500 text-sm">
                {errors.phone_number?.message}
              </p>
            </div>

            <div className="col-span-2">
              <Button
                size="lg"
                className="bg-[#009688] py-5 px-4"
                // disabled={isSubmitting}
                type="submit"
              >
                Save changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
