# HTTP Middleware Trace

> Express middleware, assists in request tracing between services.


## Getting Started

```shell
npm install --save @cork-labs/http-middleware-trace
```

```javascript
// your application setup
const httpTrace = require('@cork-labs/http-middleware-trace');
app.use(httpTrace());

// your route
app.get('/path', (req, res, next) => {
  console.log(res.trace.uuid);
})
```


## API

### res.trace: object

An object with the following attributes:

```json
{
  "uuid": "...", // read from http headers or generated by the middleware
  "current": "...", // always generated by ghe middleware
  "parent": "...",  // always read from http headers
  "ip": "...",  // always read from http header
}
```

By default, the middleware reads from specific http headers.

We certainly want to customise these.

```javascript
{
  uuid: 'x-cork-labs-req-trace-id',
  parent: 'x-cork-labs-req-parent-id',
  ip: 'x-cork-labs-client-ip'
}
```


## Configuration

The middleware can be configured via an options object when calling its factory function.

```javascript
const options = {
  headers: {
    uuid: 'x-trace-id'
  }
};
app.use(httpTrace(options));
```


## Develop

```shell
# lint and fix
npm run lint

# run test suite
npm test

# lint and test
npm run build

# serve test coverage
npm run coverage

# publish a minor version
node_modules/.bin/npm-bump minor
```

### Contributing

We'd love for you to contribute to our source code and to make it even better than it is today!

Check [CONTRIBUTING](https://github.com/cork-labs/contributing/blob/master/CONTRIBUTING.md) before submitting issues and PRs.


## Tools

- [npm-bump](https://www.npmjs.com/package/npm-bump)
- [chai](http://chaijs.com/api/)
- [sinon](http://sinonjs.org/)
- [sinon-chai](https://github.com/domenic/sinon-chai)


## [MIT License](LICENSE)

[Copyright (c) 2018 Cork Labs](http://cork-labs.mit-license.org/2018)