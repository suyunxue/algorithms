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
