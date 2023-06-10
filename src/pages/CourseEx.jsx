import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components";
import { useState } from "react";

export default function CourseEx() {
  const CourseName = useParams();
  const [details, setDetails] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  );
  return (
    <>
      <Header title={`درس :  ${CourseName.id}`} category={"شرح الدرس"} />
      <div className="flex justify-center mt-8">
        <div className=" w-11/12 dark:bg-secondary-dark-bg bg-white rounded-lg shadow-lg p-6">
          <p className=" dark:text-white text-right text-xl">
            {
              details
              /* {        هذه اللغة الرائعة مصممة لتعمل على جميع أنظمة التشغيل المعروفة مثل
            ويندوز, ماك, لينكس, إندرويد إلخ.. و هي تعتبر من أقوى و أشهر لغات
            البرمجة على الإطلاق و يطلق عليها “أم اللغات” نظراً لأنها لغة قوية و
            موجودة منذ زمن طويل. تم بناء هذه اللغة بالأساس كتطوير للغة C من قبل
            Bjarne Stroustrup أثناء عمله في مختبرات Bell لتكون أطروحته في رسالة
            الدكتورا عام 1979. من ذلك الحين و حتى وقتنا الحالي تم تطوير هذه
            اللغة بشكل مستمر و اخر إصدار رسمي لها هو C++ 17. مميزات لغة ++C
            بالنسبة للمطورين لها شعبية هائلة و هناك الكثير من المراجع لمن يريد
            تعلمها. القدرة على التحكم باستخدام الذاكرة بشكل كبير. خفيفة وسريعة
            وتستهلك موارد نظام أقل مقارنة بلغات مثل جافا وبايثون. بالامكان تحويل
            كود مكتوب بلغة C لكود بلغة C++ بسهولة.} */
            }
          </p>
          <div className="flex justify-between mt-6">
            <button className=" w-1/12 text-xl px-4 py-2 bg-slate-500 text-white rounded-md">
              الرجوع
            </button>
            <button className=" w-1/12 px-4 text-xl py-2 bg-blue-500 text-white rounded-md">
              التالي
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
