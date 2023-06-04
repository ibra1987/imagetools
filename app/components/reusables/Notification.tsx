import { TiDeleteOutline } from "react-icons/ti";

type notificationProp = {
  error: boolean;
  success: boolean;
  message: string;
  reset: () => void;
};
function Notification({
  error = false,
  success = false,
  message = "",
  reset,
}: notificationProp) {
  return (
    <div
      className={
        error
          ? " bg-red-50 text-red-400" +
            " w-11/12 mx-auto p-4 my-4  flex justify-center items-center relative "
          : success
          ? " bg-green-100 text-green-300" +
            " w-11/12 p-4 my-4 flex justify-center items-center relative "
          : " "
      }
    >
      <span
        className="absolute  rounded-full  top-0 left-0 cursor-pointer hover:text-red-500"
        onClick={() => reset()}
      >
        <TiDeleteOutline className="w-6 h-6" />
      </span>
      {message}
    </div>
  );
}

export default Notification;
