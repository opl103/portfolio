setInterval(() => {
   const now = new Date();
   let hr = now.getHours();//시간
   let min = now.getMinutes();//분
   let sec = now.getSeconds();//초
 
   if(sec < 10) {
     sec = '0' + sec;
   }
 
   const span0 = document.querySelectorAll('span')[0];
   const span1 = document.querySelectorAll('span')[1];
   const span2 = document.querySelectorAll('span')[2];
 
   span0.innerHTML = hr;
   span1.innerHTML = min;
   span2.innerHTML = sec;
 
 }, 1000);