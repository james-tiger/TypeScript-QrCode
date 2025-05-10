import QRCode from 'qrcode';
import { Command } from 'commander';

const program = new Command();

program
  .name('qr-code-generator')
  .description('CLI tool to generate QR codes')
  .version('1.0.0');

program
  .command('generate')
  .description('Generate a QR code from text or URL')
  .argument('<text>', 'text or URL to encode')
  .option('--size <number>', 'size of QR code matrix', '0')
  .action(async (text: string, options: { size: string }) => {
    try {
      if (!text) {
        console.error('Ошибка: Укажите текст или ссылку.');
        process.exit(1);
      }

      const size = parseInt(options.size) || 0;
      const qrOptions: QRCode.QRCodeToStringOptions = {
        type: 'terminal',
        small: true,
        ...(size > 0 && { version: size, margin: 1 })
      };

      const qrString = await QRCode.toString(text, qrOptions);
      console.log(qrString);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Ошибка при генерации QR-кода:', error.message);
      } else {
        console.error('Произошла неизвестная ошибка');
      }
      process.exit(1);
    }
  });

program.parse();