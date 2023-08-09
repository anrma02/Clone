import { useContext } from 'react';
import { SearchContext } from '~/Context/SearchProvider';

function Search() {
    const { searchResults, searchValue, handleSearch, searchType, setSearchType } = useContext(SearchContext);
    const handleTypeChange = (event) => {
        setSearchType(event.target.value);
        handleSearch();
    };

    return (
        <div className="text-red-800">
            {searchValue && (
                <select value={searchType} onChange={handleTypeChange}>
                    <option value="multi">Multi</option>
                    <option value="track">Track</option>
                    <option value="album">Album</option>
                    <option value="artist">Artist</option>
                    <option value="playlist">Playlist</option>
                </select>
            )}
            <h2>Search Results</h2>
            {Array.isArray(searchResults) &&
                searchResults.map((item, index) => (
                    <div key={index.id}>
                        <h3>{item.name}</h3>
                    </div>
                ))}
        </div>
    );
}

export default Search;
