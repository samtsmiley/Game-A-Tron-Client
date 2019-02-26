import React from 'react';
import {connect} from 'react-redux';
import Post from './post';

export class GamePostsList extends React.Component {
    render() {
        const posts = this.props.posts.slice(0).reverse().map((post, index) => {
            return <Post key={index} {...post} iScored={false}/>
          })

      return (
        <div className="gamePosts subcard">
             <h2>Game Score History</h2>
            <ul>
                {posts}
            </ul>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts:state.game.data.posts
    };
};

export default connect(mapStateToProps)(GamePostsList);