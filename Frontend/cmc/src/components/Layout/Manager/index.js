import HeaderMN from './HeaderMN';
import SidebarMN from './SidebarMN';
import classNames from 'classnames/bind';
import styles from './Manager.module.scss';

const cx = classNames.bind(styles);
function Manager({ Children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderMN />
            <div className={cx('container', 'grid')}>
                <SidebarMN />
                <div className={cx('content')}>{Children}</div>
            </div>
        </div>
    );
}

export default Manager;
