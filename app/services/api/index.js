import signIn from './signIn';
import jobList from './jobList';

export default (axios) => ({
  signIn: signIn(axios),
  jobList: jobList(axios),
});
