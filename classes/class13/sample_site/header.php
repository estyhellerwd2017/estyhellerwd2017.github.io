<!DOCTYPE html>
<html>
    <head>
        <title><?=$page_title?></title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link href="main.css" rel="stylesheet">
    </head>
    <body>
        <header>
         <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">LOGO</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">

              <ul class="nav navbar-nav navbar-right">
                <li><a <?=($page=="page1")? "class='current'" : "" ?> href="#">homepage</a></li>
                <li><a <?=($page=="page2")? "class='current'" : "" ?> href="#">page 2</a></li>
                <li><a href="#">link 3</a></li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
