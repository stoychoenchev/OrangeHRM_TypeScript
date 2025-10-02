module.exports = {
default: {
  requireModule: ['ts-node/register'],
  require: ['features/steps/*.ts'],
  format: ['progress'],
  parallel: 1,
  paths: ['features/*.feature'],
}
};