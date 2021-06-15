(function(d) {

  var clockElements = makeClockElements(
    'b', 'span', 'span', 'i', 'i', 'i'
  );

  function makeClockElements(tags) {
    var
      clock = d.getElementById('clock'),
      result = [];
    for (var i = 0; tagName = arguments[i]; i++) {
      var element = clock.appendChild(d.createElement(tagName));
      if (tagName === 'i') result.push(element);
    }
    return result;
  }

  function clockUpdate() {
    var now = new Date();
    clockElements[0].style.transform = 'rotate(' + (
      now.getHours() * 30 + (Math.floor(now.getMinutes() / 12) * 6)
    ) + 'deg)';
    clockElements[1].style.transform = 'rotate(' + (
      now.getMinutes() * 6
    ) + 'deg)';
    clockElements[2].style.transform = 'rotate(' + (
      now.getSeconds() * 6
    ) + 'deg)';
  }
  
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    var step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      var progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  clockUpdate();
  setInterval(clockUpdate, 1000);
  
  //这个是 COUNT DOWN 用的
  var obj_dw = document.getElementById("cntdw");
  animateValue(obj_dw, 100, 0, 5000);
  //                开始数，终止数，时差
  
  //这个是 COUNT UP 用的
  var obj_up = document.getElementById("cntup");
  animateValue(obj_up, 0, 100, 5000);
  //                开始数，终止数，时差

})(document);
