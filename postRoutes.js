const { Post } = require("./models");

const routes = require("express").Router();

routes.post("/api", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json({
      post,
    });
  } catch (error) {
    console.log(error);
  }
});
routes.get("/api", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({
      post,
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = routes;
