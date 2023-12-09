const express = require("express");
const { SignupController, LoginController } = require("../controller/authController");
const { createPostController, getPostController, singlePostController, updatePostController, deletePostController } = require("../controller/postController");
const router = express.Router();


// auths

router.post("/api/signup", SignupController);
router.post("/api/login", LoginController);





// posts

router.post("/api/createpost", createPostController);
router.get("/api/getpost", getPostController);
router.get("/api/singlepost/:id", singlePostController);
router.put("/api/updatepost/:id", updatePostController);
router.delete("/api/deletepost/:id", deletePostController);














module.exports = router;