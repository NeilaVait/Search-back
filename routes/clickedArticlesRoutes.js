const express = require('express');
const Article = require('../model/articleDetails');
const router = express.Router();

// add clicked article details
router.post('/api/articleDetails/new', async (req, res) => {
  const articleDetailsData = req.body;
  const clickedArticleDetails = new Article(req.body);

  try {
    const clickedArticleResult = await clickedArticleDetails.save();
    console.log(clickedArticleResult);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
