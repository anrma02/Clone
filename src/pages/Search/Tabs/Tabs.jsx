/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import './Tabs.scss';
function Tabs({ tabs, onChange, activeTab }) {
    return (
        <div className="px-6">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`tab ${activeTab === index ? 'active' : ''}`}
                    onClick={() => {
                        onChange(index);
                    }}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            // Define other properties of each tab object here
        }),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Tabs;
