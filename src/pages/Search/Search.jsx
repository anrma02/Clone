import { useContext, useState } from 'react';
import { SearchContext } from '~/Context/SearchProvider';
import Tabs from './Tabs/Tabs';
import ArtistList from './Tabs/ArtistList';
import AlbumsList from './Tabs/AlbumsList';
import PlayList from './Tabs/PlayList';
import TrackList from './Tabs/TrackList';
import PodcastList from './Tabs/PodcastList';
import UserList from './Tabs/UserList';

function Search() {
    const { searchResults, searchType, setSearchType } = useContext(SearchContext);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { id: 1, label: 'Nghệ sĩ', value: 'artist' },
        { id: 2, label: 'Album', value: 'album' },
        { id: 3, label: 'Playlist', value: 'playlist' },
        { id: 3, label: 'Bài hát', value: 'track' },
        { id: 5, label: 'Podcast', value: 'podcast' },
        { id: 6, label: 'User', value: 'user' },
    ];

    return (
        <div className="text-red-800">
            <div>
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={(index) => {
                        setActiveTab(index);
                        setSearchType(tabs[index].value);
                    }}
                    searchType={searchType}
                />
                {searchType === 'artist' && <ArtistList data={searchResults} />}
                {searchType === 'album' && <AlbumsList data={searchResults} />}
                {searchType === 'playlist' && <PlayList data={searchResults} />}
                {searchType === 'track' && <TrackList data={searchResults} />}
                {searchType === 'podcast' && <PodcastList data={searchResults} />}
                {searchType === 'user' && <UserList data={searchResults} />}
            </div>

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
