import {React, useState, useEffect} from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from "@material-ui/core";

export default function Board(props) {
    const [publishedVisible, setVisible] = useState('posts')
    const {allPost} = props

    if(!allPost){
        return <LinearProgress/>
    }

    const handlePosts = () => {
         setVisible('posts')
    }

    const handleArticles = () => {
        setVisible('articles')
    }

    return (
        <div>
            
            <h1>Board</h1>
            <div>
                <Button onClick={handlePosts}>Posts</Button>
                <Button onClick={handleArticles}>Articles/Code</Button>
            </div>
            {
                allPost.filter(e => e.postStatus === 'published')
                    .map((singlePost)=>{
                        if(publishedVisible === 'posts' && singlePost.postType == 'post') {
                            return <p>Title: {singlePost.title},  Description: {singlePost.description} </p>
                        }
                        else if(publishedVisible === 'articles' && singlePost.postType == 'article') {
                            return <p>Title: {singlePost.title},  Description: {singlePost.description} </p>
                        }
                })
            }
        </div>
    )
}