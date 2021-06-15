  function blinker()
  {
    if(document.getElementById("blink"))
    {
        var d = document.getElementById("blink") ;
        d.style.backgroundColor= (d.style.backgroundColor==('rgb(80, 200, 120)')?'':'rgb(80, 200, 120)');
        setTimeout('blinker()', 900);
    }
}