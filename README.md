# QR Code Generator

A command-line utility written in TypeScript that generates QR codes from text or URLs and displays them as ASCII art in the terminal.

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

Generate a QR code from text or URL:
```bash
npm start -- generate "https://example.com"
```

Generate a QR code with custom size:
```bash
npm start -- generate "I love TypeScript!" --size 8
```

For development (using ts-node):
```bash
npm run dev -- generate "Hello, World!"
```

## Features

- Generate QR codes from text or URLs
- Customize QR code size
- Display QR codes as ASCII art in the terminal
- Error handling for invalid inputs
- TypeScript support

## Requirements

- Node.js
- npm 
