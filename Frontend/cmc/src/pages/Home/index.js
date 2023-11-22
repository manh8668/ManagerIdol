import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import IdolService from '../../services/IdolService';
import CategoryService from '../../services/CategoryService';
const cx = classNames.bind(styles);
function Home() {
    const [idol, setIdol] = useState([]);
    const [category, setCategory] = useState([]);
    // const handleIdolClick = (name) => {
    //     // Chuyển hướng đến tuyến đường
    //     navigate(`/home/information/${name}`);
    // };
    useEffect(() => {
        CategoryService.getCategoryList().then((idolResponse) => {
            setCategory(idolResponse.data);
        });

        IdolService.getIdolList().then((idolResponse) => {
            setIdol(idolResponse.data);
        });
    }, []);

    // Hàm để lấy năm từ chuỗi ngày tháng năm
    const getYearFromBirthday = (birthday) => {
        const birthDate = new Date(birthday);
        return birthDate.getFullYear();
    };
    return (
        <div className={cx()}>
            {category.map((cate) => (
                <div key={cate.id} className={cx('title', 'grid__column-10')}>
                    {cate.name}
                    <div className={cx()}>
                        <div className={cx('card', 'grid__row')}>
                            {idol &&
                                idol
                                    .filter((ids) => ids.category && ids.category.id === cate.id)
                                    .map((ids) => (
                                        <a
                                            href={`/home/information/${ids.category.name}/${ids.id}`}
                                            key={ids.id}
                                            className={cx('card__new', 'grid__column-2-4')}
                                        >
                                            <img src={ids.image} alt={ids.name} />
                                            <div className={cx('info')}>
                                                <h3>{ids.name}</h3>
                                            </div>
                                        </a>
                                    ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
