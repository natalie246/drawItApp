$( document ).ready(function() {


var i = 0;
var dragging = false;
var dragging2 = false;
var dragging3 = false;
var dragging4 = false;
var dragging5 = false;
var dragging6 = false;
var dragging7 = false;
var dragging8 = false;
var dragging9 = false;


 $('.guess1_viconbutton').mousedown(function(e){
    
    //document.getElementById("demo").innerHTML = "Hello World";
    //console.log("viconbutton");
    var data ={};
    data.lower_class = $sidebar1;
    data.second_class = $sidebar2;
    data.third_class = $sidebar3;
    data.fourth_class = $sidebar4;
    data.fifth_class = $sidebar5;
    data.sixth_class = $sidebar6;
    data.seventh_class = $sidebar7;
    data.eighth_class = $sidebar8;
    data.ninth_class = $sidebar9;
    data.upper_class = $sidebar10;

    console.log(JSON.stringify(data));
    console.log("data: "+data);

        $.ajax({
            type: 'POST',
            data: data,
            url: 'http://drawIt.herokuapp.com/answer1',
            success: function(data){
              console.log('success');
              console.log(data);
            }
        });

    });


 $('.guess2_viconbutton').mousedown(function(e){
    
    //document.getElementById("demo").innerHTML = "Hello World";
    //console.log("viconbutton");
    var data ={};
    data.lower_class = $sidebar1;
    data.second_class = $sidebar2;
    data.third_class = $sidebar3;
    data.fourth_class = $sidebar4;
    data.fifth_class = $sidebar5;
    data.sixth_class = $sidebar6;
    data.seventh_class = $sidebar7;
    data.eighth_class = $sidebar8;
    data.ninth_class = $sidebar9;
    data.upper_class = $sidebar10;

    console.log(JSON.stringify(data));
    console.log("data: "+data);

        $.ajax({
            type: 'POST',
            data: data,
            url: 'http://drawIt.herokuapp.com/answer2',
            success: function(data){
              console.log('success');
              console.log(data);
            }
        });

    });

//url: 'http://localhost:3000/answer2',

 // url: 'http://drawIt.herokuapp.com/answer2',


   $('#dragbar1').mousedown(function(e){
       e.preventDefault();       
       dragging = true;
       var sidebar2 = $('#sidebar2');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar2.outerHeight(),
                                top: sidebar2.offset().top,
                                left: sidebar2.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });


    $('#dragbar2').mousedown(function(e){
       e.preventDefault();       
       dragging2 = true;
       var sidebar3 = $('#sidebar3');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar3.outerHeight(),
                                top: sidebar3.offset().top,
                                left: sidebar3.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });


    $('#dragbar3').mousedown(function(e){
       e.preventDefault();       
       dragging3 = true;
       var sidebar4 = $('#sidebar4');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar4.outerHeight(),
                                top: sidebar4.offset().top,
                                left: sidebar4.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });


    $('#dragbar4').mousedown(function(e){
       e.preventDefault();       
       dragging4 = true;
       var sidebar5 = $('#sidebar5');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar5.outerHeight(),
                                top: sidebar5.offset().top,
                                left: sidebar5.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });


    $('#dragbar5').mousedown(function(e){
       e.preventDefault();       
       dragging5 = true;
       var sidebar6 = $('#sidebar6');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar6.outerHeight(),
                                top: sidebar6.offset().top,
                                left: sidebar6.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });


    $('#dragbar6').mousedown(function(e){
       e.preventDefault();       
       dragging6 = true;
       var sidebar7 = $('#sidebar7');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar7.outerHeight(),
                                top: sidebar7.offset().top,
                                left: sidebar7.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });


    $('#dragbar7').mousedown(function(e){
       e.preventDefault();       
       dragging7 = true;
       var sidebar8 = $('#sidebar8');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar8.outerHeight(),
                                top: sidebar8.offset().top,
                                left: sidebar8.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });


    $('#dragbar8').mousedown(function(e){
       e.preventDefault();       
       dragging8 = true;
       var sidebar9 = $('#sidebar9');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar9.outerHeight(),
                                top: sidebar9.offset().top,
                                left: sidebar9.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });


    $('#dragbar9').mousedown(function(e){
       e.preventDefault();       
       dragging9 = true;
       var sidebar10 = $('#sidebar10');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: sidebar10.outerHeight(),
                                top: sidebar10.offset().top,
                                left: sidebar10.offset().left
                               }
                        }).appendTo('body');
       
        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
        });
    });

       
    $( document ).ready(function() {
        $sidebar1 = 10;
        $sidebar2 = 10;
        $sidebar3 = 10;
        $sidebar4 = 10;
        $sidebar5 = 10;
        $sidebar6 = 10;
        $sidebar7 = 10;
        $sidebar8 = 10;
        $sidebar9 = 10;
        $sidebar10 = 10; 
    });


    $(document).mouseup(function(e){


       if (dragging) 
       {
           var presidebar1 = $sidebar1;              
         
           $sidebar1 = parseInt((e.pageX / window.innerWidth) * 100);

          if ($sidebar1 < 20 && $sidebar1 > 0){

              $sidebar2 = 100 - ($sidebar1 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
                      
                      if ($sidebar2 < 0){
                          $sidebar2 = 1;

                          $sidebar3 = 100 - ($sidebar1 + $sidebar2 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
 
                      } 
          }

          if ($sidebar1 > 19){
            console.log("$sidebar1 > 19");

              var divide = parseInt((100 - $sidebar1)/9);
              var sum = $sidebar1 + (divide * 9);

              if (sum == 100){
                  $sidebar2 = divide;
                  $sidebar3 = divide;
                  $sidebar4 = divide;
                  $sidebar5 = divide;
                  $sidebar6 = divide;
                  $sidebar7 = divide;
                  $sidebar8 = divide;
                  $sidebar9 = divide;
                  $sidebar10 = divide;
              }

              if (sum != 100){
                  var difference = 100 - sum;

                  $sidebar2 = divide;
                  $sidebar3 = divide;
                  $sidebar4 = divide;
                  $sidebar5 = divide;
                  $sidebar6 = divide;
                  $sidebar7 = divide;
                  $sidebar8 = divide;
                  $sidebar9 = divide;
                  $sidebar10 = divide;

                  if(difference == 9){                
                      $sidebar2 += 1;
                      $sidebar3 += 1;
                      $sidebar4 += 1;
                      $sidebar5 += 1;
                      $sidebar6 += 1;
                      $sidebar7 += 1;
                      $sidebar8 += 1;
                      $sidebar9 += 1;
                      $sidebar10 += 1;
                  }

                  if(difference == 8){        
                      $sidebar2 += 1;
                      $sidebar3 += 1;
                      $sidebar4 += 1;
                      $sidebar5 += 1;
                      $sidebar6 += 1;
                      $sidebar7 += 1;
                      $sidebar8 += 1;
                      $sidebar9 += 1;
                  }

                  if(difference == 7){
                      $sidebar2 += 1;
                      $sidebar3 += 1;
                      $sidebar4 += 1;
                      $sidebar5 += 1;
                      $sidebar6 += 1;
                      $sidebar7 += 1;
                      $sidebar8 += 1;
                  }
                    
                  if(difference == 6){
                      $sidebar2 += 1;
                      $sidebar3 += 1;
                      $sidebar4 += 1;
                      $sidebar5 += 1;
                      $sidebar6 += 1;
                      $sidebar7 += 1;
                  }

                  if(difference == 5){
                      $sidebar2 += 1;
                      $sidebar3 += 1;
                      $sidebar4 += 1;
                      $sidebar5 += 1;
                      $sidebar6 += 1;
                  }

                  if(difference == 4){
                      $sidebar2 += 1;
                      $sidebar3 += 1;
                      $sidebar4 += 1;
                      $sidebar5 += 1;
                  }

                  if(difference == 3){
                      $sidebar2 += 1;
                      $sidebar3 += 1;
                      $sidebar4 += 1;
                  }

                  if(difference == 2){
                      $sidebar2 += 1;
                      $sidebar3 += 1;
                  }

                  if(difference == 1){
                      $sidebar2 += 1;
                  }                    
      
              }

                   if ($sidebar10 == 0){
                       $sidebar10 = 1;
                       $sidebar9 = 1;
                       $sidebar8 = 1;
                       $sidebar7 = 1;
                       $sidebar6 = 1;
                       $sidebar5 = 1;
                       $sidebar4 = 1;
                       $sidebar3 = 1;
                       $sidebar2 = 1;
                       $sidebar1 = 100 - ($sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                          $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);    
                                      
                    } 

          }

           if ($sidebar1 < 0 || $sidebar1 == 0){
              $sidebar1 = 1;

              $sidebar2 = 100 - ($sidebar1 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
            }

               console.log("$sidebar1 : " +$sidebar1 );       

                  $("#text1").html($sidebar1 + "%");
                  $("#text2").html($sidebar2 + "%");
                  $("#text3").html($sidebar3 + "%");
                  $("#text4").html($sidebar4 + "%");
                  $("#text5").html($sidebar5 + "%");
                  $("#text6").html($sidebar6 + "%");
                  $("#text7").html($sidebar7 + "%");
                  $("#text8").html($sidebar8 + "%");
                  $("#text9").html($sidebar9 + "%");
                  $("#text10").html($sidebar10 + "%");


/////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%"); 
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              
              
    
/////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             


           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging = false;
       }


        if (dragging2) 
       {
          var presidebar2 = $sidebar2;              

           $sidebar2 = parseInt((e.pageX / window.innerWidth) * 100) - $sidebar1;

           console.log("$sidebar2: " + $sidebar2);

          if ($sidebar2 < 20 && $sidebar2 > 0){
  
                      $sidebar3 = 100 - ($sidebar1 + $sidebar2 + $sidebar4 + $sidebar5 + $sidebar6 + 
                        $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);

                      if ($sidebar3 < 0){
                          $sidebar3 = 1;

                          $sidebar4 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar5 + $sidebar6 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
 
                      }                
          }

          if ($sidebar2 > 19){

            console.log("$sidebar2 > 19");
            console.log("$sidebar2:  " + $sidebar2);
            console.log("$sidebar3:  " + $sidebar3);

              var divide = parseInt((100 - $sidebar1 - $sidebar2)/8);
              var sum = $sidebar1 + $sidebar2 + (divide * 8);

              if (sum == 100){
                  $sidebar3 = divide;
                  $sidebar4 = divide;
                  $sidebar5 = divide;
                  $sidebar6 = divide;
                  $sidebar7 = divide;
                  $sidebar8 = divide;
                  $sidebar9 = divide;
                  $sidebar10 = divide;
              }

              if (sum != 100){

                  var difference = 100 - sum;

                  if(difference == 9){
                      $sidebar3 = divide + 2;
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 8){
                      $sidebar3 = divide + 1;
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 7){
                      $sidebar3 = divide + 1;
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide;
                  }
                    
                  if(difference == 6){
                      $sidebar3 = divide + 1;
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 5){
                      $sidebar3 = divide + 1;
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 4){
                      $sidebar3 = divide + 1;
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 3){
                      $sidebar3 = divide + 1;
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 2){
                      $sidebar3 = divide + 1;
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide;
                      $sidebar6 = divide;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 1){
                      $sidebar3 = divide + 1;
                      $sidebar4 = divide;
                      $sidebar5 = divide;
                      $sidebar6 = divide;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }                    
              }

                   if ($sidebar10 == 0){
                       $sidebar10 = 1;
                       $sidebar9 = 1;
                       $sidebar8 = 1;
                       $sidebar7 = 1;
                       $sidebar6 = 1;
                       $sidebar5 = 1;
                       $sidebar4 = 1;
                       $sidebar3 = 1;
                       $sidebar2 = 100 - ($sidebar1 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                          $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);    
                                      
                    } 

          }

           if ($sidebar2 < 0){

                      $sidebar3 = (-1)*$sidebar2 + $sidebar3 + presidebar2;              

                      var divide = parseInt((100 - $sidebar3 - $sidebar4 - $sidebar5 - $sidebar6 - $sidebar7 - $sidebar8 - $sidebar9 - $sidebar10)/2);
                      var sum =  $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10 +(divide * 2);

                        if (sum == 100){
                            $sidebar1 = divide;
                            $sidebar2 = divide;
                        }

                        if (sum != 100){
                            var difference = 100 - sum;

                                  $sidebar1 = divide;
                                  $sidebar2 = divide;

                              if(difference == 9){
                                  $sidebar1 += 4;
                                  $sidebar2 += 5;
                              }

                              if(difference == 8){
                                  $sidebar1 += 4;                                
                                  $sidebar2 += 4;
                              }

                              if(difference == 7){
                                  $sidebar1 += 3;                                
                                  $sidebar2 += 4;                                
                              }
                                
                              if(difference == 6){
                                  $sidebar1 += 3;
                                  $sidebar2 += 3;                                
                              }

                              if(difference == 5){
                                  $sidebar1 += 2;
                                  $sidebar2 += 3;
                              }

                              if(difference == 4){
                                  $sidebar1 += 2;
                                  $sidebar2 += 2;
                              }

                              if(difference == 3){
                                  $sidebar1 += 1;
                                  $sidebar2 += 2;
                              }

                              if(difference == 2){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                              }

                              if(difference == 1){
                                  $sidebar2 += 1
                              }                  

                        }

                           if( $sidebar1 == 0 || $sidebar1 < 0 ){
                                  $sidebar1 = 1;
                                  $sidebar2 = 1;

                                  $sidebar3 = 100 - ($sidebar1 + $sidebar2 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                                        $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
                            }               

            }

            $("#text1").html($sidebar1 + "%");
            $("#text2").html($sidebar2 + "%");
            $("#text3").html($sidebar3 + "%");
            $("#text4").html($sidebar4 + "%");
            $("#text5").html($sidebar5 + "%");
            $("#text6").html($sidebar6 + "%");
            $("#text7").html($sidebar7 + "%");
            $("#text8").html($sidebar8 + "%");
            $("#text9").html($sidebar9 + "%");
            $("#text10").html($sidebar10 + "%");


/////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%");
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              
              
/////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             


           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging2 = false;
       }


        if (dragging3) 
       {
           var presidebar3 = $sidebar3;              
          
           $sidebar3 = (parseInt((e.pageX / window.innerWidth) * 100) - ($sidebar1 + $sidebar2));

           if ($sidebar3 < 20 && $sidebar3 > 0){
              $sidebar4 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar5 + $sidebar6 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
                      
                      if ($sidebar4 < 0){
                          $sidebar4 = 1;

                          $sidebar5 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar6 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
 
                      }              
          }

          if ($sidebar3 > 19){

              var divide = parseInt((100 - $sidebar1 - $sidebar2 - $sidebar3)/7);
              var sum = $sidebar1 + $sidebar2 + $sidebar3 + (divide * 7);

              if (sum == 100){
                  $sidebar4 = divide;
                  $sidebar5 = divide;
                  $sidebar6 = divide;
                  $sidebar7 = divide;
                  $sidebar8 = divide;
                  $sidebar9 = divide;
                  $sidebar10 = divide;
              }


              if (sum != 100){

                  var difference = 100 - sum;

                  if(difference == 9){
                      $sidebar4 = divide + 2;
                      $sidebar5 = divide + 2;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 8){
                      $sidebar4 = divide + 2;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 7){
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }
                    
                  if(difference == 6){
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide;
                  }

                  if(difference == 5){
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 4){
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 3){
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 2){
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 1){
                      $sidebar4 = divide + 1;
                      $sidebar5 = divide;
                      $sidebar6 = divide;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }  
              }
                   
                   if ($sidebar10 == 0){
                       $sidebar10 = 1;
                       $sidebar9 = 1;
                       $sidebar8 = 1;
                       $sidebar7 = 1;
                       $sidebar6 = 1;
                       $sidebar5 = 1;
                       $sidebar4 = 1;
                       $sidebar3 = 100 - ($sidebar1 + $sidebar2 + $sidebar4 + $sidebar5 + $sidebar6 + 
                                          $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);    
                                      
                    } 
          }


           if ($sidebar3 < 0){

                        console.log("$sidebar3 < 0");


               $sidebar4 = (-1)*$sidebar3 + $sidebar4 + presidebar3;              

               var divide = parseInt((100 - $sidebar4 - $sidebar5 - $sidebar6 - $sidebar7 - $sidebar8 - $sidebar9 - $sidebar10)/3);
               var sum =  $sidebar4 + $sidebar5 + $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10 +(divide * 3);

                        if (sum == 100){
                            $sidebar1 = divide;
                            $sidebar2 = divide;
                            $sidebar3 = divide;
                        }

                        if (sum != 100){
                            var difference = 100 - sum;

                                  $sidebar1 = divide;
                                  $sidebar2 = divide;
                                  $sidebar3 = divide;

                              if(difference == 9){
                                  $sidebar1 += 3;
                                  $sidebar2 += 3;
                                  $sidebar3 += 3;
                              }

                              if(difference == 8){
                                  $sidebar1 += 2;                                
                                  $sidebar2 += 3;
                                  $sidebar3 += 3;
                              }

                              if(difference == 7){
                                  $sidebar1 += 2;                                
                                  $sidebar2 += 2;                                
                                  $sidebar3 += 3;
                              }
                                
                              if(difference == 6){
                                  $sidebar1 += 2;
                                  $sidebar2 += 2;                                
                                  $sidebar3 += 2;
                              }

                              if(difference == 5){
                                  $sidebar1 += 1;
                                  $sidebar2 += 2;
                                  $sidebar3 += 2;
                              }

                              if(difference == 4){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                                  $sidebar3 += 2;
                              }

                              if(difference == 3){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                              }

                              if(difference == 2){
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                              }

                              if(difference == 1){
                                  $sidebar3 += 1;
                              }                  


                        }

                           if( $sidebar1 == 0 || $sidebar1 < 0 ){ 
                                  $sidebar1 = 1;
                                  $sidebar2 = 1;
                                  $sidebar3 = 1;


                                  $sidebar4 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar5 + $sidebar6 + 
                                                        $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
                            }                         

            }

           
            $("#text1").html($sidebar1 + "%");
            $("#text2").html($sidebar2 + "%");
            $("#text3").html($sidebar3 + "%");
            $("#text4").html($sidebar4 + "%");
            $("#text5").html($sidebar5 + "%");
            $("#text6").html($sidebar6 + "%");
            $("#text7").html($sidebar7 + "%");
            $("#text8").html($sidebar8 + "%");
            $("#text9").html($sidebar9 + "%");
            $("#text10").html($sidebar10 + "%");


/////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%");
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              
              

/////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             


           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging3 = false;
       }


        if (dragging4) 
       {
           var presidebar4 = $sidebar4;              
       
           $sidebar4 = (parseInt((e.pageX / window.innerWidth) * 100) - ($sidebar1 + $sidebar2 + $sidebar3));
         
          if ($sidebar4 < 20 && $sidebar4 > 0){
              $sidebar5 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar6 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10); 

                      if ($sidebar5 < 0){ 
                          $sidebar5 = 1;

                          $sidebar6 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
                      }          
          }

          if ($sidebar4 > 19){

              var divide = parseInt((100 - $sidebar1 - $sidebar2 - $sidebar3 - $sidebar4)/6);
              var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + (divide * 6);

              if (sum == 100){
                  $sidebar5 = divide;
                  $sidebar6 = divide;
                  $sidebar7 = divide;
                  $sidebar8 = divide;
                  $sidebar9 = divide;
                  $sidebar10 = divide;
              }

              if (sum != 100){

                  var difference = 100 - sum;

                  if(difference == 9){
                      $sidebar5 = divide + 2;
                      $sidebar6 = divide + 2;
                      $sidebar7 = divide + 2;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 8){
                      $sidebar5 = divide + 2;
                      $sidebar6 = divide + 2;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 7){
                      $sidebar5 = divide + 2;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }
                    
                  if(difference == 6){
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 5){
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide;
                  }

                  if(difference == 4){
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 3){
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 2){
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 1){
                      $sidebar5 = divide + 1;
                      $sidebar6 = divide;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }  

              }

                   if ($sidebar10 == 0){
                       $sidebar10 = 1;
                       $sidebar9 = 1;
                       $sidebar8 = 1;
                       $sidebar7 = 1;
                       $sidebar6 = 1;
                       $sidebar5 = 1;
                       $sidebar4 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar5 + $sidebar6 + 
                                          $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);    
                                      
                    } 

          }



          if ($sidebar4 < 0){

              $sidebar5 = (-1)*$sidebar4 + $sidebar5 + presidebar4;              

               var divide = parseInt((100 - $sidebar5 - $sidebar6 - $sidebar7 - $sidebar8 - $sidebar9 - $sidebar10)/4);
               var sum =  $sidebar5 + $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10 +(divide * 4);

                        if (sum == 100){
                            $sidebar1 = divide;
                            $sidebar2 = divide;
                            $sidebar3 = divide;
                            $sidebar4 = divide;
                        }

                        if (sum != 100){
                            var difference = 100 - sum;

                                  $sidebar1 = divide;
                                  $sidebar2 = divide;
                                  $sidebar3 = divide;
                                  $sidebar4 = divide;

                              if(difference == 9){
                                  $sidebar1 += 2;
                                  $sidebar2 += 2;
                                  $sidebar3 += 2;
                                  $sidebar4 += 3;
                              }

                              if(difference == 8){
                                  $sidebar1 += 2;                                
                                  $sidebar2 += 2;
                                  $sidebar3 += 2;
                                  $sidebar4 += 2;
                              }

                              if(difference == 7){
                                  $sidebar1 += 1;                                
                                  $sidebar2 += 2;                                
                                  $sidebar3 += 2;
                                  $sidebar4 += 2;
                              }
                                
                              if(difference == 6){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;                                
                                  $sidebar3 += 2;
                                  $sidebar4 += 2;
                              }

                              if(difference == 5){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 2;                                
                              }

                              if(difference == 4){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                              }

                              if(difference == 3){
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                              }

                              if(difference == 2){
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                              }

                              if(difference == 1){
                                  $sidebar4 += 1;
                              }                  


                        }

                           if( $sidebar1 == 0 || $sidebar1 < 0 ){ 
                                  $sidebar1 = 1;
                                  $sidebar2 = 1;
                                  $sidebar3 = 1;
                                  $sidebar4 = 1;


                                  $sidebar5 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar6 + 
                                                        $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
                            } 

            }

            $("#text1").html($sidebar1 + "%");
            $("#text2").html($sidebar2 + "%");
            $("#text3").html($sidebar3 + "%");
            $("#text4").html($sidebar4 + "%");
            $("#text5").html($sidebar5 + "%");
            $("#text6").html($sidebar6 + "%");
            $("#text7").html($sidebar7 + "%");
            $("#text8").html($sidebar8 + "%");
            $("#text9").html($sidebar9 + "%");
            $("#text10").html($sidebar10 + "%");

  
/////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%");
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              
              

     /////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             



           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging4 = false;
       } 


        if (dragging5) 
       {
            var presidebar5 = $sidebar5;              
           $sidebar5 = (parseInt((e.pageX / window.innerWidth) * 100) - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4));

          if ($sidebar5 < 20 && $sidebar5 > 0){
             $sidebar6 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
                      
                      if ($sidebar6 < 0){ 
                          $sidebar6 = 1;

                          $sidebar7 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                $sidebar6 + $sidebar8 + $sidebar9 + $sidebar10);
                      } 
          }

          if ($sidebar5 > 19){

              var divide = parseInt((100 - $sidebar1 - $sidebar2 - $sidebar3 - $sidebar4 - $sidebar5)/5);
              var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + (divide * 5);

              if (sum == 100){
                  $sidebar6 = divide;
                  $sidebar7 = divide;
                  $sidebar8 = divide;
                  $sidebar9 = divide;
                  $sidebar10 = divide;
              }

              if (sum != 100){

                  var difference = 100 - sum;

                  if(difference == 9){
                      $sidebar6 = divide + 2;
                      $sidebar7 = divide + 2;
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 2;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 8){
                      $sidebar6 = divide + 2;
                      $sidebar7 = divide + 2;
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 7){
                      $sidebar6 = divide + 2;
                      $sidebar7 = divide + 2;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }
                    
                  if(difference == 6){
                      $sidebar6 = divide + 2;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 5){
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 4){
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide;
                  }

                  if(difference == 3){
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 2){
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 1){
                      $sidebar6 = divide + 1;
                      $sidebar7 = divide;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }  

              }

                   if ($sidebar10 == 0){
                       $sidebar10 = 1;
                       $sidebar9 = 1;
                       $sidebar8 = 1;
                       $sidebar7 = 1;
                       $sidebar6 = 1;
                       $sidebar5 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar6 + 
                                          $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);    
                                      
                    } 

          }    

          if ($sidebar5 < 0){

              $sidebar6 = (-1)*$sidebar5 + $sidebar6 + presidebar5;              

               var divide = parseInt((100 - $sidebar6 - $sidebar7 - $sidebar8 - $sidebar9 - $sidebar10)/5);
               var sum =  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10 +(divide * 5);

                        if (sum == 100){
                            $sidebar1 = divide;
                            $sidebar2 = divide;
                            $sidebar3 = divide;
                            $sidebar4 = divide;
                            $sidebar5 = divide;
                        }

                        if (sum != 100){
                            var difference = 100 - sum;

                                  $sidebar1 = divide;
                                  $sidebar2 = divide;
                                  $sidebar3 = divide;
                                  $sidebar4 = divide;
                                  $sidebar5 = divide;

                              if(difference == 9){
                                  $sidebar1 += 1;
                                  $sidebar2 += 2;
                                  $sidebar3 += 2;
                                  $sidebar4 += 2;
                                  $sidebar5 += 2;
                              }

                              if(difference == 8){
                                  $sidebar1 += 1;                                
                                  $sidebar2 += 1;
                                  $sidebar3 += 2;
                                  $sidebar4 += 2;
                                  $sidebar5 += 2;
                              }

                              if(difference == 7){
                                  $sidebar1 += 1;                                
                                  $sidebar2 += 1;                                
                                  $sidebar3 += 1;
                                  $sidebar4 += 2;
                                  $sidebar5 += 2;
                              }
                                
                              if(difference == 6){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;                                
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 2;
                              }

                              if(difference == 5){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;                                
                                  $sidebar5 += 1;
                              }

                              if(difference == 4){
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                              }

                              if(difference == 3){
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                              }

                              if(difference == 2){
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                              }

                              if(difference == 1){
                                  $sidebar5 += 1;
                              }                  

                        }

                           if( $sidebar1 == 0 || $sidebar1 < 0 ){ 
                                  $sidebar1 = 1;
                                  $sidebar2 = 1;
                                  $sidebar3 = 1;
                                  $sidebar4 = 1;
                                  $sidebar5 = 1;

                                  $sidebar6 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                                        $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);
                            } 
           }
           
            $("#text1").html($sidebar1 + "%");
            $("#text2").html($sidebar2 + "%");
            $("#text3").html($sidebar3 + "%");
            $("#text4").html($sidebar4 + "%");
            $("#text5").html($sidebar5 + "%");
            $("#text6").html($sidebar6 + "%");
            $("#text7").html($sidebar7 + "%");
            $("#text8").html($sidebar8 + "%");
            $("#text9").html($sidebar9 + "%");
            $("#text10").html($sidebar10 + "%");

     
/////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%");
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              
              

/////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             




           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging5 = false;
       }  


        if (dragging6) 
       {        
          var presidebar6 = $sidebar6; 
           $sidebar6 = (parseInt((e.pageX / window.innerWidth) * 100) - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5));
          
          if ($sidebar6 < 20 && $sidebar6 > 0){
            $sidebar7 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                 $sidebar6 + $sidebar8 + $sidebar9 + $sidebar10);  

                     if ($sidebar7 < 0){ 
                          $sidebar7 = 1;

                          $sidebar8 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                $sidebar6 + $sidebar7 + $sidebar9 + $sidebar10);
                      } 

          }

          if ($sidebar6 > 19){

              var divide = parseInt((100 - $sidebar1 - $sidebar2 - $sidebar3 - $sidebar4 - $sidebar5 - $sidebar6)/4);
              var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + (divide * 4);

              if (sum == 100){
                  $sidebar7 = divide;
                  $sidebar8 = divide;
                  $sidebar9 = divide;
                  $sidebar10 = divide;
              }

              if (sum != 100){
                  var difference = 100 - sum;

                  if(difference == 9){
                      $sidebar7 = divide + 3;
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 2;
                      $sidebar10 = divide + 2;
                  }

                  if(difference == 8){
                      $sidebar7 = divide + 2;
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 2;
                      $sidebar10 = divide + 2;
                  }

                  if(difference == 7){
                      $sidebar7 = divide + 2;
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 2;
                      $sidebar10 = divide + 1;
                  }
                    
                  if(difference == 6){
                      $sidebar7 = divide + 2;
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 5){
                      $sidebar7 = divide + 2;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 4){
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 3){
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide;
                  }

                  if(difference == 2){
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }

                  if(difference == 1){
                      $sidebar7 = divide + 1;
                      $sidebar8 = divide;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }  

              }
                   
                   if ($sidebar10 == 0){
                       $sidebar10 = 1;
                       $sidebar9 = 1;
                       $sidebar8 = 1;
                       $sidebar7 = 1;
                       $sidebar6 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                          $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10);    
                                      
                    } 
          }

           if ($sidebar6 < 0){

               $sidebar7 = (-1)*$sidebar6 + $sidebar7 + presidebar6;

               var divide = parseInt((100 - $sidebar7 - $sidebar8 - $sidebar9 - $sidebar10)/6);
               var sum =  $sidebar7 + $sidebar8 + $sidebar9 + $sidebar10 +(divide * 6);

                        if (sum == 100){
                            $sidebar1 = divide;
                            $sidebar2 = divide;
                            $sidebar3 = divide;
                            $sidebar4 = divide;
                            $sidebar5 = divide;
                            $sidebar6 = divide;
                        }

                        if (sum != 100){
                            var difference = 100 - sum;

                                  $sidebar1 = divide;
                                  $sidebar2 = divide;
                                  $sidebar3 = divide;
                                  $sidebar4 = divide;
                                  $sidebar5 = divide;
                                  $sidebar6 = divide;

                              if(difference == 9){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 2;
                                  $sidebar5 += 2;
                                  $sidebar6 += 2;
                              }

                              if(difference == 8){
                                  $sidebar1 += 1;                                
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 2;
                                  $sidebar6 += 2;
                              }

                              if(difference == 7){
                                  $sidebar1 += 1;                                
                                  $sidebar2 += 1;                                
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 2;
                              }
                                
                              if(difference == 6){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;                                
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                              }

                              if(difference == 5){
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;                                
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                              }

                              if(difference == 4){
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                              }

                              if(difference == 3){
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                              }

                              if(difference == 2){
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                              }

                              if(difference == 1){
                                $sidebar6 += 1;
                              }                    
                        }

                           if( $sidebar1 == 0 || $sidebar1 < 0 ){ 
                                  $sidebar1 = 1;
                                  $sidebar2 = 1;
                                  $sidebar3 = 1;
                                  $sidebar4 = 1;
                                  $sidebar5 = 1;
                                  $sidebar6 = 1;

                                  $sidebar7 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                                        $sidebar6 + $sidebar8 + $sidebar9 + $sidebar10);
                            }                        

          }


         
            $("#text1").html($sidebar1 + "%");
            $("#text2").html($sidebar2 + "%");
            $("#text3").html($sidebar3 + "%");
            $("#text4").html($sidebar4 + "%");
            $("#text5").html($sidebar5 + "%");
            $("#text6").html($sidebar6 + "%");
            $("#text7").html($sidebar7 + "%");
            $("#text8").html($sidebar8 + "%");
            $("#text9").html($sidebar9 + "%");
            $("#text10").html($sidebar10 + "%");


