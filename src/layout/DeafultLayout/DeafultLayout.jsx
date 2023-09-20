import PropTypes from 'prop-types';

import './DeafultLayout.scss';
import Slidebar from '../Components/Slidebar/Slidebar';
import Header from '../Components/Header/Header';
import { SearchProvider } from '~/Context/SearchProvider';
import Footer from '../Components/Footer';
function DefaultLayout({ children }) {
    const account = true;

    return (
        <>
            <div className="containers">
                <Slidebar />
                {account ? (
                    <div className="footer">
                        <Footer />
                    </div>
                ) : (
                    <></>
                )}
                <SearchProvider>
                    <div className="wrapperss">
                        <Header />
                        <div className="wrapper-page">{children}</div>
                    </div>
                </SearchProvider>
            </div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
