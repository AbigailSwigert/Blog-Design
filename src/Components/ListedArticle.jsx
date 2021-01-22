import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function ListedArticle() {
    return (
        <Fragment>
            <Link to='/post-template'><article className="listed-article">
                <h1 className="post-title-smaller">Blog Post Title<img src="https://picsum.photos/200" alt="randomly generated" className="listed-article-img" /></h1>
                <p>Post subtitle / short description</p>
                <p className="post-date">Posted on: January 22nd, 2021</p>
            </article></Link>

            <hr />
        </Fragment>
    );
}

export default ListedArticle;