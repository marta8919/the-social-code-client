import {React, useState, useEffect} from "react";
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Board(props) {

    const {allPost} = props
    console.log(allPost)

     if(!allPost){
        return <LinearProgress/>
     }

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