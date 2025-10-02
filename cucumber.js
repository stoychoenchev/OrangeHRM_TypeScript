module.exports = {
default: {
  requireModule: ['ts-node/register'],
  require: ['features/steps/**/*.ts'],
  format: ['progress'],
  publishQuiet: true,
  failFast: false,
  parallel: 1,
  paths: ['features/*.feature'],
}
};