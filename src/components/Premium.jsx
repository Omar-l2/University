import React from "react";

export const Premium = ({ openPremium, onClose }) => {
  return (
    <div className=" bg-opacity-60 bg-slate-500 fixed top-0 left-0 flex items-center justify-center w-full h-full">
      <div
        className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-start text-gray-600 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wallet"
                width={52}
                height={52}
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
            </div>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              ادخل بيانات البطاقة
            </h1>
            <label
              htmlFor="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              الاسم
            </label>
            <input
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Omar"
            />
            <label
              htmlFor="email2"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              رقم البطاقة
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-credit-card"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={5} width={18} height={14} rx={3} />
                  <line x1={3} y1={10} x2={21} y2={10} />
                  <line x1={7} y1={15} x2="7.01" y2={15} />
                  <line x1={11} y1={15} x2={13} y2={15} />
                </svg>
              </div>
              <input
                id="email2"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                placeholder="XXXX - XXXX - XXXX - XXXX"
              />
            </div>
            <label
              htmlFor="expiry"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              تاريخ الانتهاء
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-event"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={5} width={16} height={16} rx={2} />
                  <line x1={16} y1={3} x2={16} y2={7} />
                  <line x1={8} y1={3} x2={8} y2={7} />
                  <line x1={4} y1={11} x2={20} y2={11} />
                  <rect x={8} y={15} width={2} height={2} />
                </svg>
              </div>
              <input
                id="expiry"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="MM/YY"
              />
            </div>
            <label
              htmlFor="cvc"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              CVC
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-info-circle"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={12} r={9} />
                  <line x1={12} y1={8} x2="12.01" y2={8} />
                  <polyline points="11 12 12 12 12 16 13 16" />
                </svg>
              </div>
              <input
                id="cvc"
                className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex items-center justify-start w-full">
              <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                أحصل
              </button>
              <button
                className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={onClose}
              >
                الغاء
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <div
onClick={onClose}
className="fixed inset-0 flex items-center justify-center"
>
<div class="relative w-full px-4 min-h-screen md:flex bg-gray-500 bg-opacity-50 md:items-center md:justify-center">
  <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 pl-0 pt-0 pb-0 relative"></div>
  <div
    onClick={(e) => {
      e.stopPropagation();
    }}
    class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 pl-0 pt-0 pb-0 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative"
  >
    <div class="md:flex w-11/12 ">
      <div class=" bg-purple-500 rounded-lg  flex flex-col items-center justify-center mx-auto w-full h-full">
        <img
          className="pl-6 pt-3 pb-3 pr-6 "
          src="../../assets/premium.png"
          alt=""
        />
        <div className="bg-white rounded-lg md:flex items-center">
          <div className=" flex flex-col items-center justify-center mx-auto w-11 h-12">
            <img src="../../assets/diamond.png" alt="" />
          </div>
          <div className=" flex flex-col items-center justify-center mx-auto pr-4">
            <div className="text-base font-bold">نسخة الذهبية</div>
            <div className="text-xs font-bold">20JD/ سنة</div>
          </div>
        </div>
        <p className="text-white text-center pl-4 pr-4 pb-3 pt-3">
          إصبح الآن مشترك في نسخة الذهبية الخاص بنا التي تدعم الترقية
          الخاصة، وتتيح لك الوصول إلى مجموعة من الدورات البرمجية المتقدمة
          التي ستحقق لك الإنجازات العالية في مجال البرمجة. الآن، بإمكانك
          الحصول على الدروس الخاصة التي تدعم تطوير مهاراتك.
        </p>
      </div>
      <div class="mt-4 md:mt-0 pt-3 md:ml-6 text-center md:text-right">
        <p class="font-bold text-lg">معلومات الدفع</p>
        <p class="text-sm text-gray-700 mt-1">البريد الالكتروني</p>
        <input type="text" placeholder="Example@gmail.com" />
        <div class="text-center md:text-right mt-4 md:flex md:justify-end">
          <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
            Delete Account
          </button>
          <button
            onClick={onClose}
            class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
    md:mt-0 md:order-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