/////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%");
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              
              
/////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             


           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging6 = false;
       }


        if (dragging7) 
       {

        console.log("dragging7");
          var presidebar7 = $sidebar7;
           $sidebar7 = (parseInt((e.pageX / window.innerWidth) * 100) - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6));

          if ($sidebar7 < 20 && $sidebar7 > 0){
            $sidebar8 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                $sidebar6 + $sidebar7 + $sidebar9 + $sidebar10); 

                    if ($sidebar8 < 0){ 
                          $sidebar8 = 1;

                          $sidebar9 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                $sidebar6 + $sidebar7 + $sidebar8 + $sidebar10);
                      }       
          }

          if ($sidebar7 > 19){

              var divide = parseInt((100 - $sidebar1 - $sidebar2 - $sidebar3 - $sidebar4 - $sidebar5 - $sidebar6 - $sidebar7)/3);
              var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + $sidebar7 + (divide * 3);

              if (sum == 100){
                  $sidebar8 = divide;
                  $sidebar9 = divide;
                  $sidebar10 = divide;
              }

              if (sum != 100){
                  var difference = 100 - sum;

                  if(difference == 9){
                      $sidebar8 = divide + 3;
                      $sidebar9 = divide + 3;
                      $sidebar10 = divide + 3;
                  }

                  if(difference == 8){
                      $sidebar8 = divide + 3;
                      $sidebar9 = divide + 3;
                      $sidebar10 = divide + 2;
                  }

                  if(difference == 7){
                      $sidebar8 = divide + 3;
                      $sidebar9 = divide + 3;
                      $sidebar10 = divide + 2;
                  }
                    
                  if(difference == 6){
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 2;
                      $sidebar10 = divide + 2;
                  }

                  if(difference == 5){
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 2;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 4){
                      $sidebar8 = divide + 2;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 3){
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 2){
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide;
                  }

                  if(difference == 1){
                      $sidebar8 = divide + 1;
                      $sidebar9 = divide;
                      $sidebar10 = divide;
                  }  

              }

                   if ($sidebar10 == 0){
                          console.log("in iffff");
                       $sidebar10 = 1;
                       $sidebar9 = 1;
                       $sidebar8 = 1;
                       $sidebar7 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                          $sidebar6 + $sidebar8 + $sidebar9 + $sidebar10);    
                                      
                    }              
           }

          if ($sidebar7 < 0){

              $sidebar8 = (-1)*$sidebar7 + $sidebar8 + presidebar7;

               var divide = parseInt((100 - $sidebar8 - $sidebar9 - $sidebar10)/7);
               var sum = $sidebar8 + $sidebar9 + $sidebar10 +(divide * 7);

                        if (sum == 100){
                            $sidebar1 = divide;
                            $sidebar2 = divide;
                            $sidebar3 = divide;
                            $sidebar4 = divide;
                            $sidebar5 = divide;
                            $sidebar6 = divide;
                            $sidebar7 = divide;
                        }

                        if (sum != 100){
                            var difference = 100 - sum;

                                  $sidebar1 = divide;
                                  $sidebar2 = divide;
                                  $sidebar3 = divide;
                                  $sidebar4 = divide;
                                  $sidebar5 = divide;
                                  $sidebar6 = divide;
                                  $sidebar7 = divide;

                              if(difference == 9){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 2;
                                  $sidebar7 += 2;
                              }

                              if(difference == 8){
                                  $sidebar1 += 1;                                
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 2;
                              }

                              if(difference == 7){
                                  $sidebar1 += 1;                                
                                  $sidebar2 += 1;                                
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                              }
                                
                              if(difference == 6){
                                  $sidebar2 += 1;                                
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                              }

                              if(difference == 5){
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;                                
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                              }

                              if(difference == 4){
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                              }

                              if(difference == 3){
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                              }

                              if(difference == 2){
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                              }

                              if(difference == 1){
                                $sidebar7 += 1;
                              }                    
                        }

                         if( $sidebar1 == 0 || $sidebar1 < 0 ){ 
                                  $sidebar1 = 1;
                                  $sidebar2 = 1;
                                  $sidebar3 = 1;
                                  $sidebar4 = 1;
                                  $sidebar5 = 1;
                                  $sidebar6 = 1;
                                  $sidebar7 = 1;

                                  $sidebar8 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                                        $sidebar6 + $sidebar7 + $sidebar9 + $sidebar10);
                            }                        

            }

           
            $("#text1").html($sidebar1 + "%");
            $("#text2").html($sidebar2 + "%");
            $("#text3").html($sidebar3 + "%");
            $("#text4").html($sidebar4 + "%");
            $("#text5").html($sidebar5 + "%");
            $("#text6").html($sidebar6 + "%");
            $("#text7").html($sidebar7 + "%");
            $("#text8").html($sidebar8 + "%");
            $("#text9").html($sidebar9 + "%");
            $("#text10").html($sidebar10 + "%");


