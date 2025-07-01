"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteFeatureImage = exports.addFeatureImage = exports.getFeatureImages = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isLoading: false,
  featureImageList: []
};
var getFeatureImages = (0, _toolkit.createAsyncThunk)("/order/getFeatureImages", function _callee() {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:5000/api/common/feature/get"));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.getFeatureImages = getFeatureImages;
var addFeatureImage = (0, _toolkit.createAsyncThunk)("/order/addFeatureImage", function _callee2(image) {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:5000/api/common/feature/add", {
            image: image
          }));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.addFeatureImage = addFeatureImage;
var deleteFeatureImage = (0, _toolkit.createAsyncThunk)("/order/deleteFeatureImage", function _callee3(id) {
  var response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("http://localhost:5000/api/common/feature/delete/".concat(id)));

        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", _objectSpread({
            id: id
          }, response.data));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.deleteFeatureImage = deleteFeatureImage;
var commonSlice = (0, _toolkit.createSlice)({
  name: "commonSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(getFeatureImages.pending, function (state) {
      state.isLoading = true;
    }).addCase(getFeatureImages.fulfilled, function (state, action) {
      state.isLoading = false;
      state.featureImageList = action.payload.data;
    }).addCase(getFeatureImages.rejected, function (state) {
      state.isLoading = false;
      state.featureImageList = [];
    }).addCase(deleteFeatureImage.fulfilled, function (state, action) {
      state.featureImageList = state.featureImageList.filter(function (img) {
        return img._id !== action.payload.id;
      });
    });
  }
});
var _default = commonSlice.reducer;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
