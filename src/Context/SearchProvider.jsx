import { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useDebounce from '~/hook/useDebounce';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchType, setSearchType] = useState('multi');
    const [loading, setLoading] = useState(false);

    const [searchValue, setSearchValue] = useState('');

    const debounceValue = useDebounce(searchValue, 700);
    const handleSearch = useCallback(
        async function () {
            if (!debounceValue.trim()) {
                setSearchResults([]);
                return;
            }
            setLoading(true);
            const options = {
                method: 'GET',
                url: 'https://spotify23.p.rapidapi.com/search/',
                params: {
                    q: debounceValue,
                    type: 'albums',
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
                const results = response.data.albums?.items || [];
                // setAvailableTypes(response.data.types);

                console.log(results);

                console.log('🚀 setSearchResults:', setSearchResults(results));

                setSearchResults(results);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
                setSearchResults(null);
            }
        },
        [debounceValue],
    );

    useEffect(() => {
        handleSearch();
    }, [handleSearch]);

    return (
        <SearchContext.Provider
            value={{
                searchResults,
                setSearchResults,
                searchType,
                setSearchType,
                loading,
                setLoading,
                searchValue,
                setSearchValue,
                handleSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
SearchProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
