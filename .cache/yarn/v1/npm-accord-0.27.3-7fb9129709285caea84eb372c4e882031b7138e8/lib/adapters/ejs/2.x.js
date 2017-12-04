// Generated by CoffeeScript 1.12.5
(function() {
  var Adapter, EJS, W, fs, path,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Adapter = require('../../adapter_base');

  path = require('path');

  fs = require('fs');

  W = require('when');

  EJS = (function(superClass) {
    var compile;

    extend(EJS, superClass);

    function EJS() {
      return EJS.__super__.constructor.apply(this, arguments);
    }

    EJS.prototype.name = 'ejs';

    EJS.prototype.extensions = ['ejs'];

    EJS.prototype.output = 'html';

    EJS.prototype._render = function(str, options) {
      return compile((function(_this) {
        return function() {
          return _this.engine.render(str, options);
        };
      })(this));
    };

    EJS.prototype._compile = function(str, options) {
      return compile((function(_this) {
        return function() {
          return _this.engine.compile(str, options);
        };
      })(this));
    };

    EJS.prototype._compileClient = function(str, options) {
      options.client = true;
      return compile((function(_this) {
        return function() {
          return _this.engine.compile(str, options).toString();
        };
      })(this));
    };

    EJS.prototype.clientHelpers = function(str, options) {
      var runtime_path;
      runtime_path = path.join(this.engine.__accord_path, 'ejs.min.js');
      return fs.readFileSync(runtime_path, 'utf8');
    };

    compile = function(fn) {
      var err, res;
      try {
        res = fn();
      } catch (error) {
        err = error;
        return W.reject(err);
      }
      return W.resolve({
        result: res
      });
    };

    return EJS;

  })(Adapter);

  module.exports = EJS;

}).call(this);
