/**
 * 假定有一个方法isSubstring,可检查一个但是是否为其他字符串的子串
 * 给定字符串s1和s2，请填写代码检查s2是否为s1旋转而成，要求只能调用一次isSubString
 *
 * s1 = xy = waterbottle
 * x = wat
 * y = erbottle
 * s2 = yx = erbottlewat
 *
 * yx肯定是xyxy的子串，也就是s2总是s1s1
 */

function isRotation(s1, s2) {
    var len = s1.length;

    if (len === s2.length && len > 0) {
        var s1s1 = s1 + s1;
        return isSubstring(s1s1, s2);
    }

    return false;
}
