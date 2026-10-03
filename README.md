# EduLedger 50/50 - Teacher & Assistant Finance Manager

EduLedger is a modern web application designed for teachers and their assistants to log lecture earnings, track shared out-of-pocket expenses, manage personal cash draws, and calculate exact 50/50 end-of-month financial settlements.

## Live Demo
🌐 **[https://edu-ledger-5050.netlify.app](https://edu-ledger-5050.netlify.app)**

## Features
- **50/50 Revenue Division**: Automatically splits lecture payments equally between Teacher and Assistant.
- **Shared Expense Reimbursements**: Out-of-pocket transportation, printing, and work costs are split 50/50 automatically.
- **Cash Advances / Personal Draws**: Keeps track of individual draws taken throughout the month and adjusts final payouts.
- **End-of-Month Settlement Report**: Clear statement showing exact payouts and who owes whom.
- **Local Storage & Export**: Data is saved locally in your browser and can be exported to CSV.

## Project Structure
- `index.html` - Application UI layout and modals
- `styles.css` - Design system, themes (Dark/Light), and glassmorphism styling
- `app.js` - Accounting engine, local storage, and DOM controller
- `test_accounting.js` - Accounting math logic unit test suite

## Quick Start
Open `index.html` in any web browser or serve locally:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080`.
