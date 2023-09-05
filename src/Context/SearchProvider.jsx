import { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useDebounce from '~/hook/useDebounce';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchType, setSearchType] = useState('tracks');
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const debounceValue = useDebounce(searchValue, 700);
    const [offset, setOffset] = useState();
    const limit = 10;

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
                    type: searchType,
                    offset: offset,
                    limit: limit,
                },
                headers: {
                    'X-RapidAPI-Key': '5d490ea77amsh1c27755ac3b1a24p136b27jsnea8e99fb0bdf',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                },
            };
            try {
                const response = await axios.request(options);
                const results = response.data[`${searchType}s`]?.items || [];
                console.log('🚀 :', results);

                if (offset === 0) {
                    setSearchResults(results);
                } else {
                    setSearchResults((prevResults) => [...prevResults, ...results]);
                }
                setOffset(offset + limit);

                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
                setSearchResults(null);
            }
        },
        [debounceValue, searchType],
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
