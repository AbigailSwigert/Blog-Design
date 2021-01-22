import React from 'react';
import '../App.css';
import ListedArticle from './ListedArticle';
import Aside from './Aside';

function HomePage() {
    return (
        <main className="page-container">
            
            <h1 className="post-title secondary">Recent Blog Posts:</h1>

            <section id="articles-and-aside">

                <section id="article-list">
                    <ListedArticle />
                    
                    <ListedArticle />

                    <ListedArticle />
                    
                    <ListedArticle />
                </section>

                <Aside />
                
            </section>
        </main>
    );
}

export default HomePage;