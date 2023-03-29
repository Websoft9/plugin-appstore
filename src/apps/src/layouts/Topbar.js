// @flow
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
// components


// images
import logoSM from '../assets/images/logo-sm.svg';
import logo from '../assets/images/logo.svg';

type TopbarProps = {
    hideLogo?: boolean,
    navCssClasses?: string,
    openLeftMenuCallBack?: () => void,
    topbarDark?: boolean,
};

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps): React$Element<any> => {
    const navbarCssClasses = navCssClasses || '';
    const containerCssClasses = !hideLogo ? 'container-fluid' : '';

    return (
        <>
            <div className={classNames('navbar-custom', navbarCssClasses)}>
                <div className={containerCssClasses}>
                    {!hideLogo && (
                        <Link to="/" className="topnav-logo">
                            <span className="topnav-logo-lg">
                                <img src={logo} alt="logo" width="99" />
                            </span>
                            <span className="topnav-logo-sm">
                                <img src={logoSM} alt="logo" height="24" />
                            </span>
                        </Link>
                    )}
                    <ul style={{
                        display: "flex", justifyContent: "flex-end", flexDirection: "row",
                        alignItems: "center", minHeight: "70px", fontSize: "16px", listStyle: "none",
                        marginBottom: "0px"
                    }}>
                        <li style={{ margin: "0 10px" }}>
                            <Link to="/terminal" style={{ color: "#428bca" }}>
                                <i className="dripicons-cloud-download"></i>{' Terminal'}
                            </Link>
                        </li>
                        <li style={{ margin: "0 10px" }}>
                            <Link to="/myapps" style={{ color: "#428bca" }}>
                                <i className="dripicons-view-apps"></i><span>{' My Apps'}</span>
                            </Link>
                        </li>
                        <li style={{ margin: "0 10px" }}>
                            <Link to="/appstore" style={{ color: "#428bca" }}>
                                <i className="dripicons-cloud-download"></i>{' App Store'}
                            </Link>
                        </li>

                        <li>
                            <button
                                className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none" style={{ color: "#428bca" }}>
                                <i className="dripicons-gear noti-icon"></i>{' '}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Topbar;
