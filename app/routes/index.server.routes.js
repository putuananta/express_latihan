/**
 * Created by Yogi on 4/26/2015.
 */

module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
}