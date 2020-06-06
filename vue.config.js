module.exports = {
  "devServer": {
    "proxy": {
      "^/account/*": {
        "target": "http://localhost:5000"
      },
      "/user_images": {
        "target": "http://localhost:5000"
      },
      "^/check-token": {
        "target": "http://localhost:5000",
      },
      "/home/check-token": {
        "target": "http://localhost:5000",
        pathRewrite:{
          '/home/check-token':'/check-token'
        }
      },
      "^/delete-token": {
        "target": "http://localhost:5000"
      },
      "/home/delete-token": {
        "target": "http://localhost:5000",
        pathRewrite:{
          '/home/delete-token':'/delete-token'
        }
      
      },
      "/home/account/picture": {
        "target": "http://localhost:5000",
        pathRewrite:{
          '/home/account/picture':'/account/picture'
        }
      },
      "/home/account/changed-pass": {
        "target": "http://localhost:5000",
        pathRewrite:{
          '/home/account/changed-pass':'/account/changed-pass'
        },
      },
        "/home/find": {
          "target": "http://localhost:5000",
          pathRewrite:{
            '/home/find':'/find'
          }
      },

      
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
