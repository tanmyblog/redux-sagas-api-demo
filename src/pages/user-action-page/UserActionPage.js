import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';

export class UserActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = [{
            id: null,
            txtName: '',
            txtEmail: '',
            txtAddress: '',
            statusCheck: false
        }];
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            callApi(`users/${id}`, 'GET', null).then(res => {
                const data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtEmail: data.email,
                    txtAddress: data.address,
                    statusCheck: data.status
                });
            });
        }
    }

    handleChange = e => {
        let target = e.target;
        const data = {
            name: target.name,
            status: target.type === 'checkbox' ? target.checked : target.value
        }
        this.setState({
            [data.name]: data.status
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { id, txtName, txtEmail, txtAddress, statusCheck } = this.state;
        const { history } = this.props;
        if (id) { // update
            callApi(`users/${id}`, 'PUT', {
                name: txtName,
                email: txtEmail,
                address: txtAddress,
                status: statusCheck
            }).then( res => {
                history.goBack();
            });
        } else { // add
            callApi('users', 'POST', {
                name: txtName,
                email: txtEmail,
                address: txtAddress,
                status: statusCheck
            }).then(res => {
                history.goBack();
            }).catch(err => {
                console.log(err);
            });
        }
    }

    render() {
        const { txtName, txtEmail, txtAddress, statusCheck } = this.state;
        return (
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="">Tên</label>
                        <input type="text" name="txtName" className="form-control"
                            value={txtName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="">Email</label>
                        <input type="email" name="txtEmail" className="form-control"
                            value={txtEmail}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="">Địa chỉ</label>
                        <input type="text" name="txtAddress" className="form-control"
                            value={txtAddress}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="">
                            Trạng thái: <input type="checkbox" name="statusCheck"
                                value={statusCheck} onChange={this.handleChange} checked={statusCheck} />
                        </label>
                    </div>

                    <div className="form-group">
                        <Link to="/user-list" className="btn btn-primary">Trở Lại</Link> &nbsp;
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserActionPage
