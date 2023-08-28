import PropTypes from 'prop-types';

import './Tablist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

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
    return (
        <div>
            <div className="tables">
                <div className="table-grid">
                    <div>#</div>
                    <div> Title</div>
                    <div> Album</div>
                    <div>
                        <FontAwesomeIcon icon={faClock} />{' '}
                    </div>
                </div>
            </div>
            {data.map((item, index) => (
                <div key={index.id} className="table-grid">
                    <div> {index + 1}</div>
                    <div> {item.data.name}</div>
                    <div>{item.data.albumOfTrack.name} </div>
                    <div>
                        {' '}
                        <div>{millisecondsToMinutesAndSeconds(item.data.duration.totalMilliseconds)}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

TrackList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default TrackList;
