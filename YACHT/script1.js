//주사위 리롤 할 때 필요한 내용
let dicelist = [1,2,3,4,5];
let changedice = [];

var dice = []; 
//주사위 랜덤 부여
for(var i=0;i<5;i++){
        dice[i] = Math.floor(Math.random()*6)+1;   
        }  
var result = {};
        dice.forEach((x) => {
        result[x] = (result[x] || 0)+1;
    });
//리롤 체크할 때 클릭 횟수 변수
let clickcountDice1 = 0;
let clickcountDice2 = 0;
let clickcountDice3 = 0;
let clickcountDice4 = 0;
let clickcountDice5 = 0;

//주사위 누를 시 색상 변경 후 인덱스를 changedice에 추가/ 두번째로 누르면 배열에 삭제, 흰색으로 변경
document.querySelector(".btn1").addEventListener("click",function(){
    clickcountDice1 +=1;
    if(clickcountDice1 % 2!=0){
        document.querySelector(".btn1").style.backgroundColor = 'red';
        changedice.push(1);
    }else{
        document.querySelector(".btn1").style.backgroundColor = 'white';
        for(let i = 0; i < changedice.length; i++) {
          if(changedice[i] === 1)  {
            changedice.splice(i, 1);
            i--;
          }
          }
    }
})
document.querySelector(".btn2").addEventListener("click",function(){
    clickcountDice2 +=1;
    if(clickcountDice2 % 2!=0){
        document.querySelector(".btn2").style.backgroundColor = 'red';
        changedice.push(2);
    }else{
        document.querySelector(".btn2").style.backgroundColor = 'white';
        for(let i = 0; i < changedice.length; i++) {
          if(changedice[i] === 2)  {
            changedice.splice(i, 1);
            i--;
          }
          }
    }
})
document.querySelector(".btn3").addEventListener("click",function(){
    clickcountDice3 +=1;    
    if(clickcountDice3 % 2!=0){
        document.querySelector(".btn3").style.backgroundColor = 'red';
        changedice.push(3);
    }else{
        document.querySelector(".btn3").style.backgroundColor = 'white';
        for(let i = 0; i < changedice.length; i++) {
          if(changedice[i] === 3)  {
            changedice.splice(i, 1);
            i--;
          }
          }
    }
})
document.querySelector(".btn4").addEventListener("click",function(){
    clickcountDice4 +=1;
    if(clickcountDice4 % 2!=0){
        document.querySelector(".btn4").style.backgroundColor = 'red';
        changedice.push(4);
    }else{
        document.querySelector(".btn4").style.backgroundColor = 'white';
        for(let i = 0; i < changedice.length; i++) {
          if(changedice[i] === 4)  {
            changedice.splice(i, 1);
            i--;
          }
          }
    }
})
document.querySelector(".btn5").addEventListener("click",function(){
    clickcountDice5 +=1;
    if(clickcountDice5 % 2!=0){
        document.querySelector(".btn5").style.backgroundColor = 'red';
        changedice.push(5);
    }else{
        document.querySelector(".btn5").style.backgroundColor = 'white';
        for(let i = 0; i < changedice.length; i++) {
          if(changedice[i] === 5)  {
            changedice.splice(i, 1);
            i--;
          }
          }
    }
})

function Sumones(a,dice){
    var sum=0;
    for(var i=0;i<5;i++){
        if(dice[i]==a){
            sum+=a;
        }
    }
    return sum;
}

function choice(dice){
    var sum=0;
    for(var i=0;i<5;i++){
        sum+=dice[i];
    }
    return sum;
}

function yacht(result){
     var yachtPoint=0;
     for(var i=1;i<7;i++){
        if(result[i]==5){
            yachtPoint=50;
            break;
        }
    }
        return yachtPoint;
}

function littleStraight(result){
    var littlestraightPoint = 50;
    for(var i=1;i<6;i++){
        if(result[i]!=1){
            littlestraightPoint = 0;
        }
    }
    return littlestraightPoint;
}

function bigStraight(result){
    var bigstraightPoint = 50;
    for(var i=2;i<7;i++){
        if(result[i]!=1){
            bigstraightPoint = 0;
        }
    }
    return bigstraightPoint;
}

function fullhouse(result,dice){
    var fullhousePoint = 0;
    var fcount=0;
    var sum=0;
    for(var i=1;i<7;i++){
        if(result[i]==3){
            fcount+=2;
        }
    }
    for(var i=1;i<7;i++){
        if(result[i]==2){
            fcount+=1;
        }
    }
    for(var i=0;i<5;i++){
        sum+=dice[i];
    }
    if(fcount==3){
        fullhousePoint = sum;
        fcount = 0;
    }else{
        fullhousePoint = 0;
    }
    return fullhousePoint;
}

