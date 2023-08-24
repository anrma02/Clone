import PropTypes from 'prop-types';

function UserList({ data }) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>{item.data.displayName}</div>
            ))}
        </div>
    );
}

UserList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default UserList;
