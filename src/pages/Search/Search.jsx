import { useContext, useState } from 'react';

import './Search.scss';
import { SearchContext } from '~/Context/SearchProvider';
import Tabs from './Tabs/Tabs';
import ArtistList from './Tabs/TabList/ArtistList';
import AlbumsList from './Tabs/TabList/AlbumsList';
import PlayList from './Tabs/TabList/PlayList';
import TrackList from './Tabs/TabList/TrackList';
import PodcastList from './Tabs/TabList/PodcastList';
import UserList from './Tabs/TabList/UserList';
import GenresList from './Tabs/TabList/Genres';

function Search() {
    const { searchResults, searchValue, searchType, setSearchType } = useContext(SearchContext);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { id: 1, label: 'Songs', value: 'track' },
        { id: 2, label: 'Artists', value: 'artist' },
        { id: 3, label: 'Albums', value: 'album' },
        { id: 4, label: 'Podcast & Shows', value: 'podcast' },
        { id: 5, label: 'Profiles', value: 'user' },
        { id: 6, label: 'Playlists', value: 'playlist' },
        { id: 7, label: 'Genres & Moods', value: 'genre' },
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
                        <div>
                            {searchType === 'artist' && <ArtistList data={searchResults} />}
                            {searchType === 'album' && <AlbumsList data={searchResults} />}
                            {searchType === 'playlist' && <PlayList data={searchResults} />}
                            {searchType === 'track' && <TrackList trackData={searchResults} />}
                            {searchType === 'podcast' && <PodcastList data={searchResults} />}
                            {searchType === 'user' && <UserList data={searchResults} />}
                            {searchType === 'genre' && <GenresList data={searchResults} />}
                        </div>
                    </div>
                </div>
            )}

            <h2>Search Results</h2>
        </div>
    );
}

export default Search;
