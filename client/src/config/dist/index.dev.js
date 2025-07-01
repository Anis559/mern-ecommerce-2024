"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addressFormControls = exports.sortOptions = exports.filterOptions = exports.brandOptionsMap = exports.categoryOptionsMap = exports.shoppingViewHeaderMenuItems = exports.addProductFormElements = exports.loginFormControls = exports.registerFormControls = void 0;
var registerFormControls = [{
  name: "userName",
  label: "User Name",
  placeholder: "Enter your user name",
  componentType: "input",
  type: "text"
}, {
  name: "email",
  label: "Email",
  placeholder: "Enter your email",
  componentType: "input",
  type: "email"
}, {
  name: "password",
  label: "Password",
  placeholder: "Enter your password",
  componentType: "input",
  type: "password"
}];
exports.registerFormControls = registerFormControls;
var loginFormControls = [{
  name: "email",
  label: "Email",
  placeholder: "Enter your email",
  componentType: "input",
  type: "email"
}, {
  name: "password",
  label: "Password",
  placeholder: "Enter your password",
  componentType: "input",
  type: "password"
}];
exports.loginFormControls = loginFormControls;
var addProductFormElements = [{
  label: "Title",
  name: "title",
  componentType: "input",
  type: "text",
  placeholder: "Enter product title"
}, {
  label: "Description",
  name: "description",
  componentType: "textarea",
  placeholder: "Enter product description"
}, {
  label: "Category",
  name: "category",
  componentType: "select",
  options: [{
    id: "men",
    label: "Men"
  }, {
    id: "women",
    label: "Women"
  }, {
    id: "kids",
    label: "Kids"
  }, {
    id: "accessories",
    label: "Accessories"
  }, {
    id: "footwear",
    label: "Footwear"
  }]
}, {
  label: "Brand",
  name: "brand",
  componentType: "select",
  options: [{
    id: "junoonia",
    label: "JUNOONIA"
  }]
}, {
  label: "Price",
  name: "price",
  componentType: "input",
  type: "number",
  placeholder: "Enter product price"
}, {
  label: "Sale Price",
  name: "salePrice",
  componentType: "input",
  type: "number",
  placeholder: "Enter sale price (optional)"
}, {
  label: "Total Stock",
  name: "totalStock",
  componentType: "input",
  type: "number",
  placeholder: "Enter total stock"
}];
exports.addProductFormElements = addProductFormElements;
var shoppingViewHeaderMenuItems = [{
  id: "home",
  label: "Home",
  path: "/shop/home"
}, {
  id: "products",
  label: "Products",
  path: "/shop/listing"
}, {
  id: "men",
  label: "Men",
  path: "/shop/listing"
}, {
  id: "women",
  label: "Women",
  path: "/shop/listing"
}, {
  id: "kids",
  label: "Kids",
  path: "/shop/listing"
}, {
  id: "footwear",
  label: "Footwear",
  path: "/shop/listing"
}, {
  id: "accessories",
  label: "Accessories",
  path: "/shop/listing"
}, {
  id: "search",
  label: "Search",
  path: "/shop/search"
}];
exports.shoppingViewHeaderMenuItems = shoppingViewHeaderMenuItems;
var categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear"
};
exports.categoryOptionsMap = categoryOptionsMap;
var brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M"
};
exports.brandOptionsMap = brandOptionsMap;
var filterOptions = {
  category: [{
    id: "men",
    label: "Men"
  }, {
    id: "women",
    label: "Women"
  }, {
    id: "kids",
    label: "Kids"
  }, {
    id: "accessories",
    label: "Accessories"
  }, {
    id: "footwear",
    label: "Footwear"
  }],
  brand: [{
    id: "nike",
    label: "Nike"
  }, {
    id: "adidas",
    label: "Adidas"
  }, {
    id: "puma",
    label: "Puma"
  }, {
    id: "levi",
    label: "Levi's"
  }, {
    id: "zara",
    label: "Zara"
  }, {
    id: "h&m",
    label: "H&M"
  }]
};
exports.filterOptions = filterOptions;
var sortOptions = [{
  id: "price-lowtohigh",
  label: "Price: Low to High"
}, {
  id: "price-hightolow",
  label: "Price: High to Low"
}, {
  id: "title-atoz",
  label: "Title: A to Z"
}, {
  id: "title-ztoa",
  label: "Title: Z to A"
}];
exports.sortOptions = sortOptions;
var addressFormControls = [{
  label: "Address",
  name: "address",
  componentType: "input",
  type: "text",
  placeholder: "Enter your address"
}, {
  label: "City",
  name: "city",
  componentType: "input",
  type: "text",
  placeholder: "Enter your city"
}, {
  label: "Pincode",
  name: "pincode",
  componentType: "input",
  type: "text",
  placeholder: "Enter your pincode"
}, {
  label: "Phone",
  name: "phone",
  componentType: "input",
  type: "text",
  placeholder: "Enter your phone number"
}, {
  label: "Notes",
  name: "notes",
  componentType: "textarea",
  placeholder: "Enter any additional notes"
}];
exports.addressFormControls = addressFormControls;
//# sourceMappingURL=index.dev.js.map
