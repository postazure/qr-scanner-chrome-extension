# QR Chrome Extension (working title)
This extension will allow a user to fill in inputs with the value of a QR code that their camera has scanned, so that a user can easily input information such as passwords without typing them or adding them to the computer's clipboard.

## Workflow
Given a User has the extension installed in their browser
When a page loads with a text input form
Then a QR scan button will appear next to the input

Given a User is on a page with a form and a QR scan button is present
When a user presses the button
Then the camera will attempt to scan a qr code and insert the value into the input
