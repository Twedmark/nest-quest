"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  value?: string;
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange],
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="pghatyo0"
      options={{
        maxFiles: 1,
        sources: ["local", "url", "camera"],
      }}
    >
      {({ open }) => {
        return (
          <div
            className="
          relative
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          gap-4
          border-2
          border-dashed
          border-neutral-300
          p-20
          text-neutral-600
          transition
          hover:opacity-70
          "
            onClick={() => open?.()}
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to upload</div>
            {value && (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  alt="upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
