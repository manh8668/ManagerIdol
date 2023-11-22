import React, { Component } from 'react';
import CategoryService from '../../services/CategoryService';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './FormCategory.module.scss';
const cx = classNames.bind(styles);
export default function AddCategory() {
    const navigatate = useNavigate();

    return <AddCategoryForm navigatate={navigatate} />;
}

class AddCategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
        };
    }
    changeId = (event) => {
        this.setState({ id: event.target.value });
    };

    changeName = (event) => {
        this.setState({ name: event.target.value });
    };

    saveCategory = (event) => {
        event.preventDefault();
        let category = {
            id: this.state.id,
            name: this.state.name,
        };
        CategoryService.addCategory(category).then((res) => {
            this.props.navigatate('/admin/category');
        });
    };
    cancel() {
        this.props.navigatate('/admin/category');
    }

    render() {
        return (
            <div className={cx('wrapper')}>
                <h2 className={cx('header')}>Add Category</h2>

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

                        <div className={cx('action')}>
                            <button className={cx('btn', 'btn-success')} onClick={this.saveCategory}>
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
