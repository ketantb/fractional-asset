// App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // console.log('response', res.data);
      setImages(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <h1>Upload Images</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="images" multiple onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {images.map((image, index) => (
        <img key={index} src={URL.createObjectURL(image)} alt="" width="200" />
      ))}
    </div>
  );
}

export default ImageUploader;
