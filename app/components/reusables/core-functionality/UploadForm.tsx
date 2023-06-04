import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

type formProps = {
  len?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function UploadForm({ len, onChange }: formProps) {
  return (
    <div className="w-full  mx-auto  flex flex-col justify-start items-center text-gray-500">
      <label
        htmlFor="filePicker"
        className="w-full text-center hover:cursor-pointer bg-gray-100  p-10 outline-none border-2 border-gray-300 border-dashed   text-medium flex flex-col justify-start items-center "
      >
        <h2 className="  font-extrabold tracking-wider text-2xl">
          {len && len > 0 ? "Add Images" : "Select Images"}
        </h2>
        <FaCloudUploadAlt className="text-xl text-gray-500 " />
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
