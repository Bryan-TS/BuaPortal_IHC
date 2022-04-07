import {createContext} from 'react'

const UserContext = createContext({
    name: null,
    lastName: null
});

export default UserContext;
