<?php 
include("path.php");
include(ROOT_PATH . "/app/controllers/topics.php");

$posts = array();
$postsTitle = 'Recent Posts';

if (isset($_GET['t_id'])) {
  $posts = getPostsByTopicId($_GET['t_id']);
  $postsTitle = "You searched for posts under '" . $_GET['name'] . "'";
} else if (isset($_POST['search-term'])) {
  $postsTitle = "You searched for '" . $_POST['search-term'] . "'";
  $posts = searchPosts($_POST['search-term']);
} else {
  $posts = getPublishedPosts();
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Candal|Lora" rel="stylesheet">

    <title>Blog</title>
    <style>
    * {
        font-family: 'Roboto';
        box-sizing: border-box;
    }

    body {
        background: #f5f6f8;
    }

    .wrapper {
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    }

    .text {
        padding: 4em;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        margin-top: 16px;
        background: #fff;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    h1,
    h2 {
        font-family: 'Playfair Display';
    }

    h2 {
        font-size: 21px;
    }

    p {
        font-family: 'Roboto';
        font-size: 18px;
        opacity: .7;
    }

    .post img {
        width: 50%;
    }


    .thumb {
        margin-top: 16px;
        background: #fff;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    }

    .read-more {
        background: none;
        border: none;
        color: #0b91a3;
    }

    .return {
        padding: 2em;
        background: #fff;
    }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="return d-flex">
            <a class="mx3" href="../index.php"><i class="fas fa-home mx-3"></i></a>
            <a class="mx-3" href="blog.php" style="opacity:.7"> | Blog</a>
        </div>
        <?php foreach ($posts as $post): ?>
        <div class="post clearfix">
            <div class="row">
                <div class="thumb d-flex py-3 px-3 col-6">
                    <img style="width:300px;" src="<?php echo BASE_URL . '/assets/images/' . $post['image']; ?>" alt=""
                        class="post-image">
                    <div class="post-preview mx-4">
                        <h2><a style="text-decoration: none;color:#333;font-size:18px;"
                                href="single.php?id=<?php echo $post['id']; ?>"><?php echo $post['title']; ?></a>
                        </h2>
                        <p class="preview-text">
                            <?php echo html_entity_decode(substr($post['body'], 0, 150) . '...'); ?>
                        </p>
                        <i style="font-size:12px;font-weight:bold" class="far fa-calendar">
                            <?php echo date('F j, Y', strtotime($post['created_at'])); ?></i>
                        <a href="single.php?id=<?php echo $post['id']; ?>" class="btn read-more">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>



    <!--div class="page-wrapper">
        <div class="postContainer">
            <?php foreach ($posts as $post): ?>
            <div class="post">
                <img src="<?php echo BASE_URL . '/assets/images/' . $post['image']; ?>" alt="" class="slider-image">
                <div class="post-info">
                    <h4><a href="single.php?id=<?php echo $post['id']; ?>"><?php echo $post['title']; ?></a></h4>
                    <i class="far fa-calendar"> <?php echo date('F j, Y', strtotime($post['created_at'])); ?></i>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <!-div class="content clearfix">

            <div class="main-content">
                <h1 class="recent-post-title"><?php echo $postsTitle ?></h1>
                <?php foreach ($posts as $post): ?>
                <div class="post clearfix">
                    <img src="<?php echo BASE_URL . '/assets/images/' . $post['image']; ?>" alt="" class="post-image">
                    <div class="post-preview">
                        <h2><a href="single.php?id=<?php echo $post['id']; ?>"><?php echo $post['title']; ?></a></h2>
                        <i class="far fa-user"> <?php echo $post['username']; ?></i>
                        &nbsp;
                        <i class="far fa-calendar"> <?php echo date('F j, Y', strtotime($post['created_at'])); ?></i>
                        <p class="preview-text">
                            <?php echo html_entity_decode(substr($post['body'], 0, 150) . '...'); ?>
                        </p>
                        <a href="single.php?id=<?php echo $post['id']; ?>" class="btn read-more">Read More</a>
                    </div>
                </div>
                <?php endforeach; ?>



            </div>
            <div class="sidebar">

                <div class="section search">
                    <h2 class="section-title">Search</h2>
                    <form action="index.php" method="post">
                        <input type="text" name="search-term" class="text-input" placeholder="Search...">
                    </form>
                </div>


                <div class="section topics">
                    <h2 class="section-title">Topics</h2>
                    <ul>
                        <?php foreach ($topics as $key => $topic): ?>
                        <li><a
                                href="<?php echo BASE_URL . '/index.php?t_id=' . $topic['id'] . '&name=' . $topic['name'] ?>"><?php echo $topic['name']; ?></a>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>

            </div>

        </div-->
    <!-- // Content -->

    </div-->

</body>

</html>