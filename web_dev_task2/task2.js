fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
              .then(res =>{
                return res.json();
              })
              .then(data=>{
                // sorting
              function compare(a,b){
                return b.points-a.points;
              }

              data.sort(compare);
              console.log(data);

              // displaying data for top 3 
              
              console.log(document.getElementsByClassName("name score")[0].innerHTML=data[1].name+"  .  "+data[1].points);
              console.log(document.getElementsByClassName("sphoto")[0].src=data[1].avatar);
                
              console.log(document.getElementsByClassName("name score")[1].innerHTML=data[0].name+"  .  "+data[0].points);
              console.log(document.getElementsByClassName("sphoto")[1].src=data[0].avatar);

              console.log(document.getElementsByClassName("name score")[2].innerHTML=data[2].name+"  .  "+data[2].points);
              console.log(document.getElementsByClassName("sphoto")[2].src=data[2].avatar);


              // displaying data for rest
              var div = document.getElementsByClassName("rest1");

              if(data.length>3){
                for(var i=3;i<data.length;i++){
                if(i>3){
                  var  cloned =div[0].cloneNode(true);
                  document.body.appendChild(cloned);
                  }
                } 

              for(var i=3;i<data.length;i++){
                console.log(document.getElementsByClassName("name")[i].innerHTML=data[i].name);
                console.log(document.getElementsByClassName("score")[i].innerHTML=data[i].points);
                console.log(document.getElementsByClassName("sphoto")[i].src=data[i].avatar);
                }

                for(var i=0;i<data.length;i++){
                  document.getElementsByClassName("index")[i].innerHTML=i+4;
                }
              }
              else{
                var rem = document.getElementById("rest1");
                rem.remove();
              }


              })
              
              .catch(error=>console.log(error));
              