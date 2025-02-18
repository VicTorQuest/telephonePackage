# Telephone System with Observer Pattern

## Overview
This project implements a simple telephone system using the **Observer Pattern**. It allows adding, removing, and dialing phone numbers while notifying observers when a number is dialed.

## Features
- Add and remove phone numbers.
- Dial only stored phone numbers.
- Attach and detach observers to monitor dial events.
- Observers include:
  - **CallLogger**: Logs the dialed phone number.
  - **ContactNotifier**: Checks if a dialed number is in the contact list and logs an appropriate message.

## Installation & Usage
1. Clone the repository or download `script.js`.
2. Ensure you have Node.js installed.
3. Run the script in a Node.js environment:
   ```sh
   node script.js
   ```

## Code Structure
### `Telephone` Class
Handles:
- Adding and removing phone numbers.
- Dialing numbers with validation.
- Managing observers and notifying them when a number is dialed.

### `CallLogger` Class
- Logs the dialed phone number.

### `ContactNotifier` Class
- Checks if the number is in the contact list before allowing dialing.

## Example Usage
```javascript
const tel = new Telephone();

// Adding observers
const callLogger = new CallLogger();
const contactNotifier = new ContactNotifier(["+2347023232", "+1234567890"]);

tel.addObserver(callLogger);
tel.addObserver(contactNotifier);

// Adding phone numbers
tel.addPhoneNumber("+2347023232");
tel.addPhoneNumber("+1234567890");

// Dialing numbers
tel.dialPhoneNumber("+2347023232"); // Logs number and "Now Dialling"
tel.dialPhoneNumber("+1111111111"); // Number not found
```