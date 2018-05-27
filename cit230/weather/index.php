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
            <article class="weatherStory">
                <div class="containerImage">
                    <picture>
                        <source media="(max-width: 860px)" srcset="images/small/breakingWeatherHeadline-small.jpg 1x">
                        <source media="(max-width: 1439px)" srcset="images/medium/breakingWeatherHeadline-medium.jpg 1x">
                        <source media="(min-width: 1440px)" srcset="images/large/breakingWeatherHeadline-large.jpg 1x">
                        <img src="images/photo_1.jpg" alt="Lady running in rain">
                    </picture>
                </div>
                <div class="containerMainStory">
                    <h2>Weather Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet pretium urna, at varius est tempus ac. Quisque mattis consequat massa nec laoreet. Etiam turpis lacus, vehicula vel nibh in, sollicitudin bibendum neque. Duis eget maximus nunc. Vestibulum lacinia tortor vel lobortis molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed metus urna, faucibus vel orci vel, mattis tempus ipsum. In id dolor nec lorem pharetra ornare sollicitudin ac velit. Aliquam blandit libero vel metus consequat pellentesque. Vestibulum non ligula a nisl luctus accumsan. Quisque et consequat quam.</p>
                    <p>Phasellus varius neque in tristique vehicula. Vivamus iaculis elit eget augue luctus tempus. Mauris id nibh quis orci interdum mattis egestas ac nisl. Duis lobortis libero ut ultrices mattis. Donec pellentesque scelerisque commodo. Praesent in tempor libero. In eget ex ac tellus pulvinar imperdiet nec ut nunc. Donec hendrerit pellentesque urna, vel auctor nisi sollicitudin viverra. Aliquam nibh leo, ornare vestibulum lectus vitae, eleifend feugiat ex. Pellentesque risus nisl, facilisis vitae ipsum efficitur, dapibus vulputate tortor. Nulla augue magna, molestie posuere luctus eget, auctor vel purus. Aliquam eros nulla, efficitur ut lectus id, cursus scelerisque augue. Integer tincidunt aliquam enim at fringilla. Praesent efficitur sed est a efficitur. Donec laoreet fringilla nisl nec gravida. Sed quis lorem et nulla vulputate facilisis eu ut sapien.</p>
                    <p>Nunc vehicula volutpat lacinia. Sed consectetur orci a sapien placerat, vel convallis urna semper. Proin vehicula lacus vel tincidunt placerat. Integer pharetra magna eget enim viverra rhoncus. Vestibulum nibh massa, blandit quis viverra eu, luctus sed leo. Nullam eget pretium erat. Donec pellentesque elementum ultricies. Fusce ut leo nec felis dapibus vulputate eu sit amet sapien. In posuere rutrum velit, in porta massa laoreet ac. Aliquam erat volutpat.</p>
                </div>
            </article>
            <hr>
            <article class="franklinStory">
                <div class="franklinData">
                    <table>
                        <tr>
                            <th colspan="2">Franklin Town</th>
                        </tr>
                        <tr>
                            <td>Founded</td>
                            <td>1843</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>15,000</td>
                        </tr>
                    </table>
                </div>
                <div class="franklinImage">
                    <picture>
                        <source media="(max-width: 860px)" srcset="images/small/franklinTownImage-small.jpg 1x">
                        <source media="(max-width: 1439px)" srcset="images/medium/franklinTownImage-medium.jpg 1x">
                        <source media="(min-width: 1440px)" srcset="images/large/franklinTownImage-large.jpeg 1x">
                        <img src="images/franklinTownImage.jpeg" alt="Franklin town street">
                    </picture>
                </div>
            </article>
            <hr>
            <article class="greenvilleStory">
                <div class="greenvilleData">
                    <table>
                        <tr>
                            <th colspan="2">Greenville Town</th>
                        </tr>
                        <tr>
                            <td>Founded</td>
                            <td>1905</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>7,500</td>
                        </tr>
                    </table>
                </div>                
                <div class="greenvilleImage">
                    <picture>
                        <source media="(max-width: 860px)" srcset="images/small/greenvilleTownImage-small.jpg 1x">
                        <source media="(max-width: 1439px)" srcset="images/medium/greenvilleTownImage-medium.jpg 1x">
                        <source media="(min-width: 1440px)" srcset="images/large/greenvilleTownImage-large.jpg 1x">
                        <img src="images/greenvilleTownImage.jpeg" alt="Greenville town street">
                    </picture>
                </div>
            </article>
            <hr>
            <article class="springfieldStory">
                <div class="springfieldData">
                    <table>
                        <tr>
                            <th colspan="2">Springfiled Town</th>
                        </tr>
                        <tr>
                            <td>Founded</td>
                            <td>1835</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>150,000</td>
                        </tr>
                    </table>
                </div>
                <div class="springfieldImage">
                    <picture>
                        <source media="(max-width: 860px)" srcset="images/small/springfieldTownImage-small.jpg 1x">
                        <source media="(max-width: 1439px)" srcset="images/medium/springfieldTownImage-medium.jpg 1x">
                        <source media="(min-width: 1440px)" srcset="images/large/springfieldTownImage-large.jpeg 1x">
                        <img src="images/springfieldTownImage.jpeg" alt="Springfield town street">
                    </picture>
                </div>
            </article>
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