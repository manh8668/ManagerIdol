import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '../../../../assets/images/blackpink.jpg';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/home" className={cx('logo')}>
                    <img src={images} alt="BlackPink"></img>
                </a>
                <div className={cx('menu')}>
                    <ul className={cx('list-menu')}>
                        <li>
                            <a href="/home" className={cx('list-menu-item')}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a className={cx('list-menu-item')}>Tour</a>
                        </li>
                        <li>
                            <a className={cx('list-menu-item')}>Contact</a>
                        </li>
                        <li>
                            <a className={cx('list-menu-item')}>About</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>
                    <a className={cx('login')}>Login</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
