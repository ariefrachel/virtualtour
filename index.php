<?php 
    include("blog/path.php");
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
    <link href='https://fonts.googleapis.com/css?family=Playfair Display' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/fontawesome.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <title>Lembah Rembulan</title>
</head>

<body>
    <div id="wrapper">
        <div id="home">
            <nav id="nav" class="position-fixed navbar navbar-expand-lg px-5">
                <div class="container-fluid">
                    <a href="#" style="text-decoration: none;" class="text-dark">LembahRembulan</a>
                    <button class="navbar-light navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="nav navbar-nav mx-auto">
                            <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                            <li class="nav-item"><a href="#gallery" class="nav-link">Gallery</a></li>
                            <li class="nav-item"><a href="#blog" class="nav-link">Blog</a></li>
                            <li class="nav-item"><a href="#review" class="nav-link">Review</a></li>
                            <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                        </ul>
                        <a href="tour/index.html">
                            <button class="btn btn-warning btn-sm px-3 fs-6">Mulai Tur</button>
                        </a>
                    </div>
                </div>
            </nav>
            <div class="htext">
                <div class="text-center">
                    <div class="wow fadeInDown">
                        <h1 class="text-white">Lembah Rembulan</h1>
                        <p class="text-white">Desa Rembul, Kec. Bojong, Kab.Tegal 52465</p>
                    </div>
                    <div class="wow fadeInUp">
                        <a href="tour/index.html"><button id="mulai"
                                class="btn btn-warning btn-lg px-4 py-2 fs-5 mx-2 my-3">Mulai
                                Tur</button></a>
                        <a href="#about"><button id="kenalan"
                                class="btn btn-warning btn-lg px-4 py-2 fs-5 mx-2 my-3">Kenalan</button></a>
                    </div>
                </div>
            </div>
            <div class="headerImg">
                <img src="assets/images/header/header.png" alt="header">
            </div>
        </div>
        <div id="about">
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="wow fadeInUp col-10 col-sm-8 col-lg-6">
                        <img src="assets/images/about/about.png" class="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes" width="400" height="300" loading="lazy">
                    </div>
                    <div class="col-lg-6">
                        <h2 class="wow fadeInUp">Tentang Kami</h2>
                        <br>
                        <div class="aboutlist wow fadeInUp">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">Bio</button>
                                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-profile" type="button" role="tab"
                                        aria-controls="nav-profile" aria-selected="false">Sejarah</button>
                                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-contact" type="button" role="tab"
                                        aria-controls="nav-contact" aria-selected="false">Peta dan Rute</button>
                                </div>
                            </nav>
                            <br>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                    aria-labelledby="nav-home-tab">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat
                                        nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia
                                        deserunt
                                        mollit anim id est laborum.</p>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel"
                                    aria-labelledby="nav-profile-tab">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel"
                                    aria-labelledby="nav-contact-tab">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.560012676343!2d109.16457711436999!3d-7.176748872420477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f93c4e3e46303%3A0xf2c2d17c504917f0!2sWISATA%20LEMBAH%20REMBULAN%20DESA%20REMBUL!5e0!3m2!1sen!2sid!4v1618300174299!5m2!1sen!2sid"
                                        width="500" height="250" style="border:0;" allowfullscreen=""
                                        loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="gallery" class="container col-xxl-8 px-4 py-5">
            <div class="galleryTitle d-flex justify-content-between align-items-center">
                <h2>Galeri</h2>
                <a href="#" style="color:#0b91a3;text-decoration:none">Lihat semua</a>
            </div>
            <br>
            <div class="row wow fadeInUp ">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                        class="w-100 shadow-1-strong rounded mb-4" alt="" />

                    <img src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
                        class="w-100 shadow-1-strong rounded mb-4" alt="" />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
                        class="w-100 shadow-1-strong rounded mb-4" alt="" />

                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                        class="w-100 shadow-1-strong rounded mb-4" alt="" />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                        class="w-100 shadow-1-strong rounded mb-4" alt="" />

                    <img src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
                        class="w-100 shadow-1-strong rounded mb-4" alt="" />
                </div>
            </div>
        </div>
        <div id="blog" class="wow fadeInUp container col-xxl-8 px-4 py-5">
            <div class="galleryTitle d-flex justify-content-between align-items-center">
                <h2>Blog</h2>
                <a href="blog/blog.php" target="_blank" style="color:#0b91a3;text-decoration:none">Lihat
                    semua</a>
            </div>
            <br>
            <div class="post-slider">
                <div class="post-wrapper">
                    <?php foreach ($posts as $post): ?>
                    <div class="post">
                        <img src="<?php echo BASE_URL . '/assets/images/' . $post['image']; ?>" alt=""
                            class="slider-image">
                        <div class="post-info px-3 py-2">
                            <h4><a style="text-decoration:none;color:#333"
                                    href="blog/single.php?id=<?php echo $post['id']; ?>">
                                    <?php echo $post['title']; ?></a>
                            </h4>
                            <i class="far fa-calendar">
                                <?php echo date('F j, Y', strtotime($post['created_at'])); ?></i>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <div id="review"></div>
        <div id="contact"></div>
        <iframe style="margin-top:32px;"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.560012676343!2d109.16457711436999!3d-7.176748872420477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f93c4e3e46303%3A0xf2c2d17c504917f0!2sWISATA%20LEMBAH%20REMBULAN%20DESA%20REMBUL!5e0!3m2!1sen!2sid!4v1618300174299!5m2!1sen!2sid"
            width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <footer></footer>
    </div>
</body>
<script src="js/wow.js"></script>
<script>
new WOW().init();
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="js/slick.min.js"></script>
<script src="js/tab.js"></script>
<script src="js/blog.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/three.min.js"></script>
<script src="js/panolens.min.js"></script>
<script src="js/panoHeader.js"></script>

</html>