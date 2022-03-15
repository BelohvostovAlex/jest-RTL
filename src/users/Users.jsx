import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Users = () => {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
        setUsers(data)
    }
  return (
    <div data-testid="users-page">
        {users?.map(user => <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">{user.name}</Link>)}
    </div>
  )
}
