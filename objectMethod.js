const obj={
    name:"sujay",
    age:28
}

for( a in obj){
    console.log(a,obj[a])
}
for(const [key,value] of Object.entries(obj)){
    console.log(key,value);

}

