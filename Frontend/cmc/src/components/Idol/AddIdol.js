import React, { Component } from 'react';
import IdolService from '../../services/IdolService';
import CategoryService from '../../services/CategoryService';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './FormIdol.module.scss';
const cx = classNames.bind(styles);

export default function AddIdol() {
    const navigate = useNavigate();
    return <AddIdolForm navigate={navigate} />;
}

class AddIdolForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            birthday: '',
            description: '',
            image: '',
            birthplace: '',
            category: { id: '01' },
            categoryList: [],
        };
    }
    changeId = (event) => {
        this.setState({ id: event.target.value });
    };
    changeName = (event) => {
        this.setState({ name: event.target.value });
    };

    changeBirthday = (event) => {
        this.setState({ birthday: event.target.value });
    };
    changeDescription = (event) => {
        this.setState({ description: event.target.value });
    };
    changeImage = (event) => {
        const file = event.target.files[0]; // Access the 'files' property, not 'file'
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    image: e.target.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };
    changeBirthplace = (event) => {
        this.setState({ birthplace: event.target.value });
    };

    changeCategory = (event) => {
        this.setState({ category: JSON.parse(event.target.value) });
        console.log({ category: JSON.parse(event.target.value) });
    };
    saveIdol = (event) => {
        // console.log(this.state.image);
        event.preventDefault();
        let idol = {
            id: this.state.id,
            name: this.state.name,
            birthday: this.state.birthday,
            description: this.state.description,
            image: this.state.image,
            birthplace: this.state.birthplace,
            category: this.state.category,
        };
        // console.log(idol);
        IdolService.addIdol(idol).then((res) => {
            // this.props.navigate('/admin/idol');
            // navigate('/admin/idol');
            window.location.href = '/admin/idol';
        });
    };

    componentDidMount() {
        CategoryService.getCategoryList().then((res) => {
            this.setState({ categoryList: res.data });
        });
    }
    cancel() {
        this.props.navigate('/admin/idol');
    }

    render() {
        return (
            <div className={cx('wrapper')}>
                <h2 className={cx('header')}>Add Idol</h2>

                <div className={cx('main')}>
                    <form>
                        <div className={cx('content')}>
                            <label>Nhập ID</label>
                            <input placeholder="Enter id" name="id" value={this.state.id} onChange={this.changeId} />
                        </div>
                        <div className={cx('content')}>
                            <label>Nhập Name</label>
                            <input
                                placeholder="Enter name"
                                name="name"
                                value={this.state.name}
                                onChange={this.changeName}
                            />
                        </div>

                        <div className={cx('content')}>
                            <label>Nhập Birthday</label>
                            <input
                                type="date"
                                placeholder="Enter birthday"
                                name="birthday"
                                value={this.state.birthday}
                                onChange={this.changeBirthday}
                            />
                        </div>

                        <div className={cx('content')}>
                            <label>Nhập Description</label>
                            <input
                                type="text"
                                placeholder="Enter description"
                                name="description"
                                value={this.state.description}
                                onChange={this.changeDescription}
                            />
                        </div>

                        <div className={cx('content')}>
                            <label>Nhập Image</label>
                            <input
                                className={cx('file')}
                                type="file"
                                placeholder="Enter image"
                                name="image"
                                // value={this.state.image}
                                onChange={this.changeImage}
                            />
                        </div>

                        <div className={cx('content')}>
                            <label>Nhập birthplace</label>
                            <input
                                placeholder="Enter birthplace"
                                name="birthplace"
                                value={this.state.birthplace}
                                onChange={this.changeBirthplace}
                            />
                        </div>

                        <div className={cx('content')}>
                            <label>Nhập Category</label>
                            <select className={cx('select')} onChange={this.changeCategory}>
                                {this.state.categoryList.map((option, index) => (
                                    <option key={index} value={JSON.stringify(option)}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={cx('action')}>
                            <button className={cx('btn', 'btn-success')} onClick={this.saveIdol}>
                                Save
                            </button>
                            <button
                                className={cx('btn', 'btn-danger')}
                                onClick={this.cancel.bind(this)}
                                style={{ margin: 10 }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
