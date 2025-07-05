# TypeScript QR Code Generator

A command-line utility written in TypeScript that generates QR codes from text or URLs and displays them as ASCII art in the terminal.

## 🚀 Features

- **QR Code Generation**: Generate QR codes from any text or URL
- **ASCII Art Display**: Display QR codes as ASCII art directly in the terminal
- **Customizable Size**: Adjust QR code size to fit your needs
- **Error Handling**: Robust error handling for invalid inputs
- **TypeScript Support**: Full TypeScript implementation with type safety
- **Command Line Interface**: Easy-to-use CLI with intuitive commands
- **Development Mode**: Hot reload support for development

## 🛠️ Technologies Used

- **TypeScript**: Main programming language
- **Node.js**: Runtime environment
- **npm**: Package management
- **QR Code Library**: For QR code generation
- **ASCII Art**: Terminal-based QR code display

## 📋 Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/james-tiger/TypeScript-QrCode.git
   cd TypeScript-QrCode
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

## 🎯 Usage

### Basic QR Code Generation

Generate a QR code from text:
```bash
npm start -- generate 'Hello, World!'
```

Generate a QR code from a URL:
```bash
npm start -- generate 'https://example.com'
```

### Custom Size QR Codes

Generate a QR code with custom size:
```bash
npm start -- generate 'I love TypeScript!' --size 8
```

### Development Mode

For development with hot reload:
```bash
npm run dev -- generate 'Hello, World!'
```

## 📁 Project Structure

```
TypeScript-QrCode/
├── src/
│   ├── index.ts
│   ├── qrcode-generator.ts
│   └── cli.ts
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## ⚙️ Configuration

### TypeScript Configuration

The project uses `tsconfig.json` for TypeScript compilation settings:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Package Scripts

Available npm scripts:

```json
{
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts",
  "clean": "rm -rf dist/"
}
```

## 🔧 Command Line Options

| Option | Description | Example |
|--------|-------------|---------|
| `generate <text>` | Generate QR code from text/URL | `generate 'Hello'` |
| `--size <number>` | Set QR code size (default: 6) | `--size 10` |
| `--help` | Show help information | `--help` |
| `--version` | Show version information | `--version` |

## 📖 Examples

### Generate QR Code for Website
```bash
npm start -- generate 'https://github.com/james-tiger/TypeScript-QrCode'
```

### Generate QR Code with Large Size
```bash
npm start -- generate 'This is a long message that needs a larger QR code' --size 12
```

### Generate QR Code for Contact Information
```bash
npm start -- generate 'BEGIN:VCARD\nFN:John Doe\nORG:Company\nTEL:123-456-7890\nEMAIL:john@example.com\nEND:VCARD'
```

## 🐛 Error Handling

The application handles various error scenarios:

- **Invalid Input**: Handles empty or invalid text input
- **Size Validation**: Validates QR code size parameters
- **Generation Errors**: Handles QR code generation failures
- **Command Line Errors**: Provides helpful error messages for CLI usage

## 🧪 Testing

Run tests (if available):
```bash
npm test
```

## 🔄 Development

### Setting up for Development

1. Clone the repository
2. Install dependencies
3. Start development mode:
   ```bash
   npm run dev -- generate 'Test message'
   ```

### Building for Production

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

## 📦 Dependencies

### Runtime Dependencies
- `qrcode`: QR code generation library
- `commander`: Command line interface framework
- `chalk`: Terminal styling library

### Development Dependencies
- `typescript`: TypeScript compiler
- `ts-node`: TypeScript execution environment
- `@types/node`: Node.js type definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**James Tiger** - [GitHub Profile](https://github.com/james-tiger)

## 🙏 Acknowledgments

- QR Code specification creators
- TypeScript community
- Node.js ecosystem contributors
- ASCII art inspiration

## 📞 Support

If you encounter any issues or have questions:

- Create an issue in the [GitHub repository](https://github.com/james-tiger/TypeScript-QrCode/issues)
- Contact the author through GitHub

## 🚧 Roadmap

- [ ] Add support for different QR code formats
- [ ] Implement QR code scanning functionality
- [ ] Add color customization options
- [ ] Create GUI version
- [ ] Add batch processing capabilities
- [ ] Implement QR code validation
- [ ] Add export to file functionality

## 🔄 Version History

- **v1.0.0** - Initial release with basic QR code generation
- **v1.1.0** - Added customizable size options
- **v1.2.0** - Improved error handling and CLI interface

## 💡 Tips

- Use single quotes around text with spaces
- For URLs, ensure they include the protocol (http:// or https://)
- Larger sizes work better for complex text or URLs
- Test QR codes with a mobile scanner to ensure readability

---

⭐ If you found this project helpful, please give it a star on GitHub!

🔗 **Try it out**: Clone the repo and generate your first QR code in seconds!