/////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%");
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              
              

/////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             

           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging7 = false;
       } 


        if (dragging8) 
       {
          var presidebar8 = $sidebar8;
           $sidebar8 = (parseInt((e.pageX / window.innerWidth) * 100) - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + $sidebar7));           

          if ($sidebar8 < 20 && $sidebar8 > 0){

            $sidebar9 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                $sidebar6 + $sidebar7 + $sidebar8 + $sidebar10);

                      if ($sidebar9 < 0){ 
                          $sidebar9 = 1;

                          $sidebar10 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9);
                      }
                       
         }

          if ($sidebar8 > 19){

              var divide = parseInt((100 - $sidebar1 - $sidebar2 - $sidebar3 - $sidebar4 - $sidebar5 - $sidebar6 - $sidebar7 - $sidebar8)/2);
              var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + $sidebar7 + $sidebar8 + (divide * 2);

              if (sum == 100){
                  $sidebar9 = divide;
                  $sidebar10 = divide;
              }

              if (sum != 100){
                  var difference = 100 - sum;

                  if(difference == 9){
                      $sidebar9 = divide + 5;
                      $sidebar10 = divide + 4;
                  }

                  if(difference == 8){
                      $sidebar9 = divide + 4;
                      $sidebar10 = divide + 4;
                  }

                  if(difference == 7){
                      $sidebar9 = divide + 4;
                      $sidebar10 = divide + 3;
                  }
                    
                  if(difference == 6){
                      $sidebar9 = divide + 3;
                      $sidebar10 = divide + 3;
                  }

                  if(difference == 5){
                      $sidebar9 = divide + 3;
                      $sidebar10 = divide + 2;
                  }

                  if(difference == 4){
                      $sidebar9 = divide + 2;
                      $sidebar10 = divide + 2;
                  }

                  if(difference == 3){
                      $sidebar9 = divide + 2;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 2){
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide + 1;
                  }

                  if(difference == 1){
                      $sidebar9 = divide + 1;
                      $sidebar10 = divide;
                  }  

              }

                     if ($sidebar10 == 0){
                          console.log("in iffff");
                       $sidebar10 = 1;
                       $sidebar9 = 1;
                      $sidebar8 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                          $sidebar6 + $sidebar7 + $sidebar9 + $sidebar10);                    
                    }              

           }


           if ($sidebar8 < 0){

              $sidebar9 = (-1)*$sidebar8 + $sidebar9 + presidebar8;

               var divide = parseInt((100 - $sidebar9 - $sidebar10)/8);
               var sum = $sidebar9 +  $sidebar10 + (divide * 8);

                        if (sum == 100){
                            $sidebar1 = divide;
                            $sidebar2 = divide;
                            $sidebar3 = divide;
                            $sidebar4 = divide;
                            $sidebar5 = divide;
                            $sidebar6 = divide;
                            $sidebar7 = divide;
                            $sidebar8 = divide;
                        }

                        if (sum != 100){
                            var difference = 100 - sum;

                                  $sidebar1 = divide;
                                  $sidebar2 = divide;
                                  $sidebar3 = divide;
                                  $sidebar4 = divide;
                                  $sidebar5 = divide;
                                  $sidebar6 = divide;
                                  $sidebar7 = divide;
                                  $sidebar8 = divide;

                              if(difference == 9){
                                  $sidebar1 += 2;
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                              }

                              if(difference == 8){
                                  $sidebar1 += 1;                                
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                              }

                              if(difference == 7){
                                  $sidebar2 += 1;                                
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                              }
                                
                              if(difference == 6){
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                              }

                              if(difference == 5){
                                  $sidebar4 += 1;                                
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                              }

                              if(difference == 4){
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                              }

                              if(difference == 3){
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                              }

                              if(difference == 2){
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                              }

                              if(difference == 1){
                                  $sidebar8 += 1;
                              }                    
                        }
                          if( $sidebar1 == 0 || $sidebar1 < 0 ){ 
                                  $sidebar1 = 1;
                                  $sidebar2 = 1;
                                  $sidebar3 = 1;
                                  $sidebar4 = 1;
                                  $sidebar5 = 1;
                                  $sidebar6 = 1;
                                  $sidebar7 = 1;
                                  $sidebar8 = 1;

                                  $sidebar9 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                                        $sidebar6 + $sidebar7 + $sidebar8 + $sidebar10);
                            }                        

            }




            $("#text1").html($sidebar1 + "%");
            $("#text2").html($sidebar2 + "%");
            $("#text3").html($sidebar3 + "%");
            $("#text4").html($sidebar4 + "%");
            $("#text5").html($sidebar5 + "%");
            $("#text6").html($sidebar6 + "%");
            $("#text7").html($sidebar7 + "%");
            $("#text8").html($sidebar8 + "%");
            $("#text9").html($sidebar9 + "%");
            $("#text10").html($sidebar10 + "%");

  /////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%");
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              
              
