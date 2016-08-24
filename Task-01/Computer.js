/**
 * 
 */
function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
	var __year = year;
	var __price = price;
	var __isNotebook = isNotebook;
	var __hardDiskMemory = hardDiskMemory;
	var __freeMemory = freeMemory;
	var __operationSystem = operationSystem;
	
	this.getYear = function() {
		return __year;
	}
	
	this.getPrice = function() {
		return __price;
	}
	
	this.getIsNotebook = function() {
		return __isNotebook;
	}
	
	this.getHardDiskMemory = function() {
		return __hardDiskMemory;
	}
	
	this.getFreeMemory = function() {
		return __freeMemory;
	}
	
	this.setFreeMemory = function(memory) {
		__freeMemory = memory;
	}
	
	this.getOperationSystem = function() {
		return __operationSystem;
	}
	
	this.changeOperationSystem = function(newOperationSystem) {
		__operationSystem = newOperationSystem;
	}

}

Computer.prototype.useMemory = function(memory) {
	if ( memory > this.getFreeMemory()) {
		console.log('Not enough free memory!');
	} else {
		var newMemory = this.getFreeMemory() - memory;
		this.setFreeMemory(newMemory); 
	}
}

Computer.prototype.getInfo = function() {
	return 'year: ' + this.getYear() + ' ' + '\n' + 'price: ' + this.getPrice() + ' ' + '\n'
	+ 'isNotebook: ' + this.getIsNotebook() + ' ' + '\n' + 'hardDiskMemory: ' + this.getHardDiskMemory() + ' ' + '\n'
	+ 'freeMemory: ' + this.getFreeMemory() + ' ' + '\n' + 'operationSystem: ' + this.getOperationSystem(); 
}