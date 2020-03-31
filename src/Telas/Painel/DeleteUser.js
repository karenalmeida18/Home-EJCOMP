import React from 'react';
import api from '../../Services/api'


export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           users: [],
        }
    }
    async componentDidMount() {
        const response = await api.get(`/auth`)
        console.log(response.data);
        this.setState({
            users: response.data.users
        })
    }
    
    render() {
        const {users} = this.state;
        return (
            <div className='containerCreateUser' style={{display: this.props.displayDeleteUser}}>
                 {users.length > 0 ?
                        users.map(user => (
                            <table key={user.id} className='ListUsers'>
                                <td>
                                   <tr> {user.email} </tr>
                                </td>
                            </table>
                        ))

                        :
                        <h3 className='textPost'>Não existe usuário cadastrado.</h3>
                        }
            </div>

        )
    }

}
