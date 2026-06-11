import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormData } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
    },
  });

  //   Telegram guruhga junatish form malumotlarini

  const sendToTelegram = async (data: ContactFormData) => {
    const TOKEN = "8963125444:AAExWWoTyBXgwa63y3Qqhqw-IKNHfqIajtE";
    const CHAT_ID = "-1003927019373";

    const message = `
📩 Yangi contact form

👤 Ism: ${data.name}
👤 Familiya: ${data.surname}
📧 Email: ${data.email}
🏢 Tashkilot: ${data.organization}
📞 Telefon: ${data.phone}

💬 Xabar:
${data.message}
`;

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendToTelegram(data);
      alert("Xabar yuborildi!");
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi!");
    }
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-center pb-25">
        {t("Contact Us")}
      </h1>

      <div className="flex justify-between w-full ">
        <div className="flex flex-col items-center gap-3 w-100">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#009688] shrink-0">
            <MapPin className="h-8 w-8 text-white" />
          </div>

          <span className="max-w-lg text-base leading-6 text-center font-semibold">
            Tashkent city, Mirzo Ulugbek district, Lashkarbegi MFY, 59
            Independence
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 w-100">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#009688] shrink-0">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <a className="max-w-lg text-base leading-6 text-center font-semibold">
            info@al-muamalat.uz
          </a>
        </div>

        <div className="flex flex-col items-center gap-3 w-100">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#009688] shrink-0">
            <Phone className="h-8 w-8 text-white" />
          </div>

          <span className="max-w-lg text-base leading-6 text-center font-semibold">
            +998 99 051 18 81
          </span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-30 p-15 rounded-2xl border">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] items-start">
          <div>
            <h2 className="text-3xl font-bold">Get in touch</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-5 mt-8"
            >
              <div>
                <Input
                  className="py-5"
                  placeholder="Your Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  className="py-5"
                  placeholder="Your Surname"
                  {...register("surname")}
                />
                {errors.surname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.surname.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  className="py-5"
                  placeholder="Your Email Address"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  className="py-5"
                  placeholder="Your Organization"
                  {...register("organization")}
                />
                {errors.organization && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.organization.message}
                  </p>
                )}
              </div>

              <div className="col-span-2">
                <Input
                  className="py-5"
                  placeholder="Your Phone Number"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="col-span-2">
                <Textarea
                  className="py-8"
                  placeholder="Type your message here..."
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="">
                <button
                  type="submit"
                  className=" px-10 acol-span-2 bg-[#009688] text-white py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/contact.png"
              alt="Contact"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
