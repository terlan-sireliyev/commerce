import React, { useState } from "react";

const ImageUpload = ({
  id,
  type,
  accept,
  className,
  labelClassName,
  htmlFor,
}) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <div className="max-md3:w-[540px] grid w-[960px] grid-cols-2 max-lg:w-[660px] max-md:mt-2 max-md:w-[600px] max-md:grid-cols-1 max-sm:w-[100%]">
      <div className="pt-4 max-md:text-center">
        <label htmlFor={htmlFor} className={labelClassName}>
          Choose Image
        </label>
        <input
          id={id}
          type={type}
          accept={accept}
          onChange={handleFileChange}
          className={className}
        />
      </div>

      <div className="flex justify-end max-md:mt-4 max-md:justify-center">
        {imagePreview && (
          <div className="h-[96px] w-[150px] cursor-pointer">
            <img
              src={imagePreview}
              alt="Selected"
              className="h-full w-full rounded-lg border-4 border-gray-200 shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
