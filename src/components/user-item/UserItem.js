import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserItem extends Component {
   
    onDelete = (id) => {
        if(window.confirm('Ban co chac xoa khong')) {
            this.props.handleDelete(id);
        }
    }

    render() {
        let { user } = this.props;
        let statusUser = user.status ? 'kích hoạt' : 'chưa';
        let statusClass = user.status ? 'default' : 'warning';
        return (
            <tr>
                <th scope="row">{user.id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.address}</th>
                <th><span className={`label label-${statusClass}`}>{statusUser}</span></th>
                <th>
                    <Link to={`user/${user.id}/edit`} className="btn btn-info"
                        
                    >Sửa</Link> &nbsp;
                    <button className="btn btn-danger" 
                        onClick={ () => this.onDelete(user.id) }
                    >Xóa</button>
                </th>
            </tr>
        )
    }
}

export default UserItem;
