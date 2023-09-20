import PropTypes from 'prop-types';

function PodcastList({ data }) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <div>{item.data.name}</div>
                    <p>MediaType: {item.data.mediaType}</p>
                </div>
            ))}
        </div>
    );
}

PodcastList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default PodcastList;
