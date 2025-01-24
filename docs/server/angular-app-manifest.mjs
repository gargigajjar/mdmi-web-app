
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
    'index.csr.html': {size: 1067, hash: '950a8f63b7f41ed21c7046973e82acf545f0decda21385f01b9ed8abcf02e21b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1116, hash: 'a9a99fe5e0b8a2b699d25f3baad11d7c4e2aee48eaf2247e3133ed3abbb5ad39', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'service-test/index.html': {size: 3952, hash: '02631461742eb23e7d4207ac3a3c8754c15734a28912aab3ca067040b8b3796c', text: () => import('./assets-chunks/service-test_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8396, hash: 'e54e8d9c62cb24914d0f4ec99693dba36ec8144039a15b9ba941341633b0983c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OU7H37NP.css': {size: 406, hash: 'UY58tnnc42s', text: () => import('./assets-chunks/styles-OU7H37NP_css.mjs').then(m => m.default)}
  },
};
