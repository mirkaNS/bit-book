import React, { Component } from 'react';

import * as postsService from '../../../services/postService';

import { PostItem } from './postItem/PostItem';
import { NewPost } from '../NewPosts/NewPost';


class FeedPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
        postsService.fetchPosts()
            .then(myPosts => {
                this.setState({ posts: myPosts })
            })
    }

    renderItems = (posts) => {
        const postItems = posts.map((post, index) => {
            return <PostItem key={index} post={post} />
        })
        return postItems
    }

    render() {
        return (
            <div className="container">
                <NewPost onPostCreate={this.fetchPosts} />
                {this.renderItems(this.state.posts)}
            </div >
        )
    }
}

export { FeedPage };