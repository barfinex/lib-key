"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var KeyService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const crypto_1 = require("crypto");
let KeyService = KeyService_1 = class KeyService {
    constructor() {
        this.logger = new common_1.Logger(KeyService_1.name);
        this._key = null;
    }
    get key() {
        if (!this._key) {
            throw new Error('The key has not been initialized.');
        }
        return this._key;
    }
    initializeKey() {
        try {
            const keyFileName = 'app-identification-key.txt';
            const identity = process.env.APP_IDENTITY || 'default';
            const keyDir = path.resolve(process.cwd(), '.keys', identity);
            const filePath = path.join(keyDir, keyFileName);
            fs.mkdirSync(keyDir, { recursive: true });
            if (fs.existsSync(filePath)) {
                const existingKey = fs.readFileSync(filePath, 'utf-8');
                this.logger.log(`Identification key loaded from file for "${identity}": ${existingKey}`);
                this._key = existingKey;
            }
            else {
                const newKey = (0, crypto_1.randomBytes)(32).toString('hex');
                fs.writeFileSync(filePath, newKey, 'utf-8');
                this.logger.log(`New identification key created and saved for "${identity}": ${newKey}`);
                this._key = newKey;
            }
        }
        catch (error) {
            this.logger.error('Error while handling the identification key:', error);
            this._key = null;
            throw error;
        }
    }
};
exports.KeyService = KeyService;
exports.KeyService = KeyService = KeyService_1 = __decorate([
    (0, common_1.Injectable)()
], KeyService);
//# sourceMappingURL=key.service.js.map