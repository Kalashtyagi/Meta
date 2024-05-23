import React, { useState } from 'react';

const ImageSize = () => {
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    // Check if file size exceeds 5kb
    if (file.size > 5 * 1024) { // 5kb = 5 * 1024 bytes
      setErrorMessage('Image size exceeds 5kb limit.');
      return;
    }

    // Read the image file
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    // Here you can send the image data to your API for uploading
    // Example:
    // fetch('your-upload-api-url', {
    //   method: 'POST',
    //   body: image,
    //   headers: {
    //     'Content-Type': 'image/jpeg', // Adjust content type based on your requirements
    //   },
    // })
    // .then(response => {
    //   // Handle response
    // })
    // .catch(error => {
    //   // Handle error
    // });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '200px' }} />}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageSize;
