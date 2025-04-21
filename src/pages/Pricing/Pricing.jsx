import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Our Pricing Plans</h1>
      <p>Choose the plan that fits your needs.</p>
      
      <div className="pricing-cards">
        <div className="card basic">
          <h2>Basic</h2>
          <p>$0 / month</p>
          <ul>
            <li>View crypto prices</li>
            <li>Basic chart access</li>
            <li>Ad-supported</li>
          </ul>
        </div>

        <div className="card pro">
          <h2>Pro</h2>
          <p>$9.99 / month</p>
          <ul>
            <li>All Basic features</li>
            <li>No ads</li>
            <li>Advanced charts</li>
            <li>Portfolio tracking</li>
          </ul>
        </div>

        <div className="card enterprise">
          <h2>Enterprise</h2>
          <p>Contact us</p>
          <ul>
            <li>Custom solutions</li>
            <li>API access</li>
            <li>Dedicated support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
