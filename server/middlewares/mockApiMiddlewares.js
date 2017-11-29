module.exports = function createApiRouter(express) {
  const router = express.Router();

  // Authentication
  router.post('/signin', (req, res) => {
    res.json({
      user_data: 'asdasdasdasd',
    });
  });

  // Job list
  router.get('/joblist', (req, res) => {
    res.json({
      items: [
        { id: 1, name: 'Php developer', company: 'AWS Dev' },
        { id: 2, name: 'Java developer', company: 'Apple' },
        { id: 3, name: 'REACT developer', company: 'Facebook' },
      ],
    });
  });

  return router;
};
