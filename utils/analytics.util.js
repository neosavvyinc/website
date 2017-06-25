import ReactGA from 'react-ga';

export function initGA() {
  ReactGA.initialize('UA-46321673-1');
}

export function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export function logEvent(category, action) {
  if (category && action) {
    ReactGA.event({ category, action });
  }
}

export function logException(description, fatal = false) {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
}
