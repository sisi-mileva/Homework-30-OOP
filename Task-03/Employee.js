/**
 * 
 */
function Employee(name) {
	var __name = name;
	var __currentTask;
	var __hoursLeft;
	
	this.getName = function() {
		return __name;
	}
	
	this.setName = function(newName) {
		if (newName != '') {
			__name = newName;
		}
		
	}
	
	this.getCurrentTask = function() {
		return __currentTask;
	}
	
	this.setCurrentTask = function(currentTask) {
		__currentTask = currentTask;
	}
	
	this.getHoursLeft = function() {
		return __hoursLeft;
	}
	
	this.setHoursLeft = function(hoursLeft) {
		if (parseInt(hoursLeft) >= 0) {
			__hoursLeft = hoursLeft;
		}
	}
}

Employee.prototype.work = function() {
	var task = this.getCurrentTask();
	if (this.getHoursLeft() > task.getWorkingHours()) {
		this.setHoursLeft(this.getHoursLeft() - task.getWorkingHours());
		task.setWorkingHours(0);
	} else {
		task.setWorkingHours(task.getWorkingHours() - this.getHoursLeft());
		this.setHoursLeft(0);
	}
}

Employee.prototype.showReport = function() {
	var employee = this.getName();
	var task = this.getCurrentTask().getName();
	var hoursLeft = this.getHoursLeft();
	var workingHours = this.getCurrentTask().getWorkingHours();
	
	console.log('Employee name: ' + employee + '\n'
				+ 'Task name: ' + task + '\n'
				+ 'Employee - left hours: ' + hoursLeft + '\n'
				+ 'Task - left hours: ' + workingHours);
}