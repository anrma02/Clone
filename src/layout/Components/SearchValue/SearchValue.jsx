import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { useContext, useRef } from 'react';

import '../Header/Header.scss';
import { SearchContext } from '~/Context/SearchProvider';

function SearchValue() {
    const { setSearchResults, searchValue, loading, setSearchValue, handleSearch } = useContext(SearchContext);
    const location = useLocation();
    const inputRef = useRef();
    const isSearchPage = location.pathname === '/search';

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
        handleSearch();
    };
    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
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
                                    handleSearch();
                                }}
                            >
                                <input
                                    ref={inputRef}
                                    onChange={handleChange}
                                    value={searchValue}
                                    type="text"
                                    className="search"
                                    placeholder="What do you want to search for?"
                                />
                            </form>
                        </div>
                        <div className="icon-search">
                            <span>
                                <FontAwesomeIcon className="text-white " icon={faSearch} />
                            </span>
                        </div>
                        <div className="icon-clear">
                            {!!searchValue && !loading && (
                                <button onClick={handleClear}>
                                    <FontAwesomeIcon className="text-white" icon={faXmark} />{' '}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchValue;
