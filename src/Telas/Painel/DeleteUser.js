import React from 'react';
import api from '../../Services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt} from '@fortawesome/free-solid-svg-icons'

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
    async excluirUsuário(id) {
        if (window.confirm("tem certeza que deseja ecluir?")) {
            await api.delete(`/auth/${id}`)
            window.location.reload();
        }
    }

    render() {
        const { users } = this.state;
        return (
            <div className='containerCreateUser' style={{ display: this.props.displayDeleteUser }}>
                <table>
                <tr className='ListUsers'>
                <th>Usuários cadastrados</th>
                 <th>Excluir</th>
                 </tr>
                {users.length > 0 ?
                    users.map(user => (
                        <tr key={user.id} className='ListUsers'>
                                <td> {user.email} </td>
                                <td onClick={()=> this.excluirUsuário(user._id)}>
                                <FontAwesomeIcon icon={faTrashAlt} color='red'/>
                                </td>
                            </tr>
                    ))
                    :
                    
                    <h3 className='textPost'>Não existe usuário cadastrado.</h3>
                }        </table>

            </div>

        )
    }

}
