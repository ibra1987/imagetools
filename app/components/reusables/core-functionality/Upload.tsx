"use client";
import { useEffect, useState } from "react";
import appStore from "@/app/state/appState";
import UploadForm from "./UploadForm";
import UploadedImages from "./UploadedImages";
import axios from "axios";
import Notification from "../Notification";
// export const imageFormats = [
//   "PNG",
//   "JPG",
//   "GIF",
//   "BLP",
//   "TIFF",
//   "BMP",
//   "DDS",
//   "DIB",
//   "EPS",
//   "ICNS",
//   "ICO",
//   "IM",
//   "MSP",
//   "CSX",
//   "WEBP",
//   "TGA",
//   "PPM",
// ];
function Upload({
  tool,
  targetFormat,
  originalFormat,
}: {
  tool: string;
  targetFormat?: string;
  originalFormat?: string;
}) {
  const appState = appStore();
  const [deleteEvent, setDeleteEvent] = useState(false);
  const [imagesUris, setImagesUris] = useState<string[]>([]);
  const [downloadLink, setDownloadLink] = useState("");
  const [quality, setQuality] = useState(80);
  // const [targetFormat, setTargetFormat] = useState("PNG");
  useEffect(() => {
    if (
      (appState.uploadedImages && appState.uploadedImages.length > 0) ||
      deleteEvent
    ) {
      appState.uploadedImages?.map((image) =>
        setImagesUris((prev) => [...prev, URL.createObjectURL(image)])
      );
    }

    return () => {
      imagesUris.every((imageUri) => URL.revokeObjectURL(imageUri));
      setDeleteEvent(false);

      return;
    };
  }, [appState.uploadedImages?.length]);
  useEffect(() => {
    imagesUris?.every((imageUri) => URL.revokeObjectURL(imageUri));
    appState.setUploadedImages([]);
  }, []);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteEvent(false);
    appState.setUploadedImages([]);
    setDownloadLink("");

    if (e.target.files) {
      if ([...e.target.files].length > 20) {
        appState.setError(true, "You can only upload 2 images");
      }
      if (tool === "img-converter") {
        let fileExtension;
        const rightType = [...e.target.files].every((file: File) => {
          if (file.name.split(".")[1] === "jpeg") {
            fileExtension = "jpg";
          } else {
            fileExtension = file.name.split(".")[1].toLowerCase();
          }
          return fileExtension === originalFormat;
        });

        if (!rightType) {
          appState.setError(true, `Please select only ${originalFormat} files`);
          return;
        }
      }
      if (!appState.error) {
        const first20Elements = [...(e.target.files || [])].slice(0, 21);
        appState.setUploadedImages(first20Elements);
      }
    }
  };
  //cancell

  const cancel = () => {
    appState.setUploadedImages([]);
    appState.setDownloadLinks([]);
    appState.reset();
    imagesUris.every((uri) => URL.revokeObjectURL(uri));
    setImagesUris([]);
  };
  const removeImage = (image: File) => {
    setDeleteEvent(true);
    const remainingImages = appState.uploadedImages?.filter(
      (img: File) => img.name !== image.name
    );

    appState.setUploadedImages(remainingImages || []);
  };
  // image background removal
  const requestBgRemover = async () => {
    appState.setLoading(true);
    setDownloadLink("");
    const formData = new FormData();
    if (!appState.uploadedImages || appState.uploadedImages.length === 0) {
      appState.setError(true, "No file selected");
      return;
    }
    appState.uploadedImages.map((image: File) => {
      formData.append("userImages", image, image.name);
    });
    try {
      const response = await axios.post("/api/remove-background", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success === "ok") {
        appState.setLoading(false);
        setDownloadLink(response.data.link);
        appState.setUploadedImages([]);
      }
    } catch (error: any) {
      appState.setLoading(false);
      console.log(error.message);
    }
  };

  //image conversion

  const requestImgConverter = async () => {
    appState.setLoading(true);
    setDownloadLink("");
    const formdata = new FormData();
    if (!appState.uploadedImages || appState.uploadedImages.length === 0) {
      appState.setError(true, "no file selected");
      return;
    }
    appState.uploadedImages.map((image) =>
      formdata.append("userImages", image, image.name)
    );
    targetFormat === "JPG" ? (targetFormat = "JPEG") : targetFormat;

    targetFormat && formdata.append("target_format", targetFormat);
    try {
      const response = await axios.post("/api/convert-image", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success === "ok") {
        appState.setLoading(false);
        setDownloadLink(response.data.link);
      }
    } catch (error: any) {
      appState.setLoading(false);
      console.log(error);
    }
  };

  // image compression
  const requestImgCompressor = async () => {
    appState.setLoading(true);
    setDownloadLink("");
    const formdata = new FormData();
    if (appState.uploadedImages && appState.uploadedImages.length > 0) {
      appState.uploadedImages.map((image) =>
        formdata.append("userImages", image, image.name)
      );
      formdata.append("quality", quality.toString());
      try {
        const response = await axios.post("/api/compress-image", formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.success === "ok") {
          appState.setLoading(false);
          setDownloadLink(response.data.link);
        }
      } catch (error: any) {
        appState.setLoading(false);
        console.log(error.message);
      }
    }
  };
  return (
    <div className="w-11/12 my-4 pb-20">
      <Notification
        error={appState.error}
        success={appState.success}
        message={appState.message}
        reset={appState.reset}
      />

      <UploadForm onChange={onChange} len={appState.uploadedImages?.length} />
      {tool === "img-compressor" && (
        <div className="w-11/12 md:w-2/5 mx-auto my-4 p-2 bg-blue-50 space-x-4 flex justify-evenly items-center">
          <label htmlFor="quality">Quality:</label>
          <input
            type="range"
            name="quality"
            value={quality}
            onChange={(e) => setQuality(+e.target.value)}
          />
          <span>{quality}</span>
        </div>
      )}
      {/* {tool === "img-converter" && (
        <div className="w-11/12 md:w-2/5 mx-auto my-4 flex justify-evenly items-center">
          <label htmlFor="format">Select Target Format :</label>
          <select
            name="format"
            value={targetFormat}
            className="p-2 w-1/2 border outline-none  text-sm"
            onChange={(e) => setTargetFormat(e.target.value)}
          >
            {imageFormats.map((format: string, index: number) => {
              return <option key={format + "-" + index}>{format}</option>;
            })}
          </select>
        </div>
      )} */}
      {appState.uploadedImages && appState.uploadedImages.length > 0 && (
        <UploadedImages
          cancel={cancel}
          tool={tool}
          downloadLink={downloadLink}
          images={appState.uploadedImages}
          removeImage={removeImage}
          loading={appState.loading}
          submit={
            tool === "bg-remover"
              ? requestBgRemover
              : tool === "img-compressor"
              ? requestImgCompressor
              : tool === "img-converter"
              ? requestImgConverter
              : () => {}
          }
        />
      )}
    </div>
  );
}

export default Upload;
