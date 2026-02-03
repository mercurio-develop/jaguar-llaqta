// Stripe integration disabled for initial launch
// Will be enabled when payment processing is needed

export const getStripe = () => {
  throw new Error('Stripe not configured');
};

export const getStripeJs = async () => {
  throw new Error('Stripe not configured');
};
