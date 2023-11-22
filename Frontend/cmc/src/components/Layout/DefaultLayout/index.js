import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function DefaultLayout({ Children }) {
    const [show, setShow] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container', 'grid')}>
                <Sidebar />
                <div className={cx('content')}>{Children}</div>
            </div>
            <div className={cx('main-action')}>
                <button onClick={() => setShow(!show)} className={cx('action')}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {show && (
                    <div className={cx('action-list')}>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/tranducmanh6789">
                                    <FontAwesomeIcon className={cx('face')} icon={faFacebook} />
                                    <p>Facebook</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon className={cx('mess')} icon={faFacebookMessenger} />
                                    <p>Messenger</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon className={cx('call')} icon={faPhone} />
                                    <p>Call</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DefaultLayout;
