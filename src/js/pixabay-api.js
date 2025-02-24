import axios, { isCancel, AxiosError } from 'axios';




export async function searchImages(searchedImage, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: "48899648-ccb58b22bf2a70621fef2a532",
        q: searchedImage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '40',
        page: page,
    });
    const url = `${BASE_URL}?${params}`;
    const data = await axios(url);
    return data;
}

