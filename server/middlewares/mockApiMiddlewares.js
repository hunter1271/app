module.exports = function createApiRouter(express) {
  const router = express.Router();

  router.post('/signin', (req, res) => {
    res.json({
      user_data: 'asdasdasdasd',
    });
  });

  return router;
};
