import PropTypes from 'prop-types';

function TrackList({ data }) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    );
}

TrackList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default TrackList;
