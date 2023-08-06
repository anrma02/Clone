import PropTypes from 'prop-types';

import './DeafultLayout.scss';

import Slidebar from '../Components/Slidebar/Slidebar';
import Header from '../Components/Header/Header';
function DefaultLayout({ children }) {
    return (
        <div className="containers">
            <Slidebar />
            <div className=" ">
                <div className="">
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
