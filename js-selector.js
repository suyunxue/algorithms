//自下而上的选择器引擎
window.onload = function () {
    function find(selector, root) {
        root = root || document;

        var parts = selector.split(' ');
        var query = parts[parts.length - 1];
        var rest = parts.slice(0, -1).join('');
        var elems = root.getElementsByTagName(query);
        var results = [];

        for (var i = 0; i < elems.length; i++) {
            if (rest) {

                var parent = elems[i].parentNode;
                while(parent && parent.nodeName != rest) {
                    parent = parent.parentNode;
                }

                if (parent) {
                    results.push(elems[i]);
                }
            } else {
                results.push(elems[i]);
            }
        }

        return results;

    }
}





//从上而下的选择器引用
	//在即时函数中定义unique()函数，从而创建一个闭包，是的在里面可以访问run变量
	//但是在外面就不行
	(function () {
		//持续跟踪run变量，每次函数调用的时候都增加run变量的值，
		//该唯一值用于测试唯一性
		var run = 0;

		//接收一个元素数组，并从原始数组中返回一个仅包含不同元素的新数组
		this.unique = function (array) {

			var ret = [];

			run++;

			for (var i = 0, length = array.length; i < length; i++) {
				var elem = array[i];

				//遍历原始数组，赋值还没见到的元素，
				//标识这些元素，使得我们可以知道已经见过了
				if(elem.uniqueID !== run) {
					var elem = array[i];

					if (elem.uniqueID !== run) {
						elem.uniqueID = run;
						ret.push(array[i]);
					}
				}

			}

			//返回只包含不同元素的结果数组
			return ret;
		}
	})();





































//js自己实现一个从上而下的选择器
window.onload = function () {
    function find(selector, root) {

        //如果没有提供root，就从document开始查找
        root = root || document;

        //通过空格分离选择器，取出第一段结果，其余的放一起，
        //查找匹配第一段选择器的元素，并初始化一个数组，将查询结果保存起来
        var parts = selector.split(' ');
        var query = parts[0];
        var rest = parts.slice(1).join(' ');
        var elems = root.getElementsByTagName(query);
        var results = [];

        for (var i = 0; i < elems.length; i++) {
            if (rest) {

                //递归调用find()直到所有的选择器都都查找过了
                results = results.concat(query, find(rest, elems[i]));
            } else {

                //将查找到的元素保存在results数组上
                results.push(elems[i]);
            }

        }

        //返回匹配的元素列表
        return  results;
    }
}
