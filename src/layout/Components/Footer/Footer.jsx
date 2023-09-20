import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.scss';
import {
    faBackwardStep,
    faComputer,
    faForwardStep,
    faList,
    faPlayCircle,
    faRetweet,
    faShuffle,
    faUpRightAndDownLeftFromCenter,
    faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="footer-tab">
                <>
                    <div className="footer-info">
                        <img src="https://i.scdn.co/image/ab67616d00001e025888c34015bebbf123957f6d" />
                        <h2>Chúng Ta Của Hiện Tại</h2>
                    </div>

                    <div className="footer-play">
                        <div className="icon-play">
                            <button>
                                <FontAwesomeIcon className="icon" icon={faShuffle} />
                            </button>
                            <button>
                                <FontAwesomeIcon className="icon" icon={faBackwardStep} />
                            </button>
                            <button>
                                <FontAwesomeIcon className="icon" icon={faPlayCircle} />
                            </button>
                            <button>
                                <FontAwesomeIcon className="icon" icon={faForwardStep} />
                            </button>
                            <button>
                                <FontAwesomeIcon className="icon" icon={faRetweet} />{' '}
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            00
                            <input
                                type="range"
                                className="progress"
                                min="0"
                                max="311"
                                step="5"
                                aria-valuetext=" "
                                value="0"
                            />
                            3
                        </div>
                    </div>

                    <div className="flex items-center">
                        <button>
                            <FontAwesomeIcon className="icon" icon={faList} />
                        </button>
                        <button>
                            <FontAwesomeIcon className="icon" icon={faComputer} />
                        </button>
                        <button>
                            <FontAwesomeIcon className="icon" icon={faVolumeUp} />
                        </button>
                        <div>
                            <input type="range" className="volume" min="0" max="1" step="0.1" value="1" />
                        </div>
                        <button>
                            {' '}
                            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                        </button>
                    </div>
                </>
            </div>
        </footer>
    );
}

export default Footer;
