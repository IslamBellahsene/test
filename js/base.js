//constants
//lightbox constants
const images = document.getElementsByTagName('img');
const frame = document.createElement('div');
const lightimg = document.createElement('img');
//lightbox constants end
//constants end
window.onload = function (){clicker(),BOXsetup()}

//functions

/*function headings(){
  for (let x of elements) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.add('heading');
      //console.log(elements[x][i]);
    }
  }
}*/

//lightbox functions

function clicker(){
  for (let i = 0; i < images.length; i++) {
    images[i].Class = 'zoomables'
    images[i].onclick = function() {lightbox(i)};
    //console.log(images[i].Id);
  }
  //console.log('Si');
}

function BOXsetup(){
  document.body.appendChild(frame);
  frame.Id = 'framer';
  frame.classList.add('light');
  lightimg.onclick = function(){hide()};
  frame.appendChild(lightimg);
}

function lightbox(id){
  frame.classList.add('active');
  /*frame.setAttribute('style', 'background: rgba(0,0,0,0.7);opacity:1;position:fixed;width:100%;height:100%;left:0;top:0;z-index:4;display:flex;justify-content:center;alight-content:center');*/
  lightimg.src = images[id].src
  alert('lightbox activated -click on the enlarged image to hide- ');
}

function hide(){
  /*frame.setAttribute('style', 'opacity:0;z-index:-1');*/
  frame.classList.remove('active');
}

//lightbox functions end

//end of functions