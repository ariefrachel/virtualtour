<?php include("path.php"); ?>
<?php include(ROOT_PATH . '/app/controllers/posts.php');

if (isset($_GET['id'])) {
  $post = selectOne('posts', ['id' => $_GET['id']]);
}
$topics = selectAll('topics');
$posts = selectAll('posts', ['published' => 1]);


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href='https://fonts.googleapis.com/css?family=Playfair Display' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

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
            <i class="fas fa-home mx-3"></i>
            <a class="mx-3" href="blog.php" style="opacity:.7">Blog | </a>
            <a class="mx-3" href="single.php"><?php echo $post['title']; ?></a>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="text">
                    <h1 class="post-title"><?php echo $post['title']; ?></h1>
                    <br>
                    <div class="post-content">
                        <?php echo html_entity_decode($post['body']); ?>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <?php foreach ($posts as $post): ?>
                <div class="post clearfix">
                    <div class="thumb d-flex py-3 px-3">
                        <img src="<?php echo BASE_URL . '/assets/images/' . $post['image']; ?>" alt=""
                            class="post-image">
                        <div class="post-preview mx-4">
                            <h2><a style="text-decoration: none;color:#333;font-size:18px;"
                                    href="single.php?id=<?php echo $post['id']; ?>"><?php echo $post['title']; ?></a>
                            </h2>
                            <i style="font-size:12px;font-weight:bold" class="far fa-calendar">
                                <?php echo date('F j, Y', strtotime($post['created_at'])); ?></i>
                            <a href="single.php?id=<?php echo $post['id']; ?>" class="btn read-more">Read More</a>
                        </div>
                    </div>

                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>


</body>

</html>