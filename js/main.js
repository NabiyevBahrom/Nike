var indexValue = 1;
         showImg(indexValue);
         function btm_slide(e){showImg(indexValue = e);}
         function side_slide(e){showImg(indexValue += e);}
         function showImg(e){
           var i;
           const img = document.querySelectorAll('.info_box');
           const slider = document.querySelectorAll('.btm-slides span');
           if(e > img.length){indexValue = 1}
           if(e < 1){indexValue = img.length}
           for(i = 0; i < img.length; i++){
             img[i].style.display = "none";
           }
           for(i = 0; i < slider.length; i++){
             slider[i].style.background = "#06fc06";
           }
           img[indexValue-1].style.display = "block";
           slider[indexValue-1].style.background = "#06fc06";
         }
var indexValue = 1;
   showImg(indexValue);
   function btm_slides(e) {showImg( indexValue = e);}
   function btm(params) {
    
   }