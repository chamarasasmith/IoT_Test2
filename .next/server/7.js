exports.ids = [7];
exports.modules = {

/***/ "./src/uena/analytics/CustomerMapkm.js":
/*!*********************************************!*\
  !*** ./src/uena/analytics/CustomerMapkm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"react-apexcharts\");\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/chamarasasmith/Projects/React_Projects/IoT-Test1/package/src/uena/analytics/CustomerMapkm.js\";\n\n\n\nclass CustomerMapkm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      series: this.props.data ? this.props.data : [{\n        name: \"Income\",\n        data: [80, 24, 80, 90]\n      }, {\n        name: \"Expense\",\n        data: [40, 60, 20, 60]\n      }, {\n        name: \"Others\",\n        data: [20, 17, 5, 20]\n      }],\n      options: {\n        chart: {\n          type: \"bar\",\n          height: 350,\n          toolbar: {\n            show: false\n          }\n        },\n        plotOptions: {\n          bar: {\n            horizontal: false,\n            columnWidth: \"60%\",\n            endingShape: \"rounded\"\n          }\n        },\n        dataLabels: {\n          enabled: false\n        },\n        stroke: {\n          show: true,\n          width: 3,\n          colors: [\"transparent\"]\n        },\n        legend: {\n          show: false,\n          fontSize: \"12px\",\n          markers: {\n            width: 20,\n            height: 20\n          },\n          itemMargin: {\n            horizontal: 10,\n            vertical: 10\n          }\n        },\n        xaxis: {\n          categories: [\"Week1\", \"Week2\", \"Week3\", \"Week4\"],\n          labels: {\n            style: {\n              colors: \"#787878\",\n              fontSize: \"13px\",\n              fontFamily: \"Poppins\",\n              fontWeight: 400\n            }\n          }\n        },\n        yaxis: {\n          labels: {\n            style: {\n              colors: \"#787878\",\n              fontSize: \"13px\",\n              fontFamily: \"Poppins\",\n              fontWeight: 400\n            }\n          }\n        },\n        colors: [\"#ff720d\", \"#787878\", \"#C4C4C4\"],\n        fill: {\n          opacity: 1\n        },\n        tooltip: {\n          y: {\n            formatter: function (val) {\n              return \"$ \" + val + \" thousands\";\n            }\n          }\n        }\n      }\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"chart\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        options: this.state.options,\n        series: this.state.series,\n        type: \"bar\",\n        height: 350\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerMapkm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWVuYS9hbmFseXRpY3MvQ3VzdG9tZXJNYXBrbS5qcz8zNDY3Il0sIm5hbWVzIjpbIkN1c3RvbWVyTWFwa20iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlcmllcyIsImRhdGEiLCJuYW1lIiwib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsImhlaWdodCIsInRvb2xiYXIiLCJzaG93IiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiY29sdW1uV2lkdGgiLCJlbmRpbmdTaGFwZSIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwic3Ryb2tlIiwid2lkdGgiLCJjb2xvcnMiLCJsZWdlbmQiLCJmb250U2l6ZSIsIm1hcmtlcnMiLCJpdGVtTWFyZ2luIiwidmVydGljYWwiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJsYWJlbHMiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwieWF4aXMiLCJmaWxsIiwib3BhY2l0eSIsInRvb2x0aXAiLCJ5IiwiZm9ybWF0dGVyIiwidmFsIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGFBQU4sU0FBNEJDLDRDQUFLLENBQUNDLFNBQWxDLENBQTRDO0FBQzFDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxLQUFLRixLQUFMLENBQVdHLElBQVgsR0FDSixLQUFLSCxLQUFMLENBQVdHLElBRFAsR0FFSixDQUNFO0FBQ0VDLFlBQUksRUFBRSxRQURSO0FBRUVELFlBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWI7QUFGUixPQURGLEVBS0U7QUFDRUMsWUFBSSxFQUFFLFNBRFI7QUFFRUQsWUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYjtBQUZSLE9BTEYsRUFTRTtBQUNFQyxZQUFJLEVBQUUsUUFEUjtBQUVFRCxZQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsRUFBWSxFQUFaO0FBRlIsT0FURixDQUhPO0FBa0JYRSxhQUFPLEVBQUU7QUFDUEMsYUFBSyxFQUFFO0FBQ0xDLGNBQUksRUFBRSxLQUREO0FBRUxDLGdCQUFNLEVBQUUsR0FGSDtBQUdMQyxpQkFBTyxFQUFFO0FBQ1BDLGdCQUFJLEVBQUU7QUFEQztBQUhKLFNBREE7QUFRUEMsbUJBQVcsRUFBRTtBQUNYQyxhQUFHLEVBQUU7QUFDSEMsc0JBQVUsRUFBRSxLQURUO0FBRUhDLHVCQUFXLEVBQUUsS0FGVjtBQUdIQyx1QkFBVyxFQUFFO0FBSFY7QUFETSxTQVJOO0FBZVBDLGtCQUFVLEVBQUU7QUFDVkMsaUJBQU8sRUFBRTtBQURDLFNBZkw7QUFrQlBDLGNBQU0sRUFBRTtBQUNOUixjQUFJLEVBQUUsSUFEQTtBQUVOUyxlQUFLLEVBQUUsQ0FGRDtBQUdOQyxnQkFBTSxFQUFFLENBQUMsYUFBRDtBQUhGLFNBbEJEO0FBdUJQQyxjQUFNLEVBQUU7QUFDTlgsY0FBSSxFQUFFLEtBREE7QUFFTlksa0JBQVEsRUFBRSxNQUZKO0FBR05DLGlCQUFPLEVBQUU7QUFDUEosaUJBQUssRUFBRSxFQURBO0FBRVBYLGtCQUFNLEVBQUU7QUFGRCxXQUhIO0FBT05nQixvQkFBVSxFQUFFO0FBQ1ZYLHNCQUFVLEVBQUUsRUFERjtBQUVWWSxvQkFBUSxFQUFFO0FBRkE7QUFQTixTQXZCRDtBQW1DUEMsYUFBSyxFQUFFO0FBQ0xDLG9CQUFVLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQURQO0FBRUxDLGdCQUFNLEVBQUU7QUFDTkMsaUJBQUssRUFBRTtBQUNMVCxvQkFBTSxFQUFFLFNBREg7QUFFTEUsc0JBQVEsRUFBRSxNQUZMO0FBR0xRLHdCQUFVLEVBQUUsU0FIUDtBQUlMQyx3QkFBVSxFQUFFO0FBSlA7QUFERDtBQUZILFNBbkNBO0FBOENQQyxhQUFLLEVBQUU7QUFDTEosZ0JBQU0sRUFBRTtBQUNOQyxpQkFBSyxFQUFFO0FBQ0xULG9CQUFNLEVBQUUsU0FESDtBQUVMRSxzQkFBUSxFQUFFLE1BRkw7QUFHTFEsd0JBQVUsRUFBRSxTQUhQO0FBSUxDLHdCQUFVLEVBQUU7QUFKUDtBQUREO0FBREgsU0E5Q0E7QUF3RFBYLGNBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBeEREO0FBeURQYSxZQUFJLEVBQUU7QUFDSkMsaUJBQU8sRUFBRTtBQURMLFNBekRDO0FBNERQQyxlQUFPLEVBQUU7QUFDUEMsV0FBQyxFQUFFO0FBQ0RDLHFCQUFTLEVBQUUsVUFBVUMsR0FBVixFQUFlO0FBQ3hCLHFCQUFPLE9BQU9BLEdBQVAsR0FBYSxZQUFwQjtBQUNEO0FBSEE7QUFESTtBQTVERjtBQWxCRSxLQUFiO0FBdUZEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCx3QkFDRTtBQUFLLFFBQUUsRUFBQyxPQUFSO0FBQUEsNkJBQ0UscUVBQUMsdURBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3RDLEtBQUwsQ0FBV0ksT0FEdEI7QUFFRSxjQUFNLEVBQUUsS0FBS0osS0FBTCxDQUFXQyxNQUZyQjtBQUdFLFlBQUksRUFBQyxLQUhQO0FBSUUsY0FBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVVEOztBQXhHeUM7O0FBMkc3Qk4sNEVBQWYiLCJmaWxlIjoiLi9zcmMvdWVuYS9hbmFseXRpY3MvQ3VzdG9tZXJNYXBrbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gXCJyZWFjdC1hcGV4Y2hhcnRzXCI7XHJcblxyXG5jbGFzcyBDdXN0b21lck1hcGttIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlcmllczogdGhpcy5wcm9wcy5kYXRhXHJcbiAgICAgICAgPyB0aGlzLnByb3BzLmRhdGFcclxuICAgICAgICA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiSW5jb21lXCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogWzgwLCAyNCwgODAsIDkwXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiRXhwZW5zZVwiLFxyXG4gICAgICAgICAgICAgIGRhdGE6IFs0MCwgNjAsIDIwLCA2MF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIk90aGVyc1wiLFxyXG4gICAgICAgICAgICAgIGRhdGE6IFsyMCwgMTcsIDUsIDIwXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcblxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgIGJhcjoge1xyXG4gICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgY29sdW1uV2lkdGg6IFwiNjAlXCIsXHJcbiAgICAgICAgICAgIGVuZGluZ1NoYXBlOiBcInJvdW5kZWRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgY29sb3JzOiBbXCJ0cmFuc3BhcmVudFwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpdGVtTWFyZ2luOiB7XHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IDEwLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogMTAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIldlZWsxXCIsIFwiV2VlazJcIiwgXCJXZWVrM1wiLCBcIldlZWs0XCJdLFxyXG4gICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgY29sb3JzOiBcIiM3ODc4NzhcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJQb3BwaW5zXCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBjb2xvcnM6IFwiIzc4Nzg3OFwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlBvcHBpbnNcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3JzOiBbXCIjZmY3MjBkXCIsIFwiIzc4Nzg3OFwiLCBcIiNDNEM0QzRcIl0sXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiJCBcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJjaGFydFwiPlxyXG4gICAgICAgIDxSZWFjdEFwZXhDaGFydFxyXG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfVxyXG4gICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cclxuICAgICAgICAgIHR5cGU9XCJiYXJcIlxyXG4gICAgICAgICAgaGVpZ2h0PXszNTB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJNYXBrbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/uena/analytics/CustomerMapkm.js\n");

/***/ })

};;