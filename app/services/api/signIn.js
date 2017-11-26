const signIn = (axios) => (email, password) =>
  axios
    .post('api/v1/signin', { email, password })
    .then(({ data }) => ({ userData: data.user_data }))
    .catch((error) => ({ error }));

export default (axios) => ({
  signIn: signIn(axios),
});
