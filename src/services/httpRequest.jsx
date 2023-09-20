import axios from 'axios';

const apiUrl = 'https://spotify23.p.rapidapi.com/search/';

export const searchService = async ({ debounceValue }) => {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                q: debounceValue,
                type: 'multi',
            },
            headers: {
                'X-RapidAPI-Key': '4338a4e59amsha573be8833d39f9p11eb67jsn281f9d6dc5cc',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            },
        });

        return response;
    } catch (error) {
        console.error(error);
    }
};
