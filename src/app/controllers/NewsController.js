class NewsController {
    // [GET]/news
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('new detail');
    }
}
module.exports = new NewsController();
