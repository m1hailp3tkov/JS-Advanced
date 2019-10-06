function add(a) {
    var sum = a
   
    function add_and_repeat(b)
    {
        sum += b
        return add_and_repeat
    }
   
    add_and_repeat.toString = function() { return sum }
   
    return add_and_repeat
  }
  
console.log(add(3)(3).toString());