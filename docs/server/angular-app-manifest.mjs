
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mdmi-web-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mdmi-web-app"
  },
  {
    "renderMode": 2,
    "route": "/mdmi-web-app/service-test"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5372, hash: '93ba621916c74d050dbc3e0ce79c0967456f2dc402f36214113b651a0d023d77', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1116, hash: 'aec6e35178bf678b5f7df87656cfe8d1537299df15cfbe026650970935ee0797', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21845, hash: 'b8f59e6218091b2bb1ea177e6b2f68bedf522d51380d315b66a35c6c1e11a07d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'service-test/index.html': {size: 14418, hash: '99e75e508ae9842982e8d08707c4ee10074bb71b51e86cf496c94905eed138c5', text: () => import('./assets-chunks/service-test_index_html.mjs').then(m => m.default)},
    'styles-5JWVP3QM.css': {size: 232017, hash: 'mW/7GR91Tn0', text: () => import('./assets-chunks/styles-5JWVP3QM_css.mjs').then(m => m.default)}
  },
};
