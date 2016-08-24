/**
 * 
 */
var lastCall;

function GSM(model) {
	var __model = model;
	var __hasSimCard;
	var __simMobileNumber;
	var __outGoingCallsDuration = 0;
	var __lastIncomingCall;
	var __lastOutgoingCall;
	
	this.getModel = function() {
		return __model;
	}
	
	this.setModel = function(model) {
		__model = model;
	}
	
	this.getHasSimCard = function() {
		return __hasSimCard;
	}
	
	this.setHasSimCard = function(hasSimCard) {
		__hasSimCard = hasSimCard;
	}
	
	this.getSimMobileNumber = function() {
		return __simMobileNumber;
	}
	
	this.setSimMobileNumber = function(simMobileNumber) {
		__simMobileNumber = simMobileNumber;
	}
	
	this.getOutGoingCallsDuration = function() {
		return __outGoingCallsDuration;
	}
	
	this.setOutGoingCallsDuration = function(outGoingCallsDuration) {
		__outGoingCallsDuration = outGoingCallsDuration;
	}
	
	this.printInfoForTheLastIncomingCall = function() {
		return __lastIncomingCall;
	}
	
	this.setLastIncomingCall = function(lastIncomingCall) {
		__lastIncomingCall = lastIncomingCall;
	}
	
	this.printInfoForTheLastOutgoingCall = function() {
		return __lastOutgoingCall;
	}
	
	this.setLastOutgoingCall = function(lastOutgoingCall) {
		__lastOutgoingCall = lastOutgoingCall;
	}
}

GSM.prototype.insertSimCard = function(simMobileNumber) {
	if (simMobileNumber.indexOf('08') == 0 && simMobileNumber.length == 10 && !isNaN(parseInt(simMobileNumber))) {
		this.setHasSimCard(true);
		this.setSimMobileNumber(simMobileNumber);
	} else {
		console.log('The number you enter is not valid.');
	}
}

GSM.prototype.removeSimCard = function() {
	this.setHasSimCard(false);
	this.setSimMobileNumber('');
}

GSM.prototype.call = function(receiver, duration) {
	if (parseInt(duration) >= 0 && parseInt(duration) <= 120 
		&& receiver.getHasSimCard() == true && this.getHasSimCard() == true
		&& receiver.getSimMobileNumber() != this.getSimMobileNumber())
		
	if (parseInt(duration) <= 0 || parseInt(duration) >= 120 ) {
		console.log('Duration is not valid.');
	} else if (receiver.getHasSimCard() != true || this.getHasSimCard() != true) {
		console.log('There is no sim card in one or both GSMs.');
	} else if (receiver.getSimMobileNumber() == this.getSimMobileNumber()) {
		console.log('The receiver is the same as the caller');
	} else {
		lastCall = new Call(this.getSimMobileNumber(), receiver.getSimMobileNumber(), duration);
		this.setLastOutgoingCall(receiver.getSimMobileNumber());
		receiver.setLastIncomingCall(this.getSimMobileNumber());
		this.setOutGoingCallsDuration(parseInt(duration) + parseInt(this.getOutGoingCallsDuration()));
	}
}

GSM.prototype.getSumForCall = function() {
	var sum = parseInt(lastCall.getPriceForAMinute()) * parseInt(this.getOutGoingCallsDuration());
	return sum;
}