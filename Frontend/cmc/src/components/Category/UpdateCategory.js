import React, { Component } from 'react';
import CategoryService from '../../services/CategoryService';
import { useNavigate, useParams } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './FormCategory.module.scss';
const cx = classNames.bind(styles);
export default function UpdateCategory() {
    const navigatate = useNavigate();
    const params = useParams();
    return <UpdateCategoryForm navigatate={navigatate} params={params} />;
}

class UpdateCategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match,
            name: '',
        };
    }
    changeId = (event) => {
        this.setState({ id: event.target.value });
    };

    changeName = (event) => {
        this.setState({ name: event.target.value });
    };

    updateCategory = (event) => {
        event.preventDefault();
        let category = {
            id: this.props.params.id,
            name: this.state.name,
        };
        CategoryService.updateCategory(category).then((res) => {
            this.props.navigatate('/admin/category');
        });
    };
    componentDidMount() {
        const { id } = this.props.params;
        CategoryService.getCategoryById(id).then((res) => {
            let category = res.data;
            this.setState({
                id: category.id,
                name: category.name,
            });
        });
    }
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

                        <div className={cx('action')}>
                            <button className={cx('btn', 'btn-success')} onClick={this.updateCategory}>
                                Update
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
