import { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useDebounce from '~/hook/useDebounce';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchType, setSearchType] = useState();
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const debounceValue = useDebounce(searchValue, 700);
    const [activeTab, setActiveTab] = useState(0);
    const [albumsData, setAlbumsData] = useState([]);

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
                },
                headers: {
                    'X-RapidAPI-Key': 'e344eb3d49msh3733906f6abb5dap1b5c8cjsnd7b0a7420119',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                },
            };
            try {
                const response = await axios.request(options);
                const results = response.data[`${searchType}s`]?.items || [];
                console.log('🚀 :', results);

                setSearchResults(results);

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
                activeTab,
                setActiveTab,
                albumsData,
                setAlbumsData,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
SearchProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
