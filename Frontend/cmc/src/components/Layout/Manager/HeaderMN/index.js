import styles from './HeaderMN.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images/blackpink.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function HeaderMN() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/home" className={cx('logo')}>
                    <img src={images} alt="BlackPink"></img>
                </a>
                <div className={cx('content')}>
                    <span>Chào mừng bạn đến với trang VIP</span>
                    <span className={cx('temp')}>Rất vui được gặp bạn</span>
                </div>

                <div className={cx('action')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                    <span>Đăng nhập</span>
                </div>
            </div>
        </header>
    );
}

export default HeaderMN;
