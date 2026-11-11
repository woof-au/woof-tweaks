'use strict';
// Plan names and order. Woof Tweaks is free: every signed-in account gets every tweak ('lifetime').
// The other tiers remain only so older accounts/grants keep resolving.
const PLAN_ORDER = ['free', 'good', 'plus', 'pro', 'ultra', 'lifetime'];
const PLAN_NAMES = { free: 'No plan', good: 'Good', plus: 'Plus', pro: 'Pro', ultra: 'Ultra', lifetime: 'All features' };
const PLAN_PRICES = { free: 'Sign in', good: 'Free', plus: 'Free', pro: 'Free', ultra: 'Free', lifetime: 'Free' };
// Real feature bullets — kept identical to the website's pricing page (lib/catalog.ts TWEAK_PLANS).
const PLAN_FEATURES = {
  free: [],
  good: ['Per-game profiles for popular games', 'Core FPS, RAM & power tweaks', 'One-click full optimisation (Good set)', 'Revert any change anytime', 'Automatic restore point before changes'],
  plus: ['Everything in Good', 'Extra GPU & latency tweaks', 'More per-game profiles', 'Stutter & crash fixes'],
  pro: ['Everything in Plus', 'Advanced network / ping tuning', 'Deep GPU & CPU profiles', 'Picture-quality & input-lag suites', 'Priority tweak requests'],
  ultra: ['Everything in Pro', 'More advanced tweak options', 'Every game profile', 'Earliest access to new tweaks'],
  lifetime: ['Everything in Ultra', 'All future features included', 'One-time payment, no subscription', 'Lifetime updates'],
};
const PLAN_TAGLINES = {
  free: 'Sign in and choose a lifetime plan.',
  good: 'Core optimisation, yours permanently.',
  plus: 'A few more tweaks for people who want extra.',
  pro: 'A bigger toolkit for serious players.',
  ultra: 'A wider toolkit, paid once.',
  lifetime: 'All features, forever — one payment.',
};

const rank = (plan) => {
  const r = PLAN_ORDER.indexOf(plan);
  return r < 0 ? 0 : r;
};
const isPlan = (p) => PLAN_ORDER.includes(p);
/** Can an account on `plan` use something that needs `required`? */
const canUse = (plan, required) => isPlan(required) && required !== undefined && rank(isPlan(plan) ? plan : 'free') >= rank(required === 'free' ? 'good' : required);

module.exports = { PLAN_ORDER, PLAN_NAMES, PLAN_PRICES, PLAN_FEATURES, PLAN_TAGLINES, rank, canUse, isPlan };
