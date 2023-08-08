import { useContext } from 'react';
import { SearchContext } from '~/Context/SearchProvider';

function Search() {
    const { searchResults, availableTypes, searchType, setSearchType, handleSearch } = useContext(SearchContext);

    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
        console.log(setSearchType(e.target.value));
    };
    return (
        <div className="text-red-900">
            <select value={searchType} onChange={handleTypeChange}>
                {/* <option value="multi">multi</option> */}
                <option value="track">Track</option>
                <option value="album">Album</option>
                <option value="artist">Artist</option>
                <option value="playlist">Playlist</option>
            </select>

            {/*  */}

            {/* <select value={searchType} onChange={handleTypeChange}>
                <option value="">Select a type</option>
                {availableTypes.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select> */}

            {/*  */}

            <button onClick={handleSearch} className="text-white">
                Search
            </button>
            <div>
                <h2>Search Results</h2>
                <ul>
                    {Array.isArray(searchResults) &&
                        searchResults.map((result) => <li key={result.id}>{result.name}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Search;
