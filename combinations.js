//这是字母的全排列问题，可以先手工，然后找出规律
var out = [];
var str = 'wxyz';
function combine(start){
	for (var i = start; i < str.length; i++){
		out.push(str[i]);
		console.log(out.join(''));
		if(i < str.length){
			combine(i + 1);
		}
		out.length = out.length - 1;
	}
}