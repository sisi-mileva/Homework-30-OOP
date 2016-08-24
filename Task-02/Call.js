/**
 * 
 */
const PRICE = 1;

function Call(caller, receiver, duration) {
	var __caller = caller;
	var __receiver = receiver;
	var __duration = duration;
	var __priceForAMinute = PRICE;
	
	this.getCaller = function() {
		return __caller;
	}
	
	this.setCaller = function(newCaller) {
		__caller = newCaller;
	}
	
	this.getReceiver = function() {
		return __receiver;
	}
	
	this.setReceiver = function(newReceiver) {
		__receiver = newReceiver;
	}
	
	this.getDuration = function() {
		return __duration;
	}
	
	this.setDuration = function(newDuration) {
		if (newDuration >= 0 && newDuration <= 120) {
			__duration = newDuration;
		} else {
			console.log('Duration must be a number between 0 and 120');
		}
			
	}
	
	this.getPriceForAMinute = function() {
		return __priceForAMinute;
	}
}