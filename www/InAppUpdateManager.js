var exec = require('cordova/exec');

exports.checkForImmediateUpdate = function( success, error ) {
    exec(success, error, "ImmediateUpdateManager", "immediate");
};