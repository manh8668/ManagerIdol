import classNames from 'classnames/bind';

import styles from './FormIdol.module.scss';
import IdolService from '../../services/IdolService';
import CategoryService from '../../services/CategoryService';
import { useNavigate, useParams } from 'react-router-dom';
import React, { Component } from 'react';

export default function UpdateIdol() {
    const navigatate = useNavigate();
    const params = useParams();
    return <UpdateIdolForm navigatate={navigatate} params={params} />;
}
const cx = classNames.bind(styles);
class UpdateIdolForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match,
            name: '',
            birthday: '',
            description: '',
            image: '',
            birthplace: '',
            category: {},
            categoryList: [],
        };
    }

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
    };
    updateIdol = (event) => {
        event.preventDefault();
        let idol = {
            id: this.props.params.id,
            name: this.state.name,
            birthday: this.state.birthday,
            description: this.state.description,
            image: this.state.image,
            birthplace: this.state.birthplace,
            category: this.state.category,
        };
        // console.log(idol);
        IdolService.updateIdol(idol).then((res) => {
            this.props.navigatate('/admin/idol');
        });
    };

    componentDidMount() {
        const { id } = this.props.params;
        CategoryService.getCategoryList().then((res) => {
            this.setState({ categoryList: res.data });
        });
        IdolService.getIdolById(id).then((res) => {
            let idol = res.data;

            this.setState({
                id: idol.id,
                name: idol.name,
                birthday: idol.birthday,
                description: idol.description,
                image: idol.image,
                birthplace: idol.birthplace,
                category: idol.category,
            });
        });
    }
    cancel() {
        this.props.navigatate('/admin/idol');
    }

    render() {
        return (
            <div className={cx('wrapper')}>
                <h2 className={cx('header')}>Update Idol</h2>

                <div className={cx('main')}>
                    <form>
                        <div className={cx('content')}>
                            <label>Nhập ID</label>
                            <input
                                disabled
                                placeholder="Enter id"
                                name="id"
                                value={this.state.id}
                                onChange={this.changeId}
                            />
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
                                {this.state.categoryList.map((option, index) =>
                                    this.state.category.name === option.name ? (
                                        <option key={index} value={JSON.stringify(option)} selected>
                                            {option.name}
                                        </option>
                                    ) : (
                                        <option key={index} value={JSON.stringify(option)}>
                                            {option.name}
                                        </option>
                                    ),
                                )}
                            </select>
                        </div>

                        <div className={cx('action')}>
                            <button className={cx('btn', 'btn-success')} onClick={this.updateIdol}>
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
