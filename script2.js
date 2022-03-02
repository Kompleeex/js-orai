//*tömbök (lista)*/

var tomb =[];
var tomb2 = [2,3,4,5,6];
var tomb3 = [4];

console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);

tomb2[0]=12;

var txt="";
for (let index = 0; index < tomb2.length; index++) {
    txt += tomb2[index] + ", ";
    
}

console.log(txt);

var gyumolcs = ["alma", "malna", "barack", "ribizli", "paradicsom"];
var gyumolcsszin = ["piros", "piros", "sarga", "piros", "piros"];
var gyumolcsar = [240, 500,300,250,500];


var i= 0;
while(i<gyumolcsszin.length && !(gyumolcsszin[i]==="sarga")){
    i++;
}

var vane = i<gyumolcsszin.length;
console.log("van sarga szinu gyumolcs: " + vane)


var osszeg = 0;

for (let index = 0; index < gyumolcsszin.length; index++) {
    if(gyumolcsszin[index] === "piros"){
        osszeg = osszeg + gyumolcsar[index]
    }
     
}

console.log(osszeg)

var db = 0
for (let index2 = 0; index2 < gyumolcsar.length; index2++) {
    if(gyumolcsar[index2]< 300){
        db++
    }
    
}

console.log(db)


var db2 = 0;
while(db2 < gyumolcsar.length && !(gyumolcsar[db2] > 1000)){
    db2++
}

var logikai = db2 < gyumolcsar.length
console.log("van e 1000 ft feletti: " +logikai)