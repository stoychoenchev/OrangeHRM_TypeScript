export default {
  default: {
    requireModule: ['ts-node/register'],
    require: ['features/**/*.ts'],
    format: ['progress'],
    parallel: 1,
    paths: ['features/*.feature'],
    publishQuiet: true
  }
};
