"use strict";

var Feature = require("../../models/Feature");

var addFeatureImage = function addFeatureImage(req, res) {
  var image, featureImages;
  return regeneratorRuntime.async(function addFeatureImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          image = req.body.image;
          console.log(image, "image");
          featureImages = new Feature({
            image: image
          });
          _context.next = 6;
          return regeneratorRuntime.awrap(featureImages.save());

        case 6:
          res.status(201).json({
            success: true,
            data: featureImages
          });
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            success: false,
            message: "Some error occured!"
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var getFeatureImages = function getFeatureImages(req, res) {
  var images;
  return regeneratorRuntime.async(function getFeatureImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Feature.find({}));

        case 3:
          images = _context2.sent;
          res.status(200).json({
            success: true,
            data: images
          });
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            success: false,
            message: "Some error occured!"
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var deleteFeatureImage = function deleteFeatureImage(req, res) {
  var id, deleted;
  return regeneratorRuntime.async(function deleteFeatureImage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Feature.findByIdAndDelete(id));

        case 4:
          deleted = _context3.sent;

          if (deleted) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            success: false,
            message: "Feature image not found"
          }));

        case 7:
          res.status(200).json({
            success: true,
            message: "Feature image deleted"
          });
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            success: false,
            message: "Some error occured!"
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

module.exports = {
  addFeatureImage: addFeatureImage,
  getFeatureImages: getFeatureImages,
  deleteFeatureImage: deleteFeatureImage
};
//# sourceMappingURL=feature-controller.dev.js.map
