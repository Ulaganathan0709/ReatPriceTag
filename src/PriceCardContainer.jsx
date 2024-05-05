// eslint-disable-next-line
import React from 'react';
import PriceCard from './PriceCard';

function PriceCardContainer() {
  const plans = [
    {
      type: 'free',
      title: 'FREE',
      price: '$0',
      features: [
        { included: true, text: 'Single User' },
        { included: true, text: '5GB Storage' },
        { included: true, text: 'Unlimited Public Projects' },
        { included: true, text: 'Community Access' },
        { included: false, text:'Unlimited Private Projects' },
        { included: false, text: 'Dedicated Phone Support' },
        { included: false, text: 'Free Subdomain' },
        { included: false, text: 'Monthly Status Reports' },
      ],
    },
    {
      type: 'plus',
      title: 'PLUS',
      price: '$9',
      features: [
        { included: true, text: '5 User' },
        { included: true, text: '50GB Storage' },
        { included: true, text: 'Unlimited Public Projects' },
        { included: true, text: 'Community Access' },
        { included: true, text: 'Unlimited Private Projects' },
        { included: true, text: 'Dedicated Phone Support' },
        { included: true, text: 'Free Subdomain' },
        { included: false, text: 'Monthly Status Reports' },
      ],
    },
    {
      type: 'pro',
      title: 'PRO',
      price: '$49',
      features: [
        { included: true, text: 'Unlimited Users' },
        { included: true, text: '50GB Storage' },
        { included: true, text: 'Unlimited Public Projects' },
        { included: true, text: 'Community Access' },
        { included: true, text: 'Unlimited Private Projects' },
        { included: true, text: 'Dedicated Phone Support' },
        { included: true, text: 'Free Subdomain' },
        { included: true, text: 'Monthly Status Reports' },
      ],
    }
  ];
  if (plans.length === 0) {
    return <p>Loading plans...</p>;
  }

  return (
    <section className="price-card-container">
      {plans.map(plan => <PriceCard key={plan.title} plan={plan} />)}
    </section>
  );
}

export default PriceCardContainer;