/////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             


           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging8 = false;
       }  


        if (dragging9) 
       {

          var presidebar9 = $sidebar9;
           $sidebar9 = (parseInt((e.pageX / window.innerWidth) * 100) - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + $sidebar7 + $sidebar8));

            if ($sidebar9 < 20 && $sidebar9 > 0){
               $sidebar10 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9);  
            }

            if ($sidebar9 == 20){

              $sidebar10 = 1;
               $sidebar9 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                  $sidebar6 + $sidebar7 + $sidebar8 + $sidebar10);  
            }



            if ($sidebar9 > 19){

                    var divide = parseInt(100 - $sidebar1 - $sidebar2 - $sidebar3 - $sidebar4 - $sidebar5 - $sidebar6 - $sidebar7 - $sidebar8 - $sidebar9);
                    var sum = $sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9 + divide;

                    if (sum == 100){
                        $sidebar10 = divide;
                    }

                    if (sum != 100){
                        var difference = 100 - sum;

                            if(difference == 9){
                                $sidebar10 = divide + 9;
                            }

                            if(difference == 8){
                                $sidebar10 = divide + 8;
                            }

                            if(difference == 7){
                                $sidebar10 = divide + 7;
                            }
                              
                            if(difference == 6){
                                $sidebar10 = divide + 6;
                            }

                            if(difference == 5){
                                $sidebar10 = divide + 5;
                            }

                            if(difference == 4){
                                $sidebar10 = divide + 4;
                            }

                            if(difference == 3){
                                $sidebar10 = divide + 3;
                            }

                            if(difference == 2){
                                $sidebar10 = divide + 2;
                            }

                            if(difference == 1){
                                $sidebar10 = divide + 1;
                            }  

                    }

               }

           if ($sidebar9 < 0){

              $sidebar10 = (-1)*$sidebar9 + $sidebar10 + presidebar9;

               var divide = parseInt((100 - $sidebar10)/9);
               var sum = $sidebar10 + (divide * 9);

                        if (sum == 100){
                            $sidebar1 = divide;
                            $sidebar2 = divide;
                            $sidebar3 = divide;
                            $sidebar4 = divide;
                            $sidebar5 = divide;
                            $sidebar6 = divide;
                            $sidebar7 = divide;
                            $sidebar8 = divide;
                            $sidebar9 = divide;
                        }

                        if (sum != 100){
                            var difference = 100 - sum;

                                  $sidebar1 = divide;
                                  $sidebar2 = divide;
                                  $sidebar3 = divide;
                                  $sidebar4 = divide;
                                  $sidebar5 = divide;
                                  $sidebar6 = divide;
                                  $sidebar7 = divide;
                                  $sidebar8 = divide;
                                  $sidebar9 = divide;

                              if(difference == 9){
                                  $sidebar1 += 1;
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                                  $sidebar9 += 1;
                              }

                              if(difference == 8){
                                  $sidebar2 += 1;
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                                  $sidebar9 += 1;
                              }

                              if(difference == 7){
                                  $sidebar3 += 1;
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                                  $sidebar9 += 1;
                              }
                                
                              if(difference == 6){
                                  $sidebar4 += 1;
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                                  $sidebar9 += 1;
                              }

                              if(difference == 5){
                                  $sidebar5 += 1;
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                                  $sidebar9 += 1;
                              }

                              if(difference == 4){
                                  $sidebar6 += 1;
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                                  $sidebar9 += 1;
                              }

                              if(difference == 3){
                                  $sidebar7 += 1;
                                  $sidebar8 += 1;
                                  $sidebar9 += 1;
                              }

                              if(difference == 2){
                                  $sidebar8 += 1;
                                  $sidebar9 += 1;
                              }

                              if(difference == 1){
                                  $sidebar9 += 1;
                              }                    
                        }

                          if( $sidebar1 == 0 || $sidebar1 < 0 ){ 
                                  $sidebar1 = 1;
                                  $sidebar2 = 1;
                                  $sidebar3 = 1;
                                  $sidebar4 = 1;
                                  $sidebar5 = 1;
                                  $sidebar6 = 1;
                                  $sidebar7 = 1;
                                  $sidebar8 = 1;
                                  $sidebar9 = 1;

                                  $sidebar10 = 100 - ($sidebar1 + $sidebar2 + $sidebar3 + $sidebar4 + $sidebar5 + 
                                                        $sidebar6 + $sidebar7 + $sidebar8 + $sidebar9);
                            }                        

           }

  
            $("#text1").html($sidebar1 + "%");
            $("#text2").html($sidebar2 + "%");
            $("#text3").html($sidebar3 + "%");
            $("#text4").html($sidebar4 + "%");
            $("#text5").html($sidebar5 + "%");
            $("#text6").html($sidebar6 + "%");
            $("#text7").html($sidebar7 + "%");
            $("#text8").html($sidebar8 + "%");
            $("#text9").html($sidebar9 + "%");
            $("#text10").html($sidebar10 + "%");

