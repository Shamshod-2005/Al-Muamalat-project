import { CourseList, getMeApi } from "@/api/auth";
import i18n from "@/configs/i18n";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const Brief = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  const {
    data: course_id,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses", id],
    queryFn: CourseList,
  });

  const course = course_id?.find(
    (item: any) => String(item.course_id) === String(id),
  );

  const {
    data: user,
    isLoading: isUserLoading,
    error: errorUser,
  } = useQuery({
    queryKey: ["me"],
    queryFn: getMeApi,
  });

  if (isUserLoading) {
    return <h1>Loading...</h1>;
  }

  if (errorUser) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Courses loading...</h1>;
  }

  if (error) {
    return <h1>Courses error</h1>;
  }

  return (
    <div className="container mx-auto px-4 pb-25">
      {/* <div className="pb-12">
        <h2 className="font-bold text-4xl text-center">
          Brief information about the course
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-8 w-150">
          <h3 className="text-[#009688] font-medium text-4xl">
            {t("Videodarslar")}
          </h3>
          <span className="text-[28px] font-normal">
            {t(
              "Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.",
            )}
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-[#009688] font-medium text-4xl">{t("Tasks")}</h3>
          <span className="text-[28px] font-normal">
            {t(
              "Test tasks are given at the end of the module. Only students who successfully pass the test will be able to access the lessons in the next module.",
            )}
          </span>
        </div>
      </div> */}

      <div>
        <h2>User: {user?.address}</h2>
      </div>

      <div className=" mt-10">
        <h1 className="font-bold text-3xl text-center pb-10">
          {course?.name_uz}
        </h1>
        <p
          className="text-base"
          dangerouslySetInnerHTML={{
            __html: course?.[`description_${i18n?.language}`]
              ?.replace(/\\n/g, "")
              ?.replace(/\\"/g, '"'),
          }}
        />
      </div>
    </div>
  );
};

export default Brief;
