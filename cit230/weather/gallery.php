<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>
        <link rel="stylesheet" href="styles/gallery.css">
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>
        </header>
        <nav>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/nav.php'; ?>
        </nav>
        <main class="gridContainer">
           <div>
                <picture>
                    <source media="(max-width: 860px)" srcset="images/large/photo_1-large.jpg 1.5x">
                    <source media="(max-width: 1439px)" srcset="images/large/photo_1-large.jpg 1x">
                    <source media="(min-width: 1440px)" srcset="images/large/photo_1-large.jpg 1x">
                    <img src="images/photo_1.jpg" alt="Hurrican from space">
                </picture>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           <div>
                <picture>
                    <source media="(max-width: 860px)" srcset="images/large/photo_2-large.jpg 1.5x">
                    <source media="(max-width: 1439px)" srcset="images/large/photo_2-large.jpg 1x">
                    <source media="(min-width: 1440px)" srcset="images/large/photo_2-large.jpg 1x">
                    <img src="images/photo_2.jpg" alt="Car driving in flood waters">
               </picture>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           <div>
                <picture>
                    <source media="(max-width: 860px)" srcset="images/large/photo_3-large.jpg 1.5x">
                    <source media="(max-width: 1439px)" srcset="images/large/photo_3-large.jpg 1x">
                    <source media="(min-width: 1440px)" srcset="images/large/photo_3-large.jpg 1x">
                    <img src="images/photo_3.jpg" alt="Icy road">
               </picture>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           <div>
                <picture>
                    <source media="(max-width: 860px)" srcset="images/large/photo_4-large.jpg 1.5x">
                    <source media="(max-width: 1439px)" srcset="images/large/photo_4-large.jpg 1x">
                    <source media="(min-width: 1440px)" srcset="images/large/photo_4-large.jpg 1x">
                    <img src="images/photo_4.jpg" alt="Tornado touching down">
               </picture>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           <div>
                <picture>
                    <source media="(max-width: 860px)" srcset="images/large/photo_5-large.jpg 1.5x">
                    <source media="(max-width: 1439px)" srcset="images/large/photo_5-large.jpg 1x">
                    <source media="(min-width: 1440px)" srcset="images/large/photo_5-large.jpg 1x">
                    <img src="images/photo_5.jpg" alt="Lightning strike">
               </picture>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           <div>
                <picture>
                    <source media="(max-width: 860px)" srcset="images/large/photo_6-large.jpg 1.5x">
                    <source media="(max-width: 1439px)" srcset="images/large/photo_6-large.jpg 1x">
                    <source media="(min-width: 1440px)" srcset="images/large/photo_6-large.jpg 1x">
                    <img src="images/photo_6.jpg" alt="Clouds over the farm land">
               </picture>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>
        </footer>
        <script>
            $(document).ready(function(){
                var URL = $(location).attr('pathname');
                if (URL == '/index.php'){
                    $('.flexItem1 a').addClass('active');
                }
                if (URL == '/franklin.php'){
                    $('.flexItem2 a').addClass('active');
                }
                if (URL == '/greenville.php'){
                    $('.flexItem3 a').addClass('active');
                }
                if (URL == '/springfield.php'){
                    $('.flexItem4 a').addClass('active');
                }
                if (URL == '/storm_center.php'){
                    $('.flexItem5 a').addClass('active');
                }
                if (URL == '/gallery.php'){
                    $('.flexItem6 a').addClass('active');
                }
            });
        </script>
    </body>
</html>