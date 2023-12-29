const profile = require('../controllers/profile.controller');

module.exports = function (app) {
    app.route('/CreateProfile').post(profile.createProfile);

    app.route('/readProfile').get(profile.readProfile);

    app.route('/updateProfile').post(profile.updateProfile);

    app.route('/deleteProfile').delete(profile.deleteProfile);
};
