// Single source of truth for every price shown on the site.
//
// Page copy, SEO meta descriptions, and the schema.org offer catalog all read
// from here, so changing a price is a one-line edit in this file.
//
// These values are what the site *displays*. The amount actually charged lives
// in the corresponding Cal.com event type, so a price change here must be
// mirrored there too.

export const PRICES = {
  exact: 70,
  flexible: 60,
  additionalVehicle: 50,
};

// Stored as numbers rather than preformatted strings because the same value is
// rendered two different ways: page copy needs "$70", while schema.org offers
// require a bare "70". Formatting at the point of use keeps both correct.
export const usd = (amount) => `$${amount}`;

// The "Prices from ..." page title should always track the cheapest option,
// even if the tiers are ever repriced relative to each other.
export const lowestPrice = Math.min(PRICES.exact, PRICES.flexible);
