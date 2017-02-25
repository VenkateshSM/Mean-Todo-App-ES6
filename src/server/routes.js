var todoRoutes = require('./todos/routes');

module.exports = function routes(app) {
    app.use('/todos',todoRoutes);
};