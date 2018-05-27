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
            <h1>Reservations</h1>
            <picture class="homeImage">
                <source media="(max-width: 700px)" srcset="images/small/rafting-679694_960_720-small.jpg">
                <source media="(max-width: 1439px)" srcset="images/medium/rafting-679694_960_720-medium.jpg">
                <source media="(min-width: 1440px)" srcset="images/large/rafting-679694_960_720.jpg">
                <img src="images/rafting-679694_960_720.jpg" alt="River guide leading raft down rapids">
            </picture>
            <p>Below find our current package prices:</p>
            <table class="resTable">
                <tr>
                    <th colspan="3">Rafting</th>
                </tr>
                <tr>
                    <th>Level</th>
                    <th>Length</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Level I</td>
                    <td>1 Day</td>
                    <td>$30</td>
                </tr>
                <tr>
                    <td>Level I</td>
                    <td>3 Days</td>
                    <td>$75</td>
                </tr>
                <tr>
                    <td>Level II</td>
                    <td>1 Day</td>
                    <td>$45</td>
                </tr>
                <tr>
                    <td>Level II</td>
                    <td>3 Days</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Level III</td>
                    <td>1 Day</td>
                    <td>$60</td>
                </tr>
                <tr>
                    <td>Level III</td>
                    <td>3 Days</td>
                    <td>$125</td>
                </tr>
            </table>
            <table class="resTable">
                <tr>
                    <th colspan="3">Fishing</th>
                </tr>
                <tr>
                    <th>Level</th>
                    <th>Length</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Level I</td>
                    <td>1 Day</td>
                    <td>$20</td>
                </tr>
                <tr>
                    <td>Level I</td>
                    <td>3 Days</td>
                    <td>$55</td>
                </tr>
                <tr>
                    <td>Level II</td>
                    <td>1 Day</td>
                    <td>$30</td>
                </tr>
                <tr>
                    <td>Level II</td>
                    <td>3 Days</td>
                    <td>$75</td>
                </tr>
                <tr>
                    <td>Level III</td>
                    <td>1 Day</td>
                    <td>$45</td>
                </tr>
                <tr>
                    <td>Level III</td>
                    <td>3 Days</td>
                    <td>$100</td>
                </tr>
            </table>
            <table class="resTable">
                <tr>
                    <th colspan="3">Paddleboard</th>
                </tr>
                <tr>
                    <th>Level</th>
                    <th>Length</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Level I</td>
                    <td>1 Day</td>
                    <td>$25</td>
                </tr>
                <tr>
                    <td>Level I</td>
                    <td>3 Days</td>
                    <td>$60</td>
                </tr>
                <tr>
                    <td>Level II</td>
                    <td>1 Day</td>
                    <td>$40</td>
                </tr>
                <tr>
                    <td>Level II</td>
                    <td>3 Days</td>
                    <td>$90</td>
                </tr>
                <tr>
                    <td>Level III</td>
                    <td>1 Day</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Level III</td>
                    <td>3 Days</td>
                    <td>$115</td>
                </tr>
            </table>
            <form id="reservationSubmission" action"" method="post">
                <fieldset>
                    <legend>Adventurer Infomation</legend>
                    <label><span>Full Name:</span><input name="fullName" type="text" placeholder="Full Name" pattern="[a-zA-Z -]{5,}" required></label>
                    <label><span>Email:</span><input name="email" type="email" placeholder="example@email.com" autocomplete="off" required></label>
                    <label><span>Telphone:</span><input name="telephone" type="tel" placeholder="(123) 555-5555" required></label>
                </fieldset>
                <fieldset>
                    <legend>Trip Information</legend>
                    <label><span>Start Date:</span><input name="tripStartDate" type="date" required></label>
                    <label><span>End Date:</span><input name="tripEndDate" type="date" required></label>
                    <label><span>Party Size:</span><input name ="partySize" type="number" required></label>
                    <label><span>Trip Type:</span>
                        <select name="typeSelelection" required>
                            <option value="default" selected disabled hidden>Select Type ...</option>
                            <option value="Rafting">Rafting</option>
                            <option value="Fishing">Fishing</option>
                            <option value="Paddleboard">Paddleboard</option>
                        </select>
                    </label>
                    <label><span>Activity Level:</span>
                        <select name="activitySelelection" required>
                            <option value="default" selected disabled hidden>Select Level ...</option>
                            <option value="Level1">Level I</option>
                            <option value="Level2">Level II</option>
                            <option value="Level3">Level III</option>
                        </select>
                    </label>
                    <label><span>Trip Length:</span>
                        <select name="lengthSelelection" required>
                            <option value="default" selected disabled hidden>Select Length ...</option>
                            <option value="1Day">1 Day</option>
                            <option value="2Day">3 Days</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Questions</legend>
                    <label><span>Additional Questions:</span>
                        <textarea name="comments" rows="10" cols="28"></textarea>
                    </label>
                    <input type="submit" value="Submit" class="formButton">
                    <input type="reset" value="Reset" class="formButton">
                </fieldset>
            </form>
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