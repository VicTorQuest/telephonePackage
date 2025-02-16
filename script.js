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

class Observer {
    notify(number) {
        throw new Error("Observer notify method must be implemented.");
    }
}

class PrintObserver extends Observer {
    notify(number) {
        console.log(number);
    }
}

class MessageObserver extends Observer {
    constructor(contactList = []) {
        super();
        this.contactList = new Set(contactList);
    }

    notify(number) {
        if (this.contactList.has(number)) {
            console.log(`Now Dialling ${number}`);
        } else {
            console.log(`Number ${number} is not in contact list.`);
        }
    }
}

// Example Usage
const tel = new Telephone();

// Add observers
const printObserver = new PrintObserver();
const messageObserver = new MessageObserver(["2347023232", "1234567890"]);

tel.addObserver(printObserver);
tel.addObserver(messageObserver);

// Add phone numbers
tel.addPhoneNumber("2347023232");
tel.addPhoneNumber("1234567890");

// Dial a number
tel.dialPhoneNumber("2347023232");
// Dial a number not added
tel.dialPhoneNumber("1111111111");
