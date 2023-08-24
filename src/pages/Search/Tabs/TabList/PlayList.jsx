import PropTypes from 'prop-types';

function PlayList({ data }) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>{item.data.name}</div>
            ))}
        </div>
    );
}

PlayList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default PlayList;
