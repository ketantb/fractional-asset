import axios from "./axios";

export const cloudinaryImgUpload = async (file) => {
    let url = '';
    const imgData = new FormData();
    imgData.append("file", file);
    imgData.append("upload_preset", 'fractionalasset');
    await axios.post('https://api.cloudinary.com/v1_1/cubagoacloudinary/image/upload', imgData)
        .then((resp) => {
            url = resp.data.url;
        })
        .catch((err) => {
            url = err
        });
    return url;
};

