///////////////////////////////////////////////////////////////
// making external links:
// https://stackoverflow.com/questions/55891160/how-to-add-an-icon-automatically-to-every-blank-link
function linkopener(a) {
  const hostName = window.location.hostname; // window.location.href;
  var b = a ? "_blank" : "_self";
  var c = document.links;
  console.log("document.links:", c);
  for (var i = 0; i < c.length; i++) {
    console.log("c[i]:", c[i]);
    const isMenu = c[i].classList.contains('anchor');
    if (isMenu) {
      console.log("ITS A MENU ITEM!")
    }
    else if (c[i].href.search(hostName) == -1) {
      c[i].addEventListener("click", function () {
        this.target = b;
      });
      c[i].target = b;
      c[i].className += ' external-link';
      // set some content in a elm
      c[i].innerHTML += ' <?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="65.975 374.416 16 16" enable-background="new 65.975 374.416 16 16" xml:space="preserve"><path fill="currentColor" d="M79.476,384.417h-1c-0.276,0-0.5,0.224-0.5,0.5v3.499h-10v-9.999h4.5c0.276,0,0.5-0.225,0.5-0.501v-1c0-0.276-0.224-0.499-0.5-0.499h-5c-0.829,0-1.5,0.671-1.5,1.499v11c0,0.829,0.671,1.5,1.5,1.5l0,0h11c0.828,0,1.5-0.671,1.5-1.5l0,0v-3.999C79.975,384.641,79.751,384.417,79.476,384.417z M81.226,374.416h-4.001c-0.667,0-1.001,0.81-0.531,1.283l1.117,1.115l-7.617,7.614c-0.293,0.292-0.294,0.767-0.001,1.061c0,0,0,0.001,0.001,0.001l0.708,0.708c0.293,0.294,0.767,0.295,1.061,0.002c0.001,0,0.002-0.001,0.002-0.002l7.613-7.617l1.116,1.117c0.47,0.468,1.282,0.141,1.282-0.531v-4C81.976,374.752,81.64,374.416,81.226,374.416z"/></svg>';
    }
  }
};


////////////////////////////////////////////////////////////////
// resize function
// especially for svg burger icon
function resize() {

  // get size
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
  
  /*
  // check width
  let cSvg = document.getElementById('crossSvg');
  if (x < 1280) {
    // testing svg scaling
    cSvg.style.size = '3.1rem';
    cSvg.style.width = '3.1rem';
    cSvg.style.height = '3.1rem';          
  } else {
    // testing svg scaling
    cSvg.style.size = '3.65rem';
    cSvg.style.width = '3.65rem';
    cSvg.style.height = '3.65rem';          
  }
  */

}
