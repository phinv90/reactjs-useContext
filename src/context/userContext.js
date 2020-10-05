import React, {useEffect, useState} from 'react'


export const UserContext = React.createContext({})


export const UserProvider = ({children}) => {
    const [user, setUser] = useState({})

    //  lấy thông tin user từ api
    useEffect(() => {
        fetch("https://randomuser.me/api")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUser(data.results[0])
            })
            .catch(console.log)
    }, [])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
