import classNames from 'classnames/bind';
import styles from '../Admin/Admin.module.scss';
import category from '../../assets/images/category.png';
import idol from '../../assets/images/idol.png';
const cx = classNames.bind(styles);
function Admin() {
    // Lấy ngày tháng năm hiện tại
    const currentDate = new Date();
    
    // Lấy ngày
    const day = currentDate.getDate();

    // Lấy tháng (lưu ý rằng tháng trong JavaScript bắt đầu từ 0, nên bạn có thể cộng thêm 1 để lấy tháng thực tế)
    const month = currentDate.getMonth() + 1;

    // Lấy năm
    const year = currentDate.getFullYear();

    return (
        <div className={cx('home-product', 'grid__column-10')}>
            <div className={cx('grid__row')}>
                <div className={cx('grid__column-2-4')}>
                    <div className={cx('card')}>
                        <a href="/admin/category" className={cx('card__item')}>
                            <img src={category} alt="category"></img>
                            <div className={cx('info')}>
                                <h3>Category</h3>
                            </div>
                            <div className={cx('origin')}>
                                <h4>
                                    {day}/{month}/{year}
                                </h4>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={cx('grid__column-2-4')}>
                    <div className={cx('card')}>
                        <a href="/admin/idol" className={cx('card__item')}>
                            <img src={idol} alt="idol"></img>
                            <div className={cx('info')}>
                                <h3>Idol</h3>
                            </div>
                            <div className={cx('origin')}>
                                <h4>
                                    {day}/{month}/{year}
                                </h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
