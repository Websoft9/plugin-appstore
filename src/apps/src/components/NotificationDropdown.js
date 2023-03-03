// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';

// notifiaction continer styles
const notificationContainerStyle = {
    maxHeight: '300px',
    display: 'none',
};

const notificationShowContainerStyle = {
    maxHeight: '300px',
};

type Message = {
    id: number,
    title: string,
    time?: string,
    subText: string,
    avatar?: string,
    icon?: string,
    variant?: string,
    isRead: boolean,
};

type NotificationItem = {
    day: string,
    messages: Message[],
};

type NotificationDropdownProps = {
    notifications: Array<NotificationItem>,
};

type NotificationDropdownState = {
    dropdownOpen?: boolean,
    notificationContainerStyle?: {},
};

const NotificationDropdown = (
    props: NotificationDropdownProps,
    state: NotificationDropdownState
): React$Element<any> => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationContentStyle, setNotificationContentStyles] = useState(notificationContainerStyle);

    /*
     * toggle notification-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        setNotificationContentStyles(
            notificationContentStyle === notificationContainerStyle
                ? notificationShowContainerStyle
                : notificationContainerStyle
        );
    };

    return (
        <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                variant="link"
                id="dropdown-notification"
                as={Link}
                to="#"
                onClick={toggleDropdown}
                className="nav-link dropdown-toggle arrow-none">
                <i className="dripicons-bell noti-icon"></i>
                <span className="noti-icon-badge"></span>
            </Dropdown.Toggle>
            <Dropdown.Menu align={'end'} className="dropdown-menu-animated dropdown-lg">
                <div onClick={toggleDropdown}>
                    <div className="dropdown-item noti-title px-3">
                        <h5 className="m-0">
                            <span className="float-end">
                                <Link to="/notifications" className="text-dark">
                                    <small>Clear All</small>
                                </Link>
                            </span>
                            Notification
                        </h5>
                    </div>
                    <SimpleBar className="px-3" style={notificationContentStyle}>
                        {props.notifications.map((item, i) => {
                            return (
                                <React.Fragment key={i.toString()}>
                                    <h5 className="text-muted font-13 fw-normal mt-0">{item.day}</h5>
                                    {(item.messages || []).map((message, index) => {
                                        return (
                                            <Dropdown.Item
                                                key={index + '-noti'}
                                                className={classNames(
                                                    'p-0 notify-item card shadow-none mb-2',
                                                    message.isRead ? 'read-noti' : 'unread-noti'
                                                )}>
                                                <Card.Body>
                                                    <span className="float-end noti-close-btn text-muted">
                                                        <i className="mdi mdi-close"></i>
                                                    </span>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <div
                                                                className={classNames(
                                                                    'notify-icon',
                                                                    message.variant && 'bg-' + message.variant
                                                                )}>
                                                                {message.avatar ? (
                                                                    <img
                                                                        src={message.avatar}
                                                                        className="img-fluid rounded-circle"
                                                                        alt=""
                                                                    />
                                                                ) : (
                                                                    <i className={message.icon}></i>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 text-truncate ms-2">
                                                            <h5 className="noti-item-title fw-semibold font-14">
                                                                {message.title}{' '}
                                                                {message.time && (
                                                                    <small className="fw-normal text-muted ms-1">
                                                                        {message.time}
                                                                    </small>
                                                                )}
                                                            </h5>
                                                            <small className="noti-item-subtitle text-muted">
                                                                {message.subText}
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Dropdown.Item>
                                        );
                                    })}
                                </React.Fragment>
                            );
                        })}

                        <div className="text-center">
                            <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                        </div>
                    </SimpleBar>

                    <Dropdown.Item className="text-center text-primary notify-item border-top border-light py-2">
                        View All
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default NotificationDropdown;
