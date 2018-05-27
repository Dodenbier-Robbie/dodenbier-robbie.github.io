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
            <h1>References</h1>
            <h2>Images</h2>
            <p>Images provided by:<br><em>Pixabay - <a href="https://pixabay.com/en/photos/rafting/" target="_blank">https://pixabay.com/en/photos/rafting/</a></em>
                <br><em>Inaraft - <a href="https://www.inaraft.com" target="_blank">https://www.inaraft.com</a></em>
                <br><em>Imperial River Co. - <a href="http://deschutesriver.com/" target="_blank">http://deschutesriver.com/</a></em>
                <br><em>The Kenai Peninsula - <a href="https://thekenai.wordpress.com/2014/06/22/whitewater-rafting-six-mile-creek/" target="_blank">https://thekenai.wordpress.com/2014/06/22/whitewater-rafting-six-mile-creek/</a></em></p>
            <h2>Content</h2>
            <p>Content provided by:<br><em><a href="http://idahosalmonriver.org/" target="_blank">http://idahosalmonriver.org/</a></em></p>
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