import classNames from 'classnames/bind';
import styles from './InfIdol.module.scss';
import { useEffect, useState } from 'react';
import IdolService from '../../services/IdolService';
import { useParams } from 'react-router-dom';
import { Logger } from 'sass';
const cx = classNames.bind(styles);
function InfIdol() {
    const params = useParams();
    const [idol, setIdol] = useState({});
    useEffect(() => {
        const { id } = params;
        IdolService.getIdolById(id).then((idolResponse) => {
            setIdol(idolResponse.data);
        });
    }, []);
    const currentDate = new Date(Date.parse(idol.birthday));

    // Lấy ngày
    const day = currentDate.getDate();

    // Lấy tháng (lưu ý rằng tháng trong JavaScript bắt đầu từ 0, nên bạn có thể cộng thêm 1 để lấy tháng thực tế)
    const month = currentDate.getMonth() + 1;

    // Lấy năm
    const year = currentDate.getFullYear();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={idol.image} />
            </div>
            <div className={cx('info')}>
                <p className={cx('line-name')}>
                    <span>Name:</span> <span className={cx('name')}>{idol.name}</span>
                </p>
                <p className={cx('date')}>
                    <span>Birthday:</span>
                    <h4>
                        {day}/{month}/{year}
                    </h4>
                </p>
                <p>
                    <span>Country:</span> {idol.birthplace}
                </p>
                <p>
                    <span>Description:</span> {idol.description}
                </p>
            </div>
        </div>
    );
}

export default InfIdol;
