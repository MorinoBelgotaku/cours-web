<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a00115304d.js" crossorigin="anonymous"></script>
    <title>Menu déroulant</title>
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li class="menu" onmouseover="changeClass">
                    <a href="#">A propos <i class="fa-solid fa-caret-down" id="icon" onmouseover="changeClass"></i></a>
                    <ul class="sous-menu">
                        <li><a href="https://maps.app.goo.gl/fxdd9fzhkqKfBhj7A" target="_blank">Plan</a></li>
                    </ul>
                </li>
                <li class="menu">
                    <a href="#" id="menu-hover">Services <i class="fa-solid fa-caret-down" id="icon"></i></a>
                    <ul class="sous-menu">
                        <li><a href="#">Cours</a></li>
                        <li><a href="#">Dépannage</a></li>
                    </ul>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
</body>

</html>