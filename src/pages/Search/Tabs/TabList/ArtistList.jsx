import PropTypes from 'prop-types';

function ArtistList({ data }) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>{item.data.profile.name}</div>
            ))}
        </div>
    );
}

ArtistList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default ArtistList;
