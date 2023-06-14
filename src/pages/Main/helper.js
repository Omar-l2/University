import { EventTypes, courseStatus } from "../../Constants/constants";
import gameDesign from "../../asset/games.jpeg";
import csharp from "../../asset/c.png";
import twodGames from "../../asset/twodGames.png";
import threedGames from "../../asset/threedgames.png";

export const mockEvents = [
  {
    type: EventTypes.test,
    title: "جملة Select",
    category: "قواعد البيانات",
    key: 1,
  },
  {
    type: EventTypes.mission,
    title: "تصميم واجهة متجر الكتروني",
    category: "صور الواجهة الأمامية",
    key: 2,
  },
  {
    type: EventTypes.test,
    title: "جملة if الشرطيه",
    category: "البرمجة الكينونية",
    key: 3,
  },
];

export const mockCourses = [
  {
    number: 1,
    name: "تصميم الالعاب الالكترونية",
    image: gameDesign,
    status: courseStatus.completed,
  },
  {
    number: 2,
    name: "البرمجة بلغة السي شارب",
    image: csharp,
    status: courseStatus.uncompleted,
  },
  {
    number: 3,
    name: "تطوير العاب ثنائية البعد على محرك الألعاب",
    image: twodGames,
    status: courseStatus.uncompleted,
    isClosed: true,
  },
  {
    number: 4,
    name: "تطوير العاب ثلاثية البعد على محرك الألعاب",
    image: threedGames,
    status: courseStatus.uncompleted,
    isClosed: true,
  },
];

export const lines = [
  {
    label: "قواعد البيانات",
    key: 1,
  },
  {
    label: "مطور الواجهة الأمامية",
    key: 2,
  },
  {
    label: "البرمجة الكينونية",
    key: 3,
  },
];

export const courses = [
  {
    label: "تصميم الالعاب الالكترونية",
    key: 1,
  },
  {
    label: "البرمجة بلغة السي شارب",
    key: 2,
  },
  {
    label: "تطوير العاب ثنائية البعد على محرك الألعاب",
    key: 3,
  },
  {
    label: "البرمجة الكينونية",
    key: 4,
  },
];

export const lessons = [
  {
    label: " القواعد الأساسية للغة ال #C",
    key: 1,
  },
  {
    label: " كيفية بناء التطبيق ومشاركته مع الغير",
    key: 2,
  },
  {
    label: "كيفية إنشاء المتغيرات Variables ونطاقاتها",
    key: 3,
  },
  {
    label: " كيفية إنشاء وتعريف واستخدام المصفوفات",
    key: 4,
  },
  {
    label: "إنشاء جمل شرطية IF Statement",
    key: 5,
  },
  {
    label: "كيفية استخدام الحلقات التكرارية Loop Statements",
    key: 6,
  },
];
