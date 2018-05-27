<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
        </header>
        <nav>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/nav.php'; ?>
        </nav>
        <main>
            <video controls autoplay>
                <source src="video/Salmon-River-Adventures.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
        <script type="text/javascript" src="scripts/hamburger.js"></script>
        <script type="text/javascript" src="scripts/wayFinder.js"></script>
        <script>
            $(function(){

                $('.navigation > li').hover(function(){
                    $(this).children("ul").slideToggle(200);
                })
            })
	   </script>
    </body>
</html>