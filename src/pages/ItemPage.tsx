import React from 'react'
import { useParams, Redirect } from 'react-router'
import { useSelector } from 'react-redux'
import { AppRootState, User } from '../reduxInfo'
import { UserBanner } from '../components/UserBanner'
import { ProductsTable } from '../components/ProductsTable'

export const ItemPage = () => {
    const { id } = useParams()
    const currentUser: User = useSelector<AppRootState>(state => state.usersList[id]) as User

    if (!currentUser) return <Redirect to="/" />
    return (
        <div className="grid">
            <button type="button" onClick={() => window.history.back()}>
                back
            </button>
            <p>
                {" "}
                {currentUser.first_name}
                {" "}
                {currentUser.last_name}
            </p>
            <hr/>
            <UserBanner />
            <ProductsTable />
        </div>
    )
}