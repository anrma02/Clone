import PropTypes from 'prop-types';

function TrackList({ trackData }) {
    return (
        <div>
            {trackData.map((item, index) => (
                <div key={index}>{item.data.name}</div>
            ))}
        </div>
    );
}

TrackList.propTypes = {
    trackData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default TrackList;
