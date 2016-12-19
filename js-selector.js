//js自己实现一个从上而下的选择器
window.onload = function () {
    function find(selector, root) {
        //分割选择器，一个一个查找
        root = root || document;

        var parts = selector.split(' ');
        var query = parts[0];
        var rest = parts.slice(1).join(' ');
        var elems = root.getElementsByTagName(query);
        var results = [];

        for (var i = 0; i < elems.length; i++) {
            if (rest) {
                results = results.concat(query, find(rest, elems[i]));
            } else {
                results.push(elems[i]);
            }

        }

        return  results;
    }
}
