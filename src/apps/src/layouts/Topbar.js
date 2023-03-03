// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {Breadcrumb } from 'react-bootstrap';

// actions
import { showRightSidebar, changeSidebarType } from '../redux/actions';

// components
import NotificationDropdown from '../components/NotificationDropdown';

import ProfileDropdown from '../components/ProfileDropdown';
import SearchDropdown from '../components/SearchDropdown';
import TopbarSearch from '../components/TopbarSearch';
import AppsDropdown from '../components/AppsDropdown/';

// images
import profilePic from '../assets/images/users/avatar-1.jpg';
import avatar1 from '../assets/images/users/avatar-2.jpg';
import avatar2 from '../assets/images/users/avatar-4.jpg';
import logoSmDark from '../assets/images/logo_sm_dark.png';
import logoSmLight from '../assets/images/logo_sm.png';
import logo from '../assets/images/logo-light.png';

//constants
import * as layoutConstants from '../constants/layout';
import AppStore from '../pages/appstore';

// get the profilemenu
const ProfileMenus = [
    {
        label: 'My Account',
        icon: 'mdi mdi-account-circle',
        redirectTo: '#',
    },
    {
        label: 'Settings',
        icon: 'mdi mdi-account-edit',
        redirectTo: '#',
    },
    {
        label: 'Support',
        icon: 'mdi mdi-lifebuoy',
        redirectTo: '#',
    },
    {
        label: 'Lock Screen',
        icon: 'mdi mdi-lock-outline',
        redirectTo: '/account/lock-screen',
    },
    {
        label: 'Logout',
        icon: 'mdi mdi-logout',
        redirectTo: '/account/logout',
    },
];

type TopbarProps = {
    hideLogo?: boolean,
    navCssClasses?: string,
    openLeftMenuCallBack?: () => void,
    topbarDark?: boolean,
};

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps): React$Element<any> => {
    const dispatch = useDispatch();

    const [isopen, setIsopen] = useState(false);

    const navbarCssClasses = navCssClasses || '';
    const containerCssClasses = !hideLogo ? 'container-fluid' : '';

    const { layoutType, leftSideBarType } = useSelector((state) => ({
        layoutType: state.Layout.layoutType,
        leftSideBarType: state.Layout.leftSideBarType,
    }));

    return (
        <>
            <div className={classNames('navbar-custom', navbarCssClasses)}>
                <div className={containerCssClasses}>
                    {!hideLogo && (
                        <Link to="/" className="topnav-logo">
                            <span className="topnav-logo-lg">
                                <img src={logo} alt="logo" height="16" />
                            </span>
                            <span className="topnav-logo-sm">
                                <img src={topbarDark ? logoSmLight : logoSmDark} alt="logo" height="16" />
                            </span>
                        </Link>
                    )}

                    <ul className="list-unstyled topbar-menu float-end mb-0">
                        <li className="notification-list" style={{marginRight: 20 + 'px'}}>
                            <div className="col">                                
                                <Link to="/myapps">
                                    <i className="dripicons-view-apps noti-icon"></i> My Apps
                                </Link>
                            </div>
                        </li>
                        <li className="notification-list" style={{marginRight: 20 + 'px'}}>
                            <div className="col">  
                                <Link to="/appstore">
                                    <i className="dripicons-cloud noti-icon"></i> App Store
                                </Link>
                            </div>
                        </li>
                        {/* <li className="dropdown notification-list d-none d-sm-inline-block">
                            <AppsDropdown />
                        </li> */}
                        <li className="notification-list">
                            <button
                                className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none">
                                <i className="dripicons-gear noti-icon"></i>
                            </button>
                        </li>
                        {/* <li className="dropdown notification-list">
                            <ProfileDropdown
                                profilePic={profilePic}
                                menuItems={ProfileMenus}
                                username={'Dominic Keller'}
                                userTitle={'Founder'}
                            />
                        </li> */}
                    </ul>
                    {/* <TopbarSearch /> */}
                </div>
            </div>
        </>
    );
};

export default Topbar;
