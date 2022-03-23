var isValid = function(s) {
    if (s.length % 2 == 1) return false;
    
    let stack = [];
    let map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])

    for (let i of s) {
        if (map.has(i)) {
            if (map.get(i) != stack[stack.length - 1] || stack.length == 0) {
                return false
            } else {
                stack.pop();
            }
        } else {
            stack.push(i)
        }
    }

   return !stack.length;
};