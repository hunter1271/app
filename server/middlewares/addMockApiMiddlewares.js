module.exports = (app) => {
  app.get('api/ping', (req, res) => {
    res.send('Hello from API');
  });
};
