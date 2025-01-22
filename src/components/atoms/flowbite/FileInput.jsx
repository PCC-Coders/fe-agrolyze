import {FileInput, Label} from "flowbite-react";
import {LuCloudUpload} from "react-icons/lu";

export function FileInputFlowbite({handleFileChange}) {
  return (
    <div className='flex w-full items-center justify-center'>
      <Label
        htmlFor='dropzone-file'
        className='flex h-[400px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-agro-green bg-agro-dark-green '
      >
        <div className='flex flex-col items-center justify-center pb-6 pt-5'>
          <LuCloudUpload className='text-6xl text-gray-400' />
          <p className='mb-2 text-sm text-gray-400 '>
            Seret atau letakkan file disini
          </p>
          <p className='text-xs text-gray-400'>PNG, JPG, atau JPEG</p>
        </div>
        <input
          type='file'
          id='dropzone-file'
          accept='image/*'
          onChange={handleFileChange}
          className='mb-4 rounded-lg bg-agro-green'
        />
      </Label>
    </div>
  );
}
