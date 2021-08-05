module.exports = function check(str, arr) {
  
  let len_a = arr.length;
	let len_s = str.length;
	
	str = arr.map(a => str = str.replace(`${a[0]}${a[1]}`, ''))[len_a-1];
  return (str.length === 0) ? true : (str.length === len_s) ? false : check(str, arr); 
	}
