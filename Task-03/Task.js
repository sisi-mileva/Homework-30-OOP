/**
 * 
 */
function Task(name, workingHours) {
	var __name = name;
	var __workingHours = workingHours;
	
	this.getName = function() {
		return __name;
	}
	
	this.setName = function(newName) {
		__name = newName;
	}
	
	this.getWorkingHours = function() {
		return __workingHours;
	}
	
	this.setWorkingHours = function(newWorkingHours) {
		__workingHours = newWorkingHours;
	}
}