import { useContext, useState } from 'react';

import './Search.scss';
import { SearchContext } from '~/Context/SearchProvider';
import Tabs from './Tabs/Tabs';
import ArtistList from './Tabs/ArtistList';
import AlbumsList from './Tabs/AlbumsList';
import PlayList from './Tabs/PlayList';
import TrackList from './Tabs/TrackList';
import PodcastList from './Tabs/PodcastList';
import UserList from './Tabs/UserList';

function Search() {
    const { searchResults, searchValue, searchType, setSearchType } = useContext(SearchContext);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { id: 1, label: 'Nghệ sĩ', value: 'artist' },
        { id: 2, label: 'Bài hát', value: 'track' },
        { id: 3, label: 'Album', value: 'album' },
        { id: 4, label: 'Podcast và chương trình', value: 'podcast' },
        { id: 5, label: 'Playlist', value: 'playlist' },
        { id: 6, label: 'Hồ sơ', value: 'user' },
    ];

    return (
        <div className="text-red-800">
            {searchValue && (
                <div className="tab">
                    <div className="tab-grid">
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
                </div>
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
