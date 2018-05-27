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
            <h1>Contact Us</h1>
            <p>Have a question about our river adventures? We are here to help make this thrill seeking decisions a breeze! Feel free to reach out to us and we'll answer your questions usually within 1 business day.</p>
            <div class="contactUsForm">
                <form id="contactUsSubmission" action"" method="post">
                    <fieldset>
                        <p><label><span>Full Name:</span><input name="fullName" type="text" placeholder="Full Name" pattern="[a-zA-Z -]{5,}" required></label></p>
                        <p><label><span>Email:</span><input name="email" type="email" placeholder="example@email.com" autocomplete="off" required></label></p>
                        <p><label><span>Telphone:</span><input name="telephone" type="tel" placeholder="(123)555-5555"></label></p>
                        <input type="submit" value="Submit" class="formButton">
                    </fieldset>
                </form>
            </div>
            <div class="contactInfo">
                <table>
                    <tr>
                        <td>Phone:</td><td>(208) 555-1234</td>
                    </tr>
                    <tr>
                        <td>Email:</td><td><a href="mailto:reservations@salmonra.com">reservations@salmonra.com</a></td>
                    </tr>
                    <tr>
                        <td>Address:</td><td><a href="https://www.google.com/maps/place/1000+Main+St,+Riggins,+ID+83549/@45.417557,-116.316707,16z/data=!4m5!3m4!1s0x54a6c56be892013d:0xf34792f82bc2a30b!8m2!3d45.4175572!4d-116.3167066?ll=45.417557,-116.316707&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=1000+Main+St+Riggins,+ID+83549" target="_blank">1000 S Main St., Riggins, ID</a></td>
                    </tr>
                </table>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.5924582913567!2d-116.31889528444412!3d45.4175571791005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a6c56be892013d%3A0xf34792f82bc2a30b!2s1000+Main+St%2C+Riggins%2C+ID+83549!5e0!3m2!1sen!2sus!4v1499900468768" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
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