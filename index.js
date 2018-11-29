function loadImages () {
  var minX = null;
  var maxX = null;
  var minY = null;
  var maxY = null;

  for (var key in data) {
    if (data[key].x < minX || minX == null) {
      minX = data[key].x;
    }
    if (data[key].x > maxX || maxX == null) {
      maxX = data[key].x;
    }
    if (data[key].y < minY || minY == null) {
      minY = data[key].y;
    }
    if (data[key].y > maxY || maxY == null) {
      maxY = data[key].y;
    }
  }

  if (maxX > -minX) {
    xBound = maxX;
  } else {
    xBound = -minX;
  }

  if (maxY > -minY) {
    yBound = maxY;
  } else {
    yBound = -minY;
  }

  var div = document.createElement('div');
  div.setAttribute('class', 'container');
  var htmlText = '';
  htmlText += '<table>';
  for (var i = yBound; i >= -yBound; i--) {
    htmlText += '<tr>';
    for (var j = -xBound; j <= xBound; j++) {
      isPopulated = false;

      for (var key in data) {
        if (data[key].x === j && data[key].y === i) {
          htmlText += '<td>';// style="background-image:url(img/' + data[key].imgSmall + ');">';
          htmlText += '<div id="image'+data[key].id+'"><span class="helper"></span><div class="label_background"><p class="label">' + (data[key].title).replace(/-/g, ' ')  + '</p></div><img src=img/' + data[key].imgSmall + '></div>';
          isPopulated = true;
          htmlText += '<div id="myModal'+data[key].id+'" class="modal"><div class="modal-content"><span id="close' + data[key].id +'" class="close">&times;</span><p>'+ (data[key].desc).replace(/-/g, ' ') +'/p></div></div>'
        }
      }

      if (!isPopulated) {
        htmlText += '<td>';
      }
      htmlText += '</td>';
    }
    htmlText += '</tr>';
  }
  htmlText += '</table>';
  div.innerHTML = htmlText;
  document.getElementById('content').appendChild(div);

}

function scrollToMiddle () {
  window.scrollTo((document.body.scrollWidth - window.innerWidth) / 2, (document.body.scrollHeight - window.innerHeight) / 2);
}

loadImages();
scrollToMiddle();

var modalArray = new Array();
var imageArray = new Array();
var closeArray = new Array();
for( i = 0; i < 7;i++){
  console.log(i);
  var modalName = "myModal" + i.toString();
  var imageName = "image" + i.toString();
  var closeName = "close" + i.toString();
  var modal = document.getElementById(modalName);
  var image = document.getElementById(imageName);
  var close =  document.getElementById(closeName);
  modalArray.push(modal);
  imageArray.push(image);
  closeArray.push(close);
}

console.log(modalArray);
console.log(imageArray);
console.log(closeArray);

imageArray[0].onclick = function(){
  console.log("onclick0");
  modalArray[0].style.display = "block";
}
imageArray[1].onclick = function(){
  console.log("onclick1");
  modalArray[1].style.display = "block";
}
imageArray[2].onclick = function(){
  console.log("onclick0");
  modalArray[2].style.display = "block";
}
imageArray[3].onclick = function(){
  console.log("onclick1");
  modalArray[3].style.display = "block";
}
imageArray[4].onclick = function(){
  console.log("onclick0");
  modalArray[4].style.display = "block";
}
imageArray[5].onclick = function(){
  console.log("onclick1");
  modalArray[5].style.display = "block";
}
imageArray[6].onclick = function(){
  console.log("onclick0");
  modalArray[6].style.display = "block";
}


closeArray[0].onclick = function(){
    modalArray[0].style.display = "none";
}
closeArray[1].onclick = function(){
    modalArray[1].style.display = "none";
}
closeArray[2].onclick = function(){
    modalArray[2].style.display = "none";
}
closeArray[3].onclick = function(){
    modalArray[3].style.display = "none";
}
closeArray[4].onclick = function(){
    modalArray[4].style.display = "none";
}
closeArray[5].onclick = function(){
    modalArray[5].style.display = "none";
}
closeArray[6].onclick = function(){
    modalArray[6].style.display = "none";
}


//   imageArray[i].onclick = function(){
//     console.log(i);
//     console.log(imageArray[i]);
//     console.log("on click");
//     console.log(modal);
//     console.log(modalArray);
//     console.log(modalArray[0]);
//     console.log(typeof i);
//     console.log(modalArray[i]);
//     modalArray[0].style.display = "block";
//   }
//
//
//   close.onclick = function(){
//     modal.style.display = "none";
//   }
//
//
// }
