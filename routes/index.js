var express = require('express');
var router = express.Router();

let products = [
  {
    name : 'IPHONE',
    category : 'Mobile',
    description : 'This is a good phone!',
    image : 'https://cdn.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg'
  },
  {
    name : 'Samsung',
    category : 'Mobile',
    description : 'This is a good phone!',
    image : 'https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-ultra-s908-413016-sm-s908ezwginu-530969260?$650_519_PNG$'
  },
  {
    name : 'POCO',
    category : 'Mobile',
    description : 'This is a good phone!',
    image : 'https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_neu.jpeg'
  },
  {
    name : 'Huawie',
    category : 'Mobile',
    description : 'This is a good phone!',
    image : 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/homepage/new-homepage/model-banner/nova10-pro.png'
  },
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , products});
});

module.exports = router;
