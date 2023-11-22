import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import images from '../../../../assets/images/index';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('sidebar', 'grid__column-2')}>
            <ul className={cx('list-sidebar')}>
                <li className={cx('list-sidebar-item')}>
                    <img src={images.home} alt="Home"></img>
                    <a href="/home" className={cx('list-sidebar-item-link', 'list-sidebar-item-link-1')}>
                        Dành cho bạn
                    </a>
                </li>
                <li className={cx('list-sidebar-item')}>
                    <img src={images.follow} alt="Follow"></img>
                    <a href="#" className={cx('list-sidebar-item-link')}>
                        Đang Follow
                    </a>
                </li>
                <li className={cx('list-sidebar-item')}>
                    <img src={images.khampha} alt="Follow"></img>
                    <a href="#" className={cx('list-sidebar-item-link')}>
                        Khám phá
                    </a>
                </li>
                <li className={cx('list-sidebar-item')}>
                    <img src={images.live} alt="Follow"></img>
                    <a href="#" className={cx('list-sidebar-item-link')}>
                        LIVE
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
