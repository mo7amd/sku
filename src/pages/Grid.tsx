import React from 'react'
import { SearchBar } from '../components/SearchBar'
import { User, AppRootState, AppActionType } from '../reduxInfo'
import { UserCard } from '../components/UserCard'
import { useSelector, useDispatch } from 'react-redux'
const usersMock = require('../assets/mock.json')

export const Grid = () => {
    const dispatch = useDispatch()
    dispatch({
        type: AppActionType.AddItemsList,
        payload: usersMock,
    })
    const users: any = useSelector<AppRootState>(state => state.usersList) as User[]
    const renderUsers = (user: User, index: number) => (
        <UserCard key={index} user={user} />
    )
    return (
        <div className="grid">
            <SearchBar />
            <div className="cards-wrapper">
                {
                    users.map(renderUsers)
                }
            </div>
        </div>
    )
}