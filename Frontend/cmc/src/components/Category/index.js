import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import CategoryService from '../../services/CategoryService';
import { useNavigate, useParams } from 'react-router-dom';
import React, { Component } from 'react';
const cx = classNames.bind(styles);
export default function Category() {
    const navigatate = useNavigate();
    const params = useParams();
    return <GetListCategory navigatate={navigatate} params={params} />;
}
class GetListCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            search: '',
        };
    }
    changeSearch = (event) => {
        this.setState({ search: event.target.value });
    };

    searchCategory(search) {
        CategoryService.searchCategory(search).then((res) => {
            this.props.navigatate(`/admin/category?query=${search}`);
        });
    }
    editCategory(id) {
        this.props.navigatate(`/admin/category/update/${id}`);
    }
    componentDidMount() {
        CategoryService.getCategoryList().then((res) => {
            this.setState({ categories: res.data });
        });
    }
    deleteCategory(id) {
        CategoryService.deleteCategory(id).then((res) => {
            window.location.reload();
        });
    }
    render() {
        return (
            <div className={cx('wrapper')}>
                <h1>List Category</h1>
                <div className={cx('inner')}>
                    <div>
                        <form>
                            <input
                                className={cx('search')}
                                type="text"
                                placeholder="Enter title"
                                name="query"
                                onChange={this.changeSearch}
                                value={this.state.search}
                            />
                            <button
                                className={cx('btn', 'btn-primary', 'btn-search')}
                                type="submit"
                                onClick={() => {
                                    this.searchCategory(this.state.search);
                                }}
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <button
                        className={cx('btn', 'btn-success', 'btn-add')}
                        onClick={() => {
                            this.props.navigatate('/admin/category/add');
                        }}
                    >
                        Add
                    </button>
                    <div className={cx('data')}>
                        <form>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>TITLE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.categories.map((categories) => (
                                        <tr key={categories.id}>
                                            <td>{categories.id}</td>
                                            <td>{categories.name}</td>
                                            <td>
                                                <button
                                                    className={cx('btn', 'btn-primary')}
                                                    onClick={() => {
                                                        this.editCategory(categories.id);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className={cx('btn', 'btn-danger')}
                                                    onClick={() => {
                                                        this.deleteCategory(categories.id);
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
