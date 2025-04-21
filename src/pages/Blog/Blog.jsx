import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <h1>Latest from Our Blog</h1>
      <p>Get insights, news, and tips about the crypto world.</p>

      <div className="blog-posts">
        <div className="post">
          <h2>5 Cryptos to Watch in 2025</h2>
          <p>Discover the top emerging coins that could shape the next bull run.</p>
          <a href="https://www.coindesk.com/markets/2025-crypto-outlook" target="_blank" rel="noopener noreferrer">Read more →</a>
        </div>

        <div className="post">
          <h2>Understanding Blockchain</h2>
          <p>A beginner-friendly breakdown of how blockchain technology really works.</p>
          <a href="https://www.investopedia.com/defi-decentralized-finance-5113835" target="_blank" rel="noopener noreferrer">Read more →</a>
        </div>

        <div className="post">
          <h2>Security Tips for Crypto Investors</h2>
          <p>Learn how to keep your digital assets safe from threats and scams.</p>
          <a href="https://www.coinbase.com/learn/crypto-basics/how-to-keep-your-crypto-secure" target="_blank" rel="noopener noreferrer">Read more →</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
