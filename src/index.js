'use strict';

const uuidGen = require('uuid');

const defaults = {
  headers: {}
};

const defaultHeaders = {
  uuid: 'x-cork-labs-req-trace-id',
  parent: 'x-cork-labs-req-parent-id',
  ip: 'x-cork-labs-client-ip'
};

const trace = function (config) {
  config = Object.assign({}, defaults, config);
  config.headers = Object.assign({}, defaultHeaders, config.headers);

  // -- middleware

  return function (req, res, next) {
    req.trace = {
      uuid: req.headers[config.headers.uuid] || uuidGen.v4(),
      current: uuidGen.v4(),
      parent: req.headers[config.headers.parent],
      ip: req.headers[config.headers.ip]
    };
    next();
  };
};

module.exports = trace;
