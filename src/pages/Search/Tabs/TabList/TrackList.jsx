import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPlay } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

import './Tablist.scss';

function formatTimeComponent(timeComponent) {
    return timeComponent.toString().padStart(2, '0');
}

function millisecondsToMinutesAndSeconds(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);
    return `${minutes}:${formatTimeComponent(seconds)}  `;
}

function TrackList({ data }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="main">
            <div className="tables">
                <div className="table-grid">
                    <div>#</div>
                    <div> Title</div>
                    <div> Album</div>
                    <Tippy
                        placement="top-start"
                        content="Times"
                        className="text-white text-sm  "
                        offset={[60, 0]}
                        delay={[10, 10]}
                    >
                        <div className="flex justify-end items-center w-[120px]">
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                    </Tippy>
                </div>
            </div>
            <div className="margin"></div>
            <div className="px-[30px]">
                {data.map((item, index) => (
                    <div
                        key={index.id}
                        className={`table-grid2 ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex text-[17px] text-[#b3b3b3]">
                            {hoveredIndex === index ? (
                                <div>
                                    <Tippy
                                        // placement="top-start"
                                        content={
                                            <div className="flex items-center text-white text-[14px]">
                                                Play {item.data?.name} by {item.data.artists.items[0].profile?.name}
                                            </div>
                                        }
                                        // offset={[-20, 0]}
                                        delay={[10, 10]}
                                    >
                                        <FontAwesomeIcon className=" " icon={faPlay} />
                                    </Tippy>
                                </div>
                            ) : (
                                index + 1
                            )}
                        </div>
                        <div className="flex">
                            <img
                                className="w-[40px] h-[40px] "
                                src={item.data.albumOfTrack?.coverArt?.sources[1].url}
                                alt=""
                            />
                            <div className="ml-[16px]">
                                <div className="flex items-center font-semibold "> {item.data?.name}</div>
                                <span className="flex items-center text-[14px] text-[#B3B3B3] font-medium ">
                                    {item.data.artists?.items[0]?.profile?.name}
                                </span>
                            </div>
                        </div>
                        <div className="flex text-[#B3B3B3] font-medium">{item.data.albumOfTrack?.name}</div>
                        <div className="flex justify-end w-[130px] text-[#B3B3B3] font-medium">
                            {millisecondsToMinutesAndSeconds(item.data.duration?.totalMilliseconds)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

TrackList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default TrackList;
