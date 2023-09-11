import { useCallback, useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './Search.module.scss';
import { SearchContext } from '~/Context/SearchProvider';
import Tabs from './Tabs/Tabs';
import ArtistList from './Tabs/TabList/ArtistList';
import AlbumsList from './Tabs/TabList/AlbumsList';
import PlayList from './Tabs/TabList/PlayList';
import TrackList from './Tabs/TabList/TrackList';
import PodcastList from './Tabs/TabList/PodcastList';
import UserList from './Tabs/TabList/UserList';
import GenresList from './Tabs/TabList/Genres';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);
function Search() {
    const { searchResults, searchValue, loading, searchType, setSearchType } = useContext(SearchContext);
    const [activeTab, setActiveTab] = useState(0);
    const [viewGenres, setViewGenres] = useState([]);

    const tabs = [
        { id: 1, label: 'Songs', value: 'track' },
        { id: 2, label: 'Artists', value: 'artist' },
        { id: 3, label: 'Albums', value: 'album' },
        { id: 4, label: 'Podcast & Shows', value: 'podcast' },
        { id: 5, label: 'Profiles', value: 'user' },
        { id: 6, label: 'Playlists', value: 'playlist' },
        { id: 7, label: 'Genres & Moods', value: 'genre' },
    ];

    const Genres = useCallback(async function () {
        const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/genre_view/',
            params: {
                id: '0JQ5DAqbMKFEC4WFtoNRpw',
                content_limit: '10',
                limit: '20',
            },
            headers: {
                'X-RapidAPI-Key': '5d490ea77amsh1c27755ac3b1a24p136b27jsnea8e99fb0bdf',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            const results = response.data.content.items;
            setViewGenres(results);

            console.log('🚀 Genres ~ results:', results);
        } catch (error) {
            console.error(error);
        }
    }, []);
    useEffect(() => {
        Genres();
    }, [Genres]);

    return (
        <>
            {searchValue ? (
                <>
                    <div className={'tab'}>
                        <div className={cx('tab-grid')}>
                            <Tabs
                                tabs={tabs}
                                activeTab={activeTab}
                                onChange={(index) => {
                                    setActiveTab(index);
                                    setSearchType(tabs[index].value);
                                }}
                                searchType={searchType}
                            />
                            <>
                                {loading ? (
                                    <Loading />
                                ) : (
                                    <div className="w-full">
                                        {searchType === 'artist' && <ArtistList data={searchResults} />}
                                        {searchType === 'album' && <AlbumsList data={searchResults} />}
                                        {searchType === 'playlist' && <PlayList data={searchResults} />}
                                        {searchType === 'track' && <TrackList data={searchResults} />}
                                        {searchType === 'podcast' && <PodcastList data={searchResults} />}
                                        {searchType === 'user' && <UserList data={searchResults} />}
                                        {searchType === 'genre' && <GenresList data={searchResults} />}
                                    </div>
                                )}
                            </>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="text-white">Browse all</h1>
                    <div className={cx('grid-table')}>
                        {viewGenres.map((item, index) => (
                            <div key={index.id}>
                                <div className={cx('grid-table-list')}>
                                    <img src={item.images[0]?.url} alt={item.images[0]?.name} />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default Search;
