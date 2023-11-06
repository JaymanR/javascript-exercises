const sumAll = function(x, y) {
    let val = 0;

   if (!(typeof(x) === 'object' || typeof(y) === 'object' ||
    typeof(x) === 'string' || typeof(y) === 'string')) {
    if (x > 0 && y > 0) {
        if (y > x) {
            while (x <= y) {
                val += x
                x++;
            }
            return val;
        } else if (x > y) {
            while (y <= x) {
                val += y
                y++;
            }
            return val;
        } else {
            return "ERROR";
        }
    } else {
        return 'ERROR';
    }
   } else {
    return 'ERROR';
   }
};

// Do not edit below this line
module.exports = sumAll;
