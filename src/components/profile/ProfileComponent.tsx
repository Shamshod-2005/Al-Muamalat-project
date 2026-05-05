import { getMeApi, updateUserApi } from "@/api/auth";
import {
  accountSchema,
  passwordSchema,
  type AccountSchema,
  type PasswordSchema,
} from "@/schemas/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import PasswordInput from "../common/PasswordInput";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const ProfileComponent = () => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: any) => updateUserApi(id, data),
    onSuccess: () => {
      toast.success("O'zgartirildi");
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

  //Akkaunt sxema
  const accountForm = useForm<AccountSchema>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      full_name: "",
      address: "",
      phone_number: "",
    },
  });

  //Passwor sxema
  const passwordForm = useForm<PasswordSchema>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  // user kelganda formni to‘ldirish
  useEffect(() => {
    if (user) {
      accountForm.reset({
        full_name: user.full_name,
        address: user.address,
        phone_number: user.phone_number,
      });
    }
  }, [user]);

  //Akkaunt Submit
  const onAccountSubmit = (data: AccountSchema) => {
    if (!user?.user_id) return;

    updateMutation.mutate({
      id: user.user_id,
      data,
    });
  };

  //Password Submit
  const onPasswordSubmit = (data: PasswordSchema) => {
    if (!user?.user_id) return;

    updateMutation.mutate({
      id: user.user_id,
      data: {
        password: data.password,
      },
    });
  };

  return (
    <div className="container mx-auto px-4 pt-30 pb-20">
      <div className="border shadow-xl p-10 rounded-2xl ">
        <div className="">
          <Tabs defaultValue="account" className="">
            <TabsList className="py-6 px-2">
              <TabsTrigger className="py-4 text-base" value="account">
                Account
              </TabsTrigger>
              <TabsTrigger className="py-4 text-base" value="password">
                Password
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="w-full pt-5">
              <form
                onSubmit={accountForm.handleSubmit(onAccountSubmit)}
                className="grid grid-cols-2 gap-10"
              >
                <div className="flex flex-col gap-2">
                  <Label className="text-lg">Name</Label>
                  <Input
                    className="py-5"
                    {...accountForm.register("full_name")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-lg">Address</Label>
                  <Input
                    className="py-5"
                    {...accountForm.register("address")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-lg">Phone</Label>
                  <Input
                    className="py-5"
                    {...accountForm.register("phone_number")}
                  />
                </div>

                <div className="col-span-2">
                  <Button
                    className="bg-[#009688] rounded-lg py-5 px-4"
                    type="submit"
                    disabled={updateMutation.isPending}
                  >
                    {updateMutation.isPending ? "Loading..." : "Save changes"}
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="password" className="pt-5">
              <form
                onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
                className="grid grid-cols-2 gap-10"
              >
                <PasswordInput
                  form={passwordForm}
                  label="New Password"
                  name="password"
                />

                <PasswordInput
                  form={passwordForm}
                  label="Confirm Password"
                  name="confirm_password"
                />

                <div className="col-span-2">
                  <Button
                    className="bg-[#009688] rounded-lg py-5 px-4"
                    type="submit"
                    disabled={updateMutation.isPending}
                  >
                    {updateMutation.isPending
                      ? "Updating..."
                      : "Change Password"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
