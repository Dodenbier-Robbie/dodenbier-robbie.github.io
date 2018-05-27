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
            <h1>Paddleboard</h1>
            <picture class="homeImage">
                <source media="(max-width: 700px)" srcset="images/small/paddleboard-small.jpg">
                <source media="(max-width: 1439px)" srcset="images/medium/paddleboard-medium.jpg">
                <source media="(min-width: 1440px)" srcset="images/large/paddleboard-large.jpg">
                <img src="images/Rogue-River-SUP.jpg" alt="Rafts going down white water rapids">
            </picture>
            <p>Paddleboard down a river, are you crazy? Yes, this latest fad has reached Salmon River Adventures and we are exited to offer this new adventure down the river. Our guides will teach you how to use a paddleboard and how to navigate through some challenging rapids. Trip packages are per person and are not limited to any group size.
            </p>
            <h3>Level I - $25/$60</h3>
            <p>Designed for beginners. A guide will teach you how to use the paddleboard and take you to some limited and calm part of the river. Trip packages include both a 1 day and a 3 day option.
            </p>
            <h3>Level II - $40/$90</h3>
            <p>Designed for intermediate to high level beginners. Guides are provided limited instruction, but spend time with you on increasingly difficult parts of the river. Trip packages include both a 1 day and a 3 day option.
            </p>
            <h3>Level III - $50/$115</h3>
            <p>Designed for advance level. Our guides will take you down some serious jaw dropping rapids exclusively for those seeking a thrill! Helmets will be provided. Trip packages include both a 1 day and 3 day option.
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