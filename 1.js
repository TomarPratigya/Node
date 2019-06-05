var funclist= [];
function makeList(){

	for(let i=0;i<5;i++){
		funclist.push(
			function(){
				console.log(i);
			});
	}
}
function call(){
	var j=0;
	for(j=0;j<5;j++){
		funclist[j]();
	}
}
makeList();
call();