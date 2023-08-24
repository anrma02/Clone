import PropTypes from 'prop-types';

function AlbumsList({ data }) {
    return (
        <div>
            {data.map((album, index) => (
                <div key={index}>
                    <h2>{album.data.name}</h2>
                    {/* Other album information */}
                </div>
            ))}
        </div>
    );
}

AlbumsList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default AlbumsList;
