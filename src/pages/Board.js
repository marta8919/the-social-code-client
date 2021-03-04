import React from 'react'

export default function Board(props) {

    const {allPost} = props

    return (
        <div>
            
            <h1>Board</h1>
            {
                allPost.map((singlePost)=>{
                    return <p>Title: {singlePost.title},  Description: {singlePost.description} </p>
                })
            }
        </div>
    )
}