/////////////// width sidebar ////////////////

                  $('#sidebar1').css("width", $sidebar1 + "%");
                  $('#sidebar2').css("width", $sidebar2 + "%");
                  $('#sidebar3').css("width", $sidebar3 + "%");
                  $('#sidebar4').css("width", $sidebar4 + "%");
                  $('#sidebar5').css("width", $sidebar5 + "%");
                  $('#sidebar6').css("width", $sidebar6 + "%");
                  $('#sidebar7').css("width", $sidebar7 + "%");
                  $('#sidebar8').css("width", $sidebar8 + "%");
                  $('#sidebar9').css("width", $sidebar9 + "%");
                  $('#sidebar10').css("width", $sidebar10 + "%");              


/////////////// text sidebar ////////////////


              if( $sidebar1 == 1 || $sidebar1 == 2){
                  $('#text1').css("font-size", "40%");
              }
              if( $sidebar1 > 2 && $sidebar1 < 6){
                  $('#text1').css("font-size", "80%");
              }
              if( $sidebar1 > 5 && $sidebar1 < 15){
                  $('#text1').css("font-size", "120%");
              }
              if( $sidebar1 > 14 && $sidebar1 < 40){
                  $('#text1').css("font-size", "160%");
              }
              if( $sidebar1 > 39 && $sidebar1 < 100){
                  $('#text1').css("font-size", "200%");
              }
              if( $sidebar2 == 1 || $sidebar2 == 2){
                  $('#text2').css("font-size", "40%");
              }
              if( $sidebar2 > 2 && $sidebar2 < 6){
                  $('#text2').css("font-size", "80%");
              }
              if( $sidebar2 > 5 && $sidebar2 < 15){
                  $('#text2').css("font-size", "120%");
              }
              if( $sidebar2 > 14 && $sidebar2 < 40){
                  $('#text2').css("font-size", "160%");
              }
              if( $sidebar2 > 39 && $sidebar2 < 100){
                  $('#text2').css("font-size", "200%");
              }
              if( $sidebar3 == 1 || $sidebar3 == 2){
                  $('#text3').css("font-size", "40%");
              }
              if( $sidebar3 > 2 && $sidebar3 < 6){
                  $('#text3').css("font-size", "80%");
              }
              if( $sidebar3 > 5 && $sidebar3 < 15){
                  $('#text3').css("font-size", "120%");
              }
              if( $sidebar3 > 14 && $sidebar3 < 40){
                  $('#text3').css("font-size", "160%");
              }
              if( $sidebar3 > 39 && $sidebar3 < 100){
                  $('#text3').css("font-size", "200%");
              }
              if( $sidebar4 == 1 || $sidebar4 == 2){
                  $('#text4').css("font-size", "40%");
              }
              if( $sidebar4 > 2 && $sidebar4 < 6){
                  $('#text4').css("font-size", "80%");
              }
              if( $sidebar4 > 5 && $sidebar4 < 15){
                  $('#text4').css("font-size", "120%");
              }
              if( $sidebar4 > 14 && $sidebar4 < 40){
                  $('#text4').css("font-size", "160%");
              }
              if( $sidebar4 > 39 && $sidebar4 < 100){
                  $('#text4').css("font-size", "200%");
              }
              if( $sidebar5 == 1 || $sidebar5 == 2){
                  $('#text5').css("font-size", "40%");
              }
              if( $sidebar5 > 2 && $sidebar5 < 6){
                  $('#text5').css("font-size", "80%");
              }
              if( $sidebar5 > 5 && $sidebar5 < 15){
                  $('#text5').css("font-size", "120%");
              }
              if( $sidebar5 > 14 && $sidebar5 < 40){
                  $('#text5').css("font-size", "160%");
              }
              if( $sidebar5 > 39 && $sidebar5 < 100){
                  $('#text5').css("font-size", "200%");
              }
              if( $sidebar6 == 1 || $sidebar6 == 2){
                  $('#text6').css("font-size", "40%");
              }
              if( $sidebar6 > 2 && $sidebar6 < 6){
                  $('#text6').css("font-size", "80%");
              }
              if( $sidebar6 > 5 && $sidebar6 < 15){
                  $('#text6').css("font-size", "120%");
              }
              if( $sidebar6 > 14 && $sidebar6 < 40){
                  $('#text6').css("font-size", "160%");
              }
              if( $sidebar6 > 39 && $sidebar6 < 100){
                  $('#text6').css("font-size", "200%");
              }
              if( $sidebar7 == 1 || $sidebar7 == 2){
                  $('#text7').css("font-size", "40%");
              }
              if( $sidebar7 > 2 && $sidebar7 < 6){
                  $('#text7').css("font-size", "80%");
              }
              if( $sidebar7 > 5 && $sidebar7 < 15){
                  $('#text7').css("font-size", "120%");
              }
              if( $sidebar7 > 14 && $sidebar7 < 40){
                  $('#text7').css("font-size", "160%");
              }
              if( $sidebar7 > 39 && $sidebar7 < 100){
                  $('#text7').css("font-size", "200%");
              }
              if( $sidebar8 == 1 || $sidebar8 == 2){
                  $('#text8').css("font-size", "40%");
              }
              if( $sidebar8 > 2 && $sidebar8 < 6){
                  $('#text8').css("font-size", "80%");
              }
              if( $sidebar8 > 5 && $sidebar8 < 15){
                  $('#text8').css("font-size", "120%");
              }
              if( $sidebar8 > 14 && $sidebar8 < 40){
                  $('#text8').css("font-size", "160%");
              }
              if( $sidebar8 > 39 && $sidebar8 < 100){
                  $('#text8').css("font-size", "200%");
              }
              if( $sidebar9 == 1 || $sidebar9 == 2){
                  $('#text9').css("font-size", "40%");
              }
              if( $sidebar9 > 2 && $sidebar9 < 6){
                  $('#text9').css("font-size", "80%");
              }
              if( $sidebar9 > 5 && $sidebar9 < 15){
                  $('#text9').css("font-size", "120%");
              }
              if( $sidebar9 > 14 && $sidebar9 < 40){
                  $('#text9').css("font-size", "160%");
              }
              if( $sidebar9 > 39 && $sidebar9 < 100){
                  $('#text9').css("font-size", "200%");
              }  
              if( $sidebar10 == 1 || $sidebar10 == 2){
                  $('#text10').css("font-size", "40%");
              }
              if( $sidebar10 > 2 && $sidebar10 < 6){
                  $('#text10').css("font-size", "80%");
              }
              if( $sidebar10 > 5 && $sidebar10 < 15){
                  $('#text10').css("font-size", "120%");
              }
              if( $sidebar10 > 14 && $sidebar10 < 40){
                  $('#text10').css("font-size", "160%");
              }
              if( $sidebar10 > 39 && $sidebar10 < 100){
                  $('#text10').css("font-size", "200%");
              }             




           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging9 = false;
       } 

    }); 

// $( document ).onload(function(){
//         function myFunction() {
//           document.getElementById("demo").innerHTML = "Hello World";

//           // var data = {};
//           // data.
//       }
// });


});

