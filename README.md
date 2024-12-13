# twilio-sms

## Introduction

This repository provides a simple example of how to send SMS messages using Twilio and Node.js.

## Setup

Follow the steps below to get the repository up and running:

### Step 1: Clone the repository

Open your terminal and run the following command to clone the repository:

```sh
git clone https://github.com/jdu211171/twilio-sms.git
```

### Step 2: Navigate to the project directory

Change into the project directory:

```sh
cd twilio-sms
```

### Step 3: Install dependencies

Install the required dependencies using npm:

```sh
npm install
```

### Step 4: Create and configure the `.env` file

Create a new `.env` file by copying the example file:

```sh
cp .env.example .env
```

Open the `.env` file and replace the placeholder values with your actual Twilio credentials:

```dotenv
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
RECIPIENT_PHONE_NUMBER=recipient_phone_number
```

### Step 5: Run the application

Run the application to send an SMS message:

```sh
npm run run
```
