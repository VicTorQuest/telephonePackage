class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = new Set();
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (!this.phoneNumbers.has(number)) {
            console.log(`Cannot dial ${number}. Number not found.`);
            return;
        }
        console.log(`Dialing ${number}...`);
        this.notifyObservers(number);
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.notify(number));
    }
}


class CallLogger {
    // First observer simple outputs the phone number
    notify(number) {
        console.log(number);
    }
}

class ContactNotifier {
    constructor(contactList = []) {
        this.contactList = new Set(contactList);
    }

    // secon
    notify(number) {
        if (this.contactList.has(number)) {
            console.log(`Now Dialling ${number}`);
        } else {
            console.log(`Number ${number} is not in contact list.`);
        }
    }
}

// initializing
const tel = new Telephone();

// Adding observers
const callLogger = new CallLogger();
const contactNotifier = new ContactNotifier(["+2347023232", "+1234567890"]);

tel.addObserver(callLogger);
tel.addObserver(contactNotifier);

// Add phone numbers
tel.addPhoneNumber("+2347023232");
tel.addPhoneNumber("+1234567890");

// Dial a number
tel.dialPhoneNumber("+2347023232");
// Dial a number not added
tel.dialPhoneNumber("+1111111111");
