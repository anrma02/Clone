import PropTypes from 'prop-types';

import './DeafultLayout.scss';
import Slidebar from '../Components/Slidebar/Slidebar';
import Header from '../Components/Header/Header';
import { SearchProvider } from '~/Context/SearchProvider';
function DefaultLayout({ children }) {
    return (
        <div className="containers">
            <Slidebar />
            <SearchProvider>
                <div className="">
                    <Header />
                    {children}
                </div>
            </SearchProvider>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
