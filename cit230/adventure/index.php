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
            <h1>Welcome to Salmon River Adventures!</h1>
            <picture class="homeImage">
                <source media="(max-width: 700px)" srcset="images/small/rafting-883523_960_720-small.jpg">
                <source media="(max-width: 1439px)" srcset="images/medium/rafting-883523_960_720-medium.jpg">
                <source media="(min-width: 1440px)" srcset="images/large/rafting-883523_960_720.jpg">
                <img src="images/rafting-883523_960_720.jpg" alt="Rafts going down white water rapids">
            </picture>
            <p>Known as <strong>"The River of No Return"</strong>, Idaho’s Wild and Scenic Salmon River cuts through the heart of the Frank Church River of No Return Wilderness, the largest wilderness in the lower 48 states. The most massive river in Idaho and one of the largest in North America, the Salmon wends its way through the second deepest canyon on the continent. It passes through 85 miles of remote wilderness, and is a world-renown river adventure, offering one a unique chance to disconnect from civilization and become immersed in a virtually untouched natural wonder.</p>
            <hr>
            <h2>River Adventures</h2>
            <p>Let Salmon River Adventures be your guide while traversing down the Salmon River. We offer all kinds of excellerating guided adventure tours! From braving the white water rapids on a raft/kayak, to taking the more scenic route on our many world class paddleboards. Not into the thrill seeking adventure? Try out one of our affordable fishing boats and take an easy day just drifting along. 
            </p>
            <hr>
            <h2>Contact Us</h2>
            <p>Visit our <a href="contact_us.php">Contact Us</a> page if you have any questions or for more detailed pricing. If you are a true adventurer and want to get started right away, click on the "Book Now" below to get started!</p>
            <button type = "button" onclick="window.location.href='reservations.php'">Book Now!</button>
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
