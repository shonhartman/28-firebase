import angular from 'angular';

import config from './config';
import controller from './controller';

let firetodos = angular.module('tiy.todos', []);

firetodos.config(config);
firetodos.controller('FireTestController', controller);


export default firetodos;