function forofakind(result){
    var forofakindPoint=0;
    for(var i=1;i<7;i++){
        if(result[i]==4){
           forofakindPoint = i*4;
        }else if(result[i]==5){
            forofakindPoint = i*5;           
        }
    }
    return forofakindPoint;
}





//주사위 굴린 횟수 카운트
let clickcountRoll = 0;

// 주사위 굴리기 
document.querySelector(".roll").addEventListener("click",function(){
    
    if(clickcountRoll<3){
    document.querySelector(".keep").innerHTML="choose what to keep";
    document.querySelector(".lastkeep").innerHTML=`last keep chance: ${2-clickcountRoll}`;
    //주사위 랜덤 부여
    let lastdice = dicelist.filter(x =>!changedice.includes(x));
    for(var i=0;i<lastdice.length;i++){
        let index = lastdice[i]-1;
        dice[index] = Math.floor(Math.random()*6)+1;
    }
    //중복체크하고, 중복된 요소를 저장하는 result object
    result = {};
    dice.forEach((x) => {
    result[x] = (result[x] || 0)+1;
    });
    }   
    document.querySelector(".btn1").innerHTML=`${dice[0]}`;
    document.querySelector(".btn2").innerHTML=`${dice[1]}`;
    document.querySelector(".btn3").innerHTML=`${dice[2]}`;
    document.querySelector(".btn4").innerHTML=`${dice[3]}`;
    document.querySelector(".btn5").innerHTML=`${dice[4]}`;
    
    document.querySelector(".scones").innerHTML=`${Sumones(1,dice)}`;
    document.querySelector(".sctwos").innerHTML=`${Sumones(2,dice)}`;
    document.querySelector(".scthrees").innerHTML=`${Sumones(3,dice)}`;
    document.querySelector(".scfours").innerHTML=`${Sumones(4,dice)}`;
    document.querySelector(".scfives").innerHTML=`${Sumones(5,dice)}`;
    document.querySelector(".scsixs").innerHTML=`${Sumones(6,dice)}`;
    document.querySelector(".scchoice").innerHTML=`${choice(dice)}`;
    document.querySelector(".sclilstraight").innerHTML=`${littleStraight(result)}`;
    document.querySelector(".scyacht").innerHTML=`${yacht(result)}`;
    document.querySelector(".scbigstraight").innerHTML=`${bigStraight(result)}`;
    document.querySelector(".scfullhouse").innerHTML=`${fullhouse(result,dice)}`
    document.querySelector(".scfourofakind").innerHTML=`${forofakind(result)}`;
    clickcountRoll +=1;
})

function endmention(){
    alert("end!");
    location.replace(location.href);
}


//족보 눌러서 점수 합산
let total = 0;
let clickcountbtn = 0;
//ones
document.querySelector(".ones").addEventListener("click",function(){
    total += Sumones(1,dice);
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".ones").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".twos").addEventListener("click",function(){
    total += Sumones(2,dice);
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".twos").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention()
}
},{ once : true })

document.querySelector(".threes").addEventListener("click",function(){
    total += Sumones(3,dice);
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".threes").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".fours").addEventListener("click",function(){
    total += Sumones(4,dice);
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".fours").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".fives").addEventListener("click",function(){
    total += Sumones(5,dice);
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".fives").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".sixs").addEventListener("click",function(){
    total += Sumones(6,dice);
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".sixs").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".choice").addEventListener("click",function(){
    total += choice(dice);
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".choice").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".lilstraight").addEventListener("click",function(){
    const lilstraightscore = littleStraight(result);
    total += lilstraightscore;
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".lilstraight").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".bigstraight").addEventListener("click",function(){
    const bigstraightscore = bigStraight(result);
    total += bigstraightscore;
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".bigstraight").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".fullhouse").addEventListener("click",function(){
    const fullhousescore = fullhouse(result,dice);
    total += fullhouse(result,dice);
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".fullhouse").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".fourofakind").addEventListener("click",function(){
    const forofakindscore = forofakind(result);
    total += forofakindscore;
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".fourofakind").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })

document.querySelector(".yacht").addEventListener("click",function(){
    const yachtscore = yacht(result);
    total += yachtscore;
    document.querySelector(".score").innerHTML=`${total}`;
    document.querySelector(".yacht").style.backgroundColor = 'blue';
    clickcountRoll = 0;
    clickcountDice1 = 0;
    clickcountDice2 = 0;
    clickcountDice3 = 0;
    clickcountDice4 = 0;
    clickcountDice5 = 0;
    changedice = [];
    for(var i=0;i<5;i++){
    document.querySelectorAll(".dice")[i].style.backgroundColor = 'white';
    }
    clickcountbtn ++;
    if(clickcountbtn == 12){
    endmention();
}
},{ once : true })



























