const MAX_PROPOSE_ROUND_RETRIES = 3;
const BASE_RETRY_DELAY_MS = 8000;
const MAX_RETRY_DELAY_MS = 60000;
const RETRY_JITTER_MS = 1000;

const getRetryDelay = (retry, random = Math.random) => {
  const exponentialDelay = Math.min(BASE_RETRY_DELAY_MS * (2 ** retry), MAX_RETRY_DELAY_MS);
  return exponentialDelay + Math.floor(random() * RETRY_JITTER_MS);
};

module.exports = {
  MAX_PROPOSE_ROUND_RETRIES,
  getRetryDelay,
};
