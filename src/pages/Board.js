import {React, useState, useEffect} from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from "@material-ui/core";
import BoardPost from "../components/BoardPost";
import BoardArticle from "../components/BoardArticle";

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
            <h2>Board</h2>
            <div>
                <Button onClick={handlePosts}>Posts</Button>
                <Button onClick={handleArticles}>Articles/Code</Button>
            </div>
            {
                allPost.filter(e => e.postStatus === 'published')
                    .map((singlePost)=>{
                        if(publishedVisible === 'posts' && singlePost.postType == 'post') {
                            return <BoardPost key={singlePost._id} user={singlePost.userId} description={singlePost.description}/>
                        }
                        else if(publishedVisible === 'articles' && singlePost.postType == 'article') {
                            return <BoardArticle key={singlePost._id} title={singlePost.title}  description={singlePost.description}/>
                        }
                })
            }
        </div>
    )
}