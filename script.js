function calculatePizza(){

const people=parseInt(document.getElementById("people").value);

if(!people||people<1){
alert("Enter a valid number of people.");
return;
}

const today=new Date().getDay();
const tuesday=today===2;

const pizzas=[
{
name:"Small",
feeds:1,
price:tuesday?5:5
},
{
name:"Large",
feeds:2,
price:tuesday?6:9.45
},
{
name:"Family",
feeds:4,
price:tuesday?10:13.45
}
];

let best=null;

for(let f=0;f<=10;f++){

for(let l=0;l<=10;l++){

for(let s=0;s<=10;s++){

const fed=f*4+l*2+s;

if(fed>=people){

const cost=f*(tuesday?10:13.45)+
l*(tuesday?6:9.45)+
s*5;

if(best==null||cost<best.cost){

best={
family:f,
large:l,
small:s,
cost:cost,
fed:fed
};

}

}

}

}

}

document.getElementById("result").innerHTML=`
<h3>🍕 Best Recommendation</h3>

<p><strong>${best.family}</strong> Family</p>

<p><strong>${best.large}</strong> Large</p>

<p><strong>${best.small}</strong> Small</p>

<hr>

<p><strong>Total Cost:</strong> $${best.cost.toFixed(2)}</p>

<p><strong>Cost per Person:</strong> $${(best.cost/people).toFixed(2)}</p>

<p><strong>${tuesday?"✅ Tuesday prices applied":"📅 Regular prices applied"}</strong></p>

<p>Feeds approximately ${best.fed} people.</p>
`;

}
