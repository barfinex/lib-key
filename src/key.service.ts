import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { randomBytes } from 'crypto';

@Injectable()
export class KeyService {
  private readonly logger = new Logger(KeyService.name);
  private _key: string | null = null;

  get key(): string {
    if (!this._key) {
      throw new Error('The key has not been initialized.');
    }
    return this._key;
  }

  initializeKey(): void {
    try {
      const keyFileName = 'app-identification-key.txt';

      const identity = process.env.APP_IDENTITY || 'default';

      const keyDir = path.resolve(process.cwd(), '.keys', identity);
      const filePath = path.join(keyDir, keyFileName);

      fs.mkdirSync(keyDir, { recursive: true });

      if (fs.existsSync(filePath)) {
        const existingKey = fs.readFileSync(filePath, 'utf-8');
        this.logger.log(
          `Identification key loaded from file for "${identity}": ${existingKey}`,
        );
        this._key = existingKey;
      } else {
        const newKey = randomBytes(32).toString('hex');
        fs.writeFileSync(filePath, newKey, 'utf-8');
        this.logger.log(
          `New identification key created and saved for "${identity}": ${newKey}`,
        );
        this._key = newKey;
      }
    } catch (error) {
      this.logger.error('Error while handling the identification key:', error);
      this._key = null;
      throw error;
    }
  }
}
