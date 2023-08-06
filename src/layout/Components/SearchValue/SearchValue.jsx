import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useDebounce from '~/hook/useDebounce';

function SearchValue() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const location = useLocation();
    const isSearchPage = location.pathname === '/search';

    const debounceValue = useDebounce(searchValue, 700);

    const fetchAPI = useCallback(
        async function () {
            if (!debounceValue.trim()) {
                setSearchResults([]);
                return;
            }
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
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        [debounceValue],
    );

    useEffect(() => {
        fetchAPI();
    }, [fetchAPI]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            {isSearchPage && (
                <div className="absolute left-[5rem] top-[-6px] w-[370px]">
                    <div className="flex">
                        <div className="div--search">
                            <form
                                role="search"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    fetchAPI();
                                }}
                            >
                                <input
                                    onChange={handleChange}
                                    value={searchValue}
                                    type="text"
                                    className="search"
                                    placeholder="What do you want to search for?"
                                />
                            </form>
                        </div>
                        <div className="div-search--">
                            <span>
                                <FontAwesomeIcon className="text-white" icon={faSearch} />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchValue;
