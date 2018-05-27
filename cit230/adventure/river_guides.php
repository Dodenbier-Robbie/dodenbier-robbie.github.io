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
            <h1>River Guides</h1>
            <article class="riverGuides">
                <div class="containerImage">
                    <picture class="homeImage">
                        <source media="(max-width: 700px)" srcset="images/small/raft-1429872_960_720-small.jpg">
                        <source media="(max-width: 1439px)" srcset="images/medium/raft-1429872_960_720-medium.jpg">
                        <source media="(min-width: 1440px)" srcset="images/large/raft-1429872_960_720.jpg">
                        <img src="images/raft-1429872_960_720.jpg" alt="River guide leading raft down rapids">
                    </picture>
                </div>
                <div class="containerMainStory">
                    <h2>Our Guides</h2>
                    <p>Salmon River Adventure prides itself on offering world class river guides to make your trip down the river exciting and safe. Combined they have logged 30 years experience and have experienced everything the river could throw at them. When you pick to experience the river with Salmon River Adventures, we pride ourselves on making sure you are family, and who doesn't like to experience fun with their family? So from our family to yours, here are our award winning river guides.</p>
                </div>
            </article>
            <hr>
            <article class="guide1Story">
                <div class="guide1Data">
                    <h3>Mark Sanchez</h3>
                    <table>
                        <tr>
                            <td>Certification Level</td>
                            <td>Raft Master</td>
                        </tr>
                        <tr>
                            <td>Years of Expeirence</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><a href="mailto:mark@salmonra.com">mark@salmonra.com</a></td>
                        </tr>
                    </table>
                </div>
                <div class="guide1Image">
                    <picture>
                        <source media="(max-width: 860px)" srcset="images/small/mark-sanchez-small.jpg">
                        <source media="(max-width: 1439px)" srcset="images/medium/mark-sanchez-medium.jpg">
                        <source media="(min-width: 1440px)" srcset="images/large/mark-sanchez-large.jpg">
                        <img src="images/gallery-guides-01.jpg" alt="Guide on raft">
                    </picture>
                </div>
                <p>Mark has been with Salmon River Adventure for 15 years and is Raft Master certified. He has successfully guided over 5,000 guided tours down the river and knows how to have a fun time! </p>
            </article>
            <hr>
            <article class="guide2Story">
                <div class="guide2Data">
                    <h3>Phil Nutt</h3>
                    <table>
                        <tr>
                            <td>Certification Level</td>
                            <td>Raft Master</td>
                        </tr>
                        <tr>
                            <td>Years of Expeirence</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><a href="mailto:phil@salmonra.com">phil@salmonra.com</a></td>
                        </tr>
                    </table>
                </div>
                <div class="guide1Image">
                    <picture>
                        <source media="(max-width: 860px)" srcset="images/small/phi-nutt-small.jpg">
                        <source media="(max-width: 1439px)" srcset="images/medium/phi-nutt-medium.jpg">
                        <source media="(min-width: 1440px)" srcset="images/large/phi-nutt-large.jpg">
                        <img src="images/964152_620610744640364_1606771926_o.jpg" alt="Guide on raft">
                    </picture>
                </div>
                <p>Phil is nuts about working for Salmon River Adventure and has been with us for 10 years!!! Since being here, he has become Raft Master certified and is just an all round cool guy!. He has successfully guided over 1,000 guided tours down the river and we swear he knows every rock in the river and how to avoid them!</p>
            </article>
            <hr>
            <article class="guide3Story">
                <div class="guide3Data">
                    <h3>Andrew Larsen</h3>
                    <table>
                        <tr>
                            <td>Certification Level</td>
                            <td>Raft Master</td>
                        </tr>
                        <tr>
                            <td>Years of Expeirence</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><a href="mailto:andrew@salmonra.com">andrew@salmonra.com</a></td>
                        </tr>
                    </table>
                </div>
                <div class="guide1Image">
                    <picture>
                        <source media="(max-width: 860px)" srcset="images/small/andrew-larsen-small.jpg">
                        <source media="(max-width: 1439px)" srcset="images/medium/andrew-larsen-medium.jpg">
                        <source media="(min-width: 1440px)" srcset="images/large/andrew-larsen-large.jpg">
                        <img src="images/Deschutes-river-guide-rafting-terms.jpg" alt="Guide on raft">
                    </picture>
                </div>
                <p>Andrew is not only handsome, but an overall fun guy to be around, I mean look at that beard!!! He has been with Salmon River Adventure for just 5 short years, but in that time has earned his Raft Master certification. He has successfully guided over 500 guided tours down the river has has earned monster biceps in the process! </p>
            </article>
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