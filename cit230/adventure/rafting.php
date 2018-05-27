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
            <h1>Rafting</h1>
            <picture class="homeImage">
                <source media="(max-width: 700px)" srcset="images/small/rafting-2071883_960_720-small.jpg">
                <source media="(max-width: 1439px)" srcset="images/medium/rafting-2071883_960_720-medium.jpg">
                <source media="(min-width: 1440px)" srcset="images/large/rafting-2071883_960_720.jpg">
                <img src="images/rafting-2071883_960_720.jpg" alt="Rafts going down white water rapids">
            </picture>
            <p>Ready to enjoy the trill of a lifetime? There is no better way to experience the Salmon River than to brave the white water rapids in one of our world class rafts! Salmon River Adventures offers guided tours to match any skill level and any thrill seeker! Whether you are looking for a casual gentle trip down the river or a bone chilling jaunt through the hair raising rapids, we've got your covered. Please find below a detail description of the services we offer. The price quoted is per person with a minimum of 4 people per group. Each package below includes one river guide and rafting equipment for up to 8 people.
            </p>
            <h3>Level I - $30/$75</h3>
            <p>Designed for beginners. Our guides will take you down the river at a casual pace, only attacking the more basic white water rapids. No previous rafing experience required. Trip packages include both a 1 day and 3 day option.
            </p>
            <h3>Level II - $45/$100</h3>
            <p>Designed for intermediate to high level beginners. Our guides will take you down a more challenging course down the river, attacking a higher difficulty white water rapids. Little rafing experience required. Trip packages include both a 1 day and 3 day option.
            </p>
            <h3>Level III - $60/$125</h3>
            <p>Designed for advance level or extreme thrill seekers. Our guides will take you down the most challenging course down the river, attacking white water rapids that you only see in the movies! Only advanced rafter need apply. Trip packages include both a 1 day and 3 day option.
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