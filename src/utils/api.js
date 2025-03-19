import axios from 'axios'

export const BASE_URL = 'https://www.googleapis.com/youtube/v3'

const options = {
    method: 'GET',
    params: {
        part: 'snippet',
        maxResults: '45',
        type: 'video',
        key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`
    },
}

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    
    return data
}
