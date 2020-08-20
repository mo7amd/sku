import React from 'react'
import { User, AppActionType } from '../reduxInfo'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

interface Props {
    user: User
}

export const UserCard = (props: Props) => {
    const dispatch = useDispatch()
    const onDetailsClick = () => {
        dispatch({
            type: AppActionType.ViewItem,
            payload: user.id,
        })
    }
    const { user } = props
    return (
        <article className="user-card">
            {
                Object.keys(user).map(key => {
                    if (key === "id") return false
                    return (
                        <p key={key}>
                            {user[key]}
                        </p>
                    )
                })
            }
            <Link to={`/user/${user.id}`} onClick={onDetailsClick}>
                Details
            </Link>
        </article>
    )
}
