/**
 * 
 */

var tel1 = new GSM('Samsung');
var tel2 = new GSM('Lenovo');

tel1.insertSimCard('0811111111');
tel2.insertSimCard('0822222222');
tel1.call(tel2, 20);

console.log('tel1: ' + '\n' + 'Phone model: ' + tel1.getModel() + '\n'
			+ 'Has sim card?: ' + tel1.getHasSimCard() + '\n'
			+ 'Sim mobile number: ' + tel1.getSimMobileNumber() + '\n'
			+ 'Last outgoing call is with: ' + tel1.printInfoForTheLastOutgoingCall() + '\n'
			+ 'Last incoming call is with: ' + tel1.printInfoForTheLastIncomingCall() + '\n'
			+ 'Out going calls duration is: ' + tel1.getOutGoingCallsDuration() + '\n'
			+ 'Price for all outgoing calls is: ' + tel1.getSumForCall());

console.log('tel2: ' + '\n' + 'Phone model: ' + tel2.getModel() + '\n'
		+ 'Has sim card?: ' + tel2.getHasSimCard() + '\n'
		+ 'Sim mobile number: ' + tel2.getSimMobileNumber() + '\n'
		+ 'Last outgoing call is with: ' + tel2.printInfoForTheLastOutgoingCall() + '\n'
		+ 'Last incoming call is with: ' + tel2.printInfoForTheLastIncomingCall() + '\n'
		+ 'Out going calls duration is: ' + tel2.getOutGoingCallsDuration() + '\n'
		+ 'Price for all outgoing calls is: ' + tel2.getSumForCall());