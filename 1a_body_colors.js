/*Links_객체*/
var Links = {
    SetcolorListAll:function (self,color){ 
    var a_list = document.querySelectorAll (self);
    var i = 0;
      while(i < a_list.length){
        console.log(a_list[i]);
        a_list[i].style.color      = color;
        i = i + 1;
      }
    }
  }

  /*Body_객체*/
  var Body = {
    setColor:function (color){
    document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
    } 
  }

  /*Grid3_객체*/ 
  var Grid3 = {
    setBackgroundColor:function (color){
    document.querySelector('#grid3').style.backgroundColor = color;
    }
  }
    
  function Dark_LightHandler(self){

    if(self.value === 'Dark'){
      Body. setBackgroundColor('black');
      Body. setColor          ('white'); 
      Links.SetcolorListAll   ('a','white')
      Grid3.setBackgroundColor('black');
      
      self.value = 'Light';
    }
    else {
      Body. setBackgroundColor('white');
      Body. setColor          ('black'); 
      Links.SetcolorListAll   ('a','black')                      
      Grid3.setBackgroundColor('rgb(241, 241, 241)');

      self.value = 'Dark';
    }      
  }