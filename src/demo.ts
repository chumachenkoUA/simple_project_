import {
  add,
  capitalize,
  formatNumber,
  groupBy,
  type User,
  Logger,
  type LogLevel,
} from './index.js';
import { config } from './config.js';

// ПОМИЛКА ТИПІВ: тепер add очікує масив чисел

console.log('sum(2.0 ok):', add([2, 3, 4]));

console.log('capitalize(typed):', capitalize('hello'));
console.log('format(ok):', formatNumber(123.456, { precision: 2 }));

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

console.log('group ok:', groupBy(users, 'name'));

const logger = new Logger(config.LOG_LEVEL as LogLevel);

logger.info('Application started');
logger.debug('Extra debug info');
