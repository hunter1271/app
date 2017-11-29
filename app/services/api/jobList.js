const jobList = (axios) => () =>
  axios
    .get('api/v1/joblist')
    .then(({ data }) => ({ items: data.items }))
    .catch((error) => ({ error }));

export default (axios) => ({
  signIn: jobList(axios),
});
