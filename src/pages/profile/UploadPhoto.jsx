import { useRef, useState } from "react";
import { convertToBase64 } from "../../utils/imageHelpers";

const UploadPhoto = ({ onGetImage }) => {
  const imagePicker = useRef();
  const [image, setImage] = useState("");

  const pickImageHandler = () => {
    imagePicker.current.click();
  };

  const pickedHandler = async (e) => {
    console.log(e.target.files);
    const selectedImage = e.target.files[0];
    const base64String = await convertToBase64(selectedImage);
    onGetImage(base64String);
    setImage(selectedImage);
  };

  const removeImage = () => {
    setImage("");
  };

  console.log(image);

  return (
    <div>
      <div>
        <input
          type="file"
          id="image"
          hidden
          onChange={pickedHandler}
          ref={imagePicker}
        />
      </div>
      <div>
        <div>
          {!image && (
            <div>
              <img src="http://via.placeholder.com/230x160" alt="Preview" />
            </div>
          )}
          {image && (
            <div>
              <img src={URL.createObjectURL(image)} alt="Preview" />
              <button type="button" onClick={removeImage}>
                X
              </button>
            </div>
          )}
        </div>
        <div>
          <button type="button" onClick={pickImageHandler}>
            UPLOAD IMAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
