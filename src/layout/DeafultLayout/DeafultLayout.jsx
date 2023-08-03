import PropTypes from 'prop-types';

import './DeafultLayout.scss';

import Slidebar from '../Components/Slidebar/Slidebar';
function DefaultLayout({ children }) {
    return (
        <div className="containers">
            <Slidebar />
            <div className=" ">
                <div className="">{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
