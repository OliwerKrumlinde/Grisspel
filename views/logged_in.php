<!-- if you need user information, just put them into the $_SESSION variable and output them here -->
<center>
<font size="30">Hej, <?php echo $_SESSION['user_name']; ?>. Du �r nu inloggad.
</br>
Klicka <a href="snake_game.html">h�r</a> f�r att spela!
</br>
<a href="index.php?logout">Logga ut</a>
</font>
</center>