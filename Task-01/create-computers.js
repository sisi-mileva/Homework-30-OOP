/**
 * 
 */

var computer1 = new Computer(2015, 750, false, 500, 340, 'Windows');
var computer2 = new Computer(2016, 1050, true, 1000, 870, 'Windows');
	
computer1.useMemory(100);
computer2.changeOperationSystem('Linux');
	
console.log('Computer1' + '\n' + computer1.getInfo());
console.log('Computer2' + '\n' + computer2.getInfo());