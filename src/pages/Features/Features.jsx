import React from 'react';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      title: "Live Crypto Prices",
      description: "Get real-time price updates for top cryptocurrencies.",
    },
    {
      title: "Search & Filter",
      description: "Easily find coins by name and filter based on price or volume.",
    },
    {
      title: "Interactive Charts",
      description: "Visualize market trends with interactive coin charts.",
    },
    {
      title: "Responsive Design",
      description: "Optimized for desktops, tablets, and smartphones.",
    },
    {
      title: "Watchlist",
      description: "Track your favorite coins in a personalized watchlist.",
    },
  ];

  return (
    <div className="features">
      <h2>Key Features</h2>
      <div className="features-list">
        {featureList.map((feature, index) => (
          <div key={index} className="feature-box">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
