import axios from 'axios';

export const searchService = async function ({ debounceValue }) {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            q: debounceValue,
            type: 'multi',
            offset: '0',
            limit: '10',
            numberOfTopResults: '5',
        },
        headers: {
            'X-RapidAPI-Key': '4338a4e59amsha573be8833d39f9p11eb67jsn281f9d6dc5cc',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
};
