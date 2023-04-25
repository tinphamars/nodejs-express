
class IndexController {
  index(req, res) {
    res.render('index.ejs', { title: "Trang chu" });
  }
}
module.exports = new IndexController()