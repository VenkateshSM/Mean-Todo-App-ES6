webpackHotUpdate(0,{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(101);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(104);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = _angular2.default.module('app', [_angularUiRouter2.default]);
	
	app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('todos', {
	        url: '/',
	        template: __webpack_require__(105)
	    }).state('about', {
	        url: '/about',
	        template: __webpack_require__(106)
	    });
	
	    $locationProvider.html5mode(true);
	});
	
	exports.default = app;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzPzQyNjQiXSwibmFtZXMiOlsiYXBwIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsIm90aGVyd2lzZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGUiLCJyZXF1aXJlIiwiaHRtbDVtb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLE1BQU0sa0JBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXFCLDJCQUFyQixDQUFaOztBQUVBRCxLQUFJRSxNQUFKLENBQVcsVUFBQ0MsY0FBRCxFQUFnQkMsa0JBQWhCLEVBQW1DQyxpQkFBbkMsRUFBeUQ7O0FBRWhFRCx3QkFBbUJFLFNBQW5CLENBQTZCLEdBQTdCOztBQUVBSCxvQkFDR0ksS0FESCxDQUNTLE9BRFQsRUFDaUI7QUFDWkMsY0FBTSxHQURNO0FBRVpDLG1CQUFXLG1CQUFBQyxDQUFRLEdBQVI7QUFGQyxNQURqQixFQUtHSCxLQUxILENBS1MsT0FMVCxFQUtpQjtBQUNiQyxjQUFNLFFBRE87QUFFYkMsbUJBQVcsbUJBQUFDLENBQVEsR0FBUjtBQUZFLE1BTGpCOztBQVVFTCx1QkFBa0JNLFNBQWxCLENBQTRCLElBQTVCO0FBRUwsRUFoQkQ7O21CQWtCZVgsRyIsImZpbGUiOiIwLmE4ZTc1ZjUzYTBjMDU5MGJmM2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHVpUm91dGVyIGZyb20gJ2FuZ3VsYXItdWktcm91dGVyJztcclxuXHJcbmNvbnN0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLFt1aVJvdXRlcl0pO1xyXG5cclxuYXBwLmNvbmZpZygoJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyLCRsb2NhdGlvblByb3ZpZGVyKSA9PiB7XHJcbiAgICBcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxuXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAuc3RhdGUoJ3RvZG9zJyx7XHJcbiAgICAgIFx0ICB1cmwgOiAnLycsXHJcbiAgICAgIFx0ICB0ZW1wbGF0ZSA6IHJlcXVpcmUoJ3RvZG9zL3RvZG9zLmh0bWwnKVxyXG4gICAgICB9KVxyXG4gICAgICAuc3RhdGUoJ2Fib3V0Jyx7XHJcbiAgICAgIFx0IHVybCA6ICcvYWJvdXQnLFxyXG4gICAgICBcdCB0ZW1wbGF0ZSA6IHJlcXVpcmUoJ2Fib3V0L2Fib3V0Lmh0bWwnKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVtb2RlKHRydWUpO1xyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbmZpZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=