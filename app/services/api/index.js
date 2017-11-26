import signIn from './signIn';

export default (axios) => ({
  signIn: signIn(axios),
});
