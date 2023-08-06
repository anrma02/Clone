import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { useEffect, useRef, useState } from 'react';

import SearchValue from '../SearchValue/SearchValue';
import './Header.scss';

function Header() {
    const account = true;
    const [visible, setVisible] = useState(false);

    const menuRef = useRef(null); // Create a ref for the menu

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setVisible(!visible);
    };

    const menu = [
        {
            id: 1,
            title: 'Account',
            to: '/acc',
        },
        {
            id: 2,
            title: 'Profile',
            to: 'profile',
        },
        {
            id: 3,
            title: 'Support',
            to: '/supp',
        },
        {
            id: 4,
            title: 'Download',
            to: '/download',
        },
        {
            id: 5,
            title: 'Setting',
            to: '/setting',
        },
        {
            id: 6,
            title: 'Logout',
            to: '/logout',
        },
    ];

    return (
        <div className="relative">
            {/* icon */}

            <div className="absolute w-[40px]  rounded-full h-[40px] left-[40px] top-5 opacity-50 bg-black">
                <FontAwesomeIcon
                    className=" absolute cursor-no-drop text-white w-[13.11px] h-[22.5px] left-[12.25px] top-[8.25px] "
                    icon={faChevronLeft}
                />
            </div>
            <div className="absolute w-[40px]  rounded-full h-[40px] left-[103px] top-5 opacity-50 bg-black">
                <FontAwesomeIcon
                    className=" absolute text-white w-[13.11px] h-[22.5px] left-[14.25px] top-[8.25px] "
                    icon={faChevronRight}
                />

                <SearchValue />
            </div>

            {/* acc */}

            {account ? (
                <div>
                    <Tippy
                        visible={visible}
                        placement="bottom"
                        render={(attr) => (
                            <div
                                ref={menuRef} // Attach the ref to the menu container
                                className="bg-[#181818] w-[200px] h-[268px] rounded-md "
                                tabIndex="-1"
                                {...attr}
                            >
                                {menu.map((item) => (
                                    <ul key={item.to} className="p-1 overflow-y-auto ">
                                        <Link to={item.to}>
                                            <li className="w-full flex items-center h-[40px] text-[16px] hover:bg-[#3E3E3E]  font-medium text-[#FEFEFE] pl-2 ">
                                                {item.title}
                                            </li>
                                        </Link>
                                    </ul>
                                ))}
                            </div>
                        )}
                    >
                        <div className="p-1 rounded-full bg-[#000000cc] top-5 h-[40px] right-[42px] absolute ">
                            <img
                                onClick={handleClick}
                                className="w-[34px] h-[34px] flex   rounded-[22px] "
                                src="https://yt3.ggpht.com/ytc/AOPolaTHPnijO_sOr1Yo96qfg4aXm7jiDW7EMFoMp_pQCA=s68-c-k-c0x00ffffff-no-rj"
                                alt="Nguyen Van A"
                            />
                        </div>
                    </Tippy>
                </div>
            ) : (
                <div>login</div>
            )}
        </div>
    );
}

export default Header;
