import React, { Component } from 'react';

export class UserList extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Địa Chỉ</th>
                            <th>Trạng Thái</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserList
