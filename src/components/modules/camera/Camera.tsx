import { useEffect, useState } from "react";

function Camera(): JSX.Element {

  const [fileImage, setFileImage] = useState<File>();

  useEffect(() => {
    if(fileImage){
      const image = document.getElementById("capturedImage") as HTMLImageElement;
      const reader = new FileReader();

      reader.onload = function(e: ProgressEvent<FileReader>) {
        if (e.target?.result) {
          image.src = e.target.result.toString();
        }
      };

      reader.readAsDataURL(fileImage);
    }
  }, [fileImage]);

  return (
    <div className={`p-4`}>
      <form>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Sale Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Fill order information.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="invoice-number" className="block text-sm font-medium leading-6 text-gray-900">
                Invoice number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="invoice-number"
                  id="invoice-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="store" className="block text-sm font-medium leading-6 text-gray-900">
                Store
              </label>
              <div className="mt-2">
                <select
                  id="store"
                  name="store"
                  autoComplete="store-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Rama 2</option>
                  <option>Siam</option>
                  <option>Rama 3</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Capture barcode image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                   onClick={() => {

                     const input = document.createElement("input");

                     // Set the attributes
                     input.type = "file";
                     input.accept = "image/*";
                     input.capture = "environment";
                     input.id = "cameraInput";
                     input.addEventListener("change", function(event) {
                       const file = (event.target as HTMLInputElement).files?.[0];
                       setFileImage(file);
                     });

                     input.click();
                   }}>

                {
                  fileImage ? <img src="" alt="Captured Image" id="capturedImage" /> :
                    <div className="text-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Open camera</span>
                        </label>
                      </div>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Camera;
