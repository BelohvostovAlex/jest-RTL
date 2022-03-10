import React from 'react'
import axios from 'axios'

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
    <div>
        {users?.map(user => <div key={user.id} data-testid="userItem">{user.name}</div>)}
    </div>
  )
}
