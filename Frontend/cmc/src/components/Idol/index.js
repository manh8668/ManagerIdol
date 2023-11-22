import classNames from 'classnames/bind';
import { format } from 'date-fns';
import styles from './Idol.module.scss';
import IdolService from '../../services/IdolService';
import { useNavigate, useParams } from 'react-router-dom';
import React, { Component } from 'react';
export default function Idol() {
    const navigate = useNavigate();
    const params = useParams();
    return <GetListIdol navigate={navigate} params={params} />;
}
const cx = classNames.bind(styles);
class GetListIdol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idols: [],
        };
    }
    editIdol(id) {
        this.props.navigate(`/admin/idol/update/${id}`);
    }

    componentDidMount() {
        IdolService.getIdolList().then((res) => {
            this.setState({ idols: res.data });
            console.log(res);
        });
    }
    deleteIdol(id) {
        IdolService.deleteIdol(id).then((res) => {
            this.idols = res.data;
        });
    }
    render() {
        return (
            <div className={cx('wrapper')}>
                <h1>List Idol</h1>
                <div className={cx('inner')}>
                    <div>
                        <form>
                            <input className={cx('search')} type="text" placeholder="Enter name" />
                            <button className={cx('btn', 'btn-primary', 'btn-search')} type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                    <button
                        className={cx('btn', 'btn-success', 'btn-add')}
                        onClick={() => {
                            this.props.navigate('/admin/idol/add');
                        }}
                    >
                        Add
                    </button>
                    <div className={cx('data')}>
                        <form>
                            <table>
                                <thead>
                                    <tr>
                                        <th>IMAGE</th>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>DATE</th>
                                        <th>DESCRIPTION</th>
                                        <th>BIRTHPLACE</th>
                                        <th>CATEGORY</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.idols.map((idol) => (
                                        <tr key={idol.id}>
                                            <td>
                                                <img src={idol.image}></img>
                                            </td>
                                            <td>{idol.id}</td>
                                            <td>{idol.name}</td>
                                            <td>{format(new Date(idol.birthday), 'dd/MM/yyyy')}</td>
                                            <td className={cx('des')} >{idol.description}</td>
                                            <td>{idol.birthplace}</td>
                                            <td>{idol.category?.name}</td>
                                            <td>
                                                <button
                                                    className={cx('btn', 'btn-primary')}
                                                    onClick={() => {
                                                        this.editIdol(idol.id);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className={cx('btn', 'btn-danger')}
                                                    onClick={() => {
                                                        this.deleteIdol(idol.id);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
