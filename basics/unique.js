//数组去重，效率最快，空间最大
//要注意类型的不同
function unique2(arr){
	var n = {};
	var r = [];
	var len = arr.length;
	var val;
	var type;

	for (var i = 0; i < len; i++){
		val = arr[i];
		type = typeof val;
		if(!n[val]){
			n[val] = [type];
			r.push(val);
		}else if(n[val].indexOf(type) < 0){
			n[val].push(type);
			r.push(val);
		}
	}

	return r;
}