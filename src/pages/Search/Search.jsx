import { useContext } from 'react';
import { SearchContext } from '~/Context/SearchProvider';

function Search() {
    const { searchResults } = useContext(SearchContext);

    return (
        <div className="text-white">
            <h2>Search Results</h2>
            {searchResults.map((item, index) => (
                <div key={index.id}>
                    <h3>{item.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default Search;
