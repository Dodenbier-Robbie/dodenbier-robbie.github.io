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
            <h1>Fishing</h1>
            <picture class="homeImage">
                <source media="(max-width: 700px)" srcset="images/small/rafting-1377057_960_720-small.jpg">
                <source media="(max-width: 1439px)" srcset="images/medium/rafting-1377057_960_720-medium.jpg">
                <source media="(min-width: 1440px)" srcset="images/large/rafting-1377057_960_720.jpg">
                <img src="images/rafting-1377057_960_720.jpg" alt="Rafts going down white water rapids">
            </picture>
            <p>Are you an avid fisher and want to enjoy all the large fish the salmon river has to offer? Salmon River adventures has you covered! Rentals are based on a single person and is not limited to a large party.
            </p>
            <h3>Level I - $20/$55</h3>
            <p>Designed for beginners. No guide will be provided for this package but we welcome any questions and we are happy to provide suggestions on where to travel. Trip packages include both a 1 day and a 3 day option.
            </p>
            <h3>Level II - $30/$75</h3>
            <p>Designed for intermediate to high level beginners. Guides are provided with this ticket package, but will be shared amoung a group of like adventurers. Trip packages include both a 1 day and a 3 day option.
            </p>
            <h3>Level III - $45/$100</h3>
            <p>Designed for advance level, or those who would like a dedicated guide. With this trip package, our guides will take you to the best spots on the river to catch amazing fish. Availibility is limited, so book early to reserver your spot. Trip packages include both a 1 day and 3 day option.
            </p>
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