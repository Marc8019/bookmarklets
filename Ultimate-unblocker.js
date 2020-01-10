<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Classroom</title>
    
    <style>
        html {
            height: 100%;
        }
        body, section {
            height:100%;
            width:100%;
            margin:0;
            overflow: hidden;
        }

        iframe {
            position: relative;
            border: none;
            margin-top: 10px;
            width: 100%;
            height: 100%;
            background-color: #000000;
            margin: 0;
        }
    </style>

</head>

<header>
    <button onclick="bing()">Bing-iframe</button>
    <button onclick="surfFreely()">Proxy (recommended)</button>
    <button onclick="bookmarklets()">Bookmarklets</button>
    <button onclick="home()">Home</button>
    <script>
        function surfFreely() {
            document.getElementById("42O").innerHTML = "<iframe id=\"iframe\" src=\"https://phoenix-le.cf\"style=\" width=\"100%\" height=\"100%\";>"
        }
        function bing() {
            document.getElementById("42O").innerHTML = "<iframe onload=\"frameload()\" src=\"https://www.bing.com\" style=\" width=\"100%\" height=\"100%\" ;>"
        } 
        function bookmarklets() {
            document.getElementById("42O").innerHTML = "<h2>View all bookmarklets at https://github.com/Marc8019/bookmarklets</h2>"
        }
        function home() {
            document.getElementById("42O").innerHTML = "<h1>Welcome to the Stealth Popup unblocker, made by marc#8019. The proxy feature should work on all platforms and security vendors (goguardian, iboss, etc) and it works with games. The bing-iframe embeds bing into the site."
        }
        //document.getElementsByTagName('iframe')[0].load(function() {
        //    alert("the iframe has been loaded");
        //    });


        //the alert works. the changing _blank doesnt
        function frameload(){
            Array.from(document.querySelectorAll('a[target="_blank"]'))
                .forEach(link => link.removeAttribute('target'));
            alert("iframe loaded")
            
            }
        //Array.from(document.querySelectorAll('a[target="_blank"]'))
        //    .forEach(link => link.removeAttribute('target'));

    </script>
    
</header>


<body>

 <section id='42O'>

 </section>
</body>


</html>


