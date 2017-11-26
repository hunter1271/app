import { createSelector } from 'reselect';

const signInSelector = (globalState) => globalState.getIn(['signIn']);

export const emailSelector = createSelector(signInSelector, (signIn) =>
  signIn.get('email')
);

export const passwordSelector = createSelector(signInSelector, (signIn) =>
  signIn.get('password')
);

export const userDataSelector = createSelector(signInSelector, (signIn) =>
  signIn.get('userData').toJS()
);

export const loadingSelector = createSelector(signInSelector, (signIn) =>
  signIn.get('loading')
);

export const errorSelector = createSelector(signInSelector, (signIn) =>
  signIn.get('error')
);
