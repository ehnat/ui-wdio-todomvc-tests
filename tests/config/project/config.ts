import configData from './configData';
import lodash from 'lodash';
import yargs from 'yargs';

const commonConfig = configData.common;
const environment = yargs.argv.env;
const envConfig = configData[environment];

const config = lodash.merge(commonConfig, envConfig);

const baseUrl: string = config.baseUrl;
const taskName: string = config.taskName;
const tasksNames: string[] = config.tasksNames;

export {
baseUrl,
taskName,
tasksNames
}