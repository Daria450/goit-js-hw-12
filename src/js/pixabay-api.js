import axios, { isCancel, AxiosError } from 'axios';




export function searchImages(searchedImage) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: "48899648-ccb58b22bf2a70621fef2a532",
        q: searchedImage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    const url = `${BASE_URL}?${params}`;
    return axios(url);
}

