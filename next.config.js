/*
 * @Description:
 * @Author: lixiaoxin
 * @Date: 2022-04-12 14:30:46
 * @LastEditors: lixiaoxin
 * @LastEditTime: 2022-04-13 16:17:45
 */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "public/css")],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "public/css/variable.scss";
          @import "public/css/mixin.scss";
        `,
      },
    },
  },
};