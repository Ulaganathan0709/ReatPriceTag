// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types'; // Ensure PropTypes is imported
import './App.css'; // Adjust based on your actual CSS file path

function PriceCard({ plan }) {
  // Optional: Additional runtime checks (if needed)
  if (!plan) {
    console.error('Plan prop is missing in PriceCard component');
    return <p>Plan data is missing.</p>;  // Render nothing or a placeholder
  }

  return (
    <div className={`price-card ${plan.type}`}>
      <div className="price-card-content">
        <h2 className="card-title">{plan.title}</h2>
        <p className="card-price">{plan.price}/month</p>
        <ul className="features">
          {plan.features.map((feature, index) => (
            <li key={index + 1} className={feature.included ? 'included' : 'excluded'}>
              {feature.included ? '✓' : '✗'} {feature.text}
            </li>
          ))}
        </ul>
        <button className="card-button">Button</button>
      </div>
    </div>
  );
}

// Define PropTypes for PriceCard
PriceCard.propTypes = {
  plan: PropTypes.shape({
    type: PropTypes.string.isRequired, // Ensure the type is required
    title: PropTypes.string.isRequired, // Ensure the title is required
    price: PropTypes.string.isRequired, // Ensure the price is required
    features: PropTypes.arrayOf(
      PropTypes.shape({
        included: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default PriceCard;
