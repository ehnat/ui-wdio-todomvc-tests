import configData from './configData';
// import lodash from 'lodash';
import yargs from 'yargs';

const commonConfig = configData.common;
const environment = yargs.argv.env;
const envConfig = configData[environment];

// const config = lodash.merge(commonConfig, envConfig);

const baseUrl: string = commonConfig.baseUrl;
const taskName: string = envConfig.taskName;

export {
baseUrl,
taskName
}