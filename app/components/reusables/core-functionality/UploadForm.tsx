import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

type formProps = {
  len?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function UploadForm({ len, onChange }: formProps) {
  return (
    <div className="w-full  mx-auto  flex flex-col justify-start items-center text-gray-400">
      <label
        htmlFor="filePicker"
        className="w-full text-center hover:cursor-pointer bg-[#404040] p-10 outline-none border-2 border-gray-200 hover:bg-[#555555] transition-colors delay-75 ease-in-out border-dashed   text-medium flex flex-col justify-start items-center "
      >
        <h2 className="  font-extrabold tracking-wider text-2xl">
          {len && len > 0 ? "Add Images" : "Select Images"}
        </h2>
        <FaCloudUploadAlt className="text-2xl m-2 text-gray-400 " />
      </label>
      <input
        id="filePicker"
        className={"w-full bg-white outline-none rounded  font-medium hidden"}
        type={"file"}
        placeholder=""
        name={"filePicker"}
        onChange={(e) => onChange(e)}
        multiple={true}
      />
    </div>
  );
}

export default UploadForm;
