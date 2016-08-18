define('profile',['exports', './lib/library1'], function (exports, _library) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Profile = undefined;

  var _library2 = _interopRequireDefault(_library);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Profile = exports.Profile = function Profile() {
    _classCallCheck(this, Profile);

    this.title = 'Profile Page for ' + _library2.default.name;
  };
});
define('text!profile.html', ['module'], function(module) { module.exports = "<template>\n  <h2>${title}</h2>\n  <p>This is the profile page</p>\n</template>\t"; });
define('lib/library1',[],function() {
	return {
		name: "Loic"
	};
});
//# sourceMappingURL=profile-bundle.js.map