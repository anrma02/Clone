import PropTypes from 'prop-types';

function GenresList({ data }) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>{item.data.name}</div>
            ))}
        </div>
    );
}

GenresList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default GenresList;
