import { createSelector } from 'reselect';

const selectJobList = (state) => state.get('jobList');

const makeSelectItems = () =>
  createSelector(selectJobList, (jobListState) => jobListState.get('items'));

const makeSelectLoading = () =>
  createSelector(selectJobList, (jobListState) => jobListState.get('loading'));

export { selectJobList, makeSelectItems, makeSelectLoading };
