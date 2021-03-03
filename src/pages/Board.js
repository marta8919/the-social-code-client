import React from 'react'
import NavBarUser from '../components/NavBarUser'

export default function Board(props) {

    const {allPost} = props

    return (
        <div>
            
            <h1>Board</h1>
            {
                allPost.map((singlePost)=>{
                    return (
                        <p>{singlePost.description}</p>
                    )
                })
            }
            <NavBarUser />
        </div>
    )
}