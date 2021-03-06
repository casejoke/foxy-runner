import angular from 'angular';
import localStorage from 'fm-localstorage';
import * as ngTouch from 'ngtouch';
import * as controller from './controller';
import * as directive from './directive';
import * as service from './service';

window.ds = localStorage;

let app = angular.module('FoxyRunnerApp', [
  'ng',
  'ngTouch'
]);

app.controller('PageCtrl', controller.PageCtrl);
app.controller('ScoreTableCtrl', controller.ScoreTableCtrl);

app.directive('scoreTable', directive.ScoreTable);

app.service('ApiService', service.ApiService);

export {
  angular,
  app
};
