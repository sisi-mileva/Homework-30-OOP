/**
 * 
 */
var work = new Task('Build bird house', 5);
var worker = new Employee('Angel');

worker.setCurrentTask(work);
worker.setHoursLeft(7);
worker.work();

worker.showReport();