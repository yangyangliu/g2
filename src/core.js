const Scale = require('@antv/scale/src');
const G = require('./renderer2d');
const Animate = require('./animate/animate');
const Chart = require('./chart/chart');
const Global = require('./global');
const Shape = require('./geom/shape/shape');
const Util = require('./util');

const G2 = {
  // version
  version: Global.version,
  // visual encoding
  Animate,
  Chart,
  Global,
  Scale,
  Shape,
  Util,
  // render engine
  G,
  DomUtil: G.DomUtil,
  MatrixUtil: G.MatrixUtil,
  PathUtil: G.PathUtil
};

G2.track = function(enable) {
  Global.trackable = enable;
};
require('./track');

// 保证两个版本共存
if (typeof window !== 'undefined') {
  if (window.G2) {
    console.warn(`There are multiple versions of G2. Version ${G2.version}'s reference is 'window.G2_3'`);
  } else {
    window.G2 = G2;
  }
}

module.exports = G2;
