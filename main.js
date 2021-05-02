var dict = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
res = ""
var args = process.argv.slice(2);

args.forEach(num => {
     res += convertNum(num) + ","
});
res = res.slice(0, -1)
console.log(res);


convertNum(23)
function convertNum(val) {
    var res = "";
    while (val != 0) {
        var digit = dict[val%10];
        val = Math.floor(val /= 10);
        res = digit + res;
    }
    return res;
}