module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['features/steps/*.steps.ts'],
    paths: ['features/*.feature'],
    format: ['progress'],
    parallel: 1
  }
};