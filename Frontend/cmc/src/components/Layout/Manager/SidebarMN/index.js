import classNames from 'classnames/bind';
import styles from './SidebarMN.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrescriptionBottle, faCircleUser } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function SidebarMN() {
    return (
        <div className={cx('sidebar', 'grid__column-2')}>
            <div className={cx('inner')}>
                <div className={cx('sidebar-title')}>
                    <a href="/admin">Manager</a>
                </div>
                <ul className={cx('list-sidebar')}>
                    <li className={cx('list-sidebar-item')}>
                        <a href="/admin/category" className={cx('list-sidebar-item-link', 'list-sidebar-item-link-1')}>
                            <FontAwesomeIcon icon={faPrescriptionBottle} />
                            <p>Category</p>
                        </a>
                    </li>
                    <li className={cx('list-sidebar-item')}>
                        <a href="/admin/idol" className={cx('list-sidebar-item-link')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCircleUser} />
                            <p>Idol</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarMN;
