import React, { Component } from 'react'
import UserList from '../../components/user-list/UserList';
import UserItem from '../../components/user-item/UserItem';
import { connect } from 'react-redux';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actFetchUsersRequest } from '../../actions/index';

export class UserListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    handleDelete = (id) => {
        const {users} = this.state;
        callApi(`users/${id}`, 'DELETE', null).then(res => {
            if(res.status === 200 ) { // 200 ok
                let index = this.findIndex(users, id);
                if(index !== -1) {
                    users.splice(index, 1);
                    this.setState({
                        users: users
                    });
                }
            }
        });
    }

    findIndex = (users, id) => {
        let result = -1;
        users.forEach( (user, index) => {
            if(user.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        // nhan du lieu mau tu porps
        let {users} = this.props; 
        
        // let {users} = this.state;
        return (
            <div className="col-md-12">
                <Link to="user/add" className="btn btn-primary mb-10" type="button">Add</Link>
                <UserList>
                    {this.showUsers(users)}
                </UserList>
            </div>
        );
    }

    showUsers = (users) => {
        let result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <UserItem
                        key={index}
                        user={user}
                        index={index}
                        handleDelete={this.handleDelete}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispath, props) => {
    return {
        fetchAllUsers: () => {
            dispath(actFetchUsersRequest());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
