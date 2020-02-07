import * as Sentry from '@sentry/browser';

function init() {
  Sentry.init({
    dsn: 'https://59fae7e8c43e40d78e6d2bb0196406e3@sentry.io/2299040'
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
