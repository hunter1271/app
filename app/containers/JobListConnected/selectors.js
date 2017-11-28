import { createSelector } from 'reselect';

const selectJobList = (globalState) => globalState.get('jobList');

export const itemsSelector = createSelector(selectJobList, (jobList) =>
  jobList.get('items').toJS()
);

export const loadingSelector = createSelector(selectJobList, (jobList) =>
  jobList.get('loading')
);
