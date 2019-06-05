function add(a,b,c...tail){//gather function
	console.log(tail);
	return a+b+c;
}
var list= [5,6,8];
//console.log(add(list[0], list[1], list[2])); one method
console.log(add(...list)); //spread function

function makeList(...list){
	return list;
}
console.log(makeList(1,2,3,4,5,6));
console.log(makeList(1,2));