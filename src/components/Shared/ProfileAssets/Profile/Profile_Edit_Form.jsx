import React from "react";
import InputLogin from "../../../Ui/inputs/InputLogin";
import Select_Wrapper from "../../../Ui/selects/Select_Wrapper";
import ImageUpload from "../../../Ui/imageUpload/Image_Upload_Edit";

const Profile_Edit_Form = ({ country, city }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-6">
          Edit Your Profile
        </h2>

        <form
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="flex flex-col">
            <InputLogin
              type="text"
              htmlFor="name"
              name="name"
              classNameInput="rounded-md border px-4 py-2"
              classNameLabel="mb-1 font-medium text-gray-700"
              labelText="Full Name"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <InputLogin
              type="email"
              htmlFor="email"
              name="email"
              classNameInput="rounded-md border px-4 py-2"
              classNameLabel="mb-1 font-medium text-gray-700"
              labelText="Email Address"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col md:col-span-2">
            <InputLogin
              type="tel"
              htmlFor="phone"
              name="phone"
              classNameInput="rounded-md border px-4 py-2"
              classNameLabel="mb-1 font-medium text-gray-700"
              labelText="Phone Number"
              placeholder="+994 50 123 45 67"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <Select_Wrapper
              selectClass="rounded-md border px-4 py-2"
              labelContent="Country"
              labelClass="mb-1 font-medium text-gray-700"
              country={country}
            />
          </div>

          {/* City */}
          <div className="flex flex-col">
            <Select_Wrapper
              selectClass="rounded-md border px-4 py-2"
              labelContent="City"
              labelClass="mb-1 font-medium text-gray-700"
              country={city}
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium text-gray-700" htmlFor="bio">
              Short Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Tell us a little about yourself..."
              rows={4}
              className="rounded-md border px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Website */}
          <div className="flex flex-col md:col-span-2">
            <InputLogin
              type="url"
              htmlFor="website"
              name="website"
              classNameInput="rounded-md border px-4 py-2"
              classNameLabel="mb-1 font-medium text-gray-700"
              labelText="Website (optional)"
              placeholder="https://yourwebsite.com"
            />
          </div>

          {/* Profile Image Upload */}
          <div className="md:col-span-2 flex flex-col items-center mt-4 gap-2">
            <ImageUpload
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              labelClassName="cursor-pointer rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md hover:bg-blue-600 transition"
              htmlFor="file-upload"
            />
            <p className="text-sm text-gray-500">Upload a profile picture</p>
          </div>

          {/* Save Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto rounded-lg bg-green-500 px-8 py-3 text-white font-semibold shadow-lg hover:bg-green-600 transition"
            >
              💾 Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile_Edit_Form;
