import { v4 as uuidv4 } from 'uuid';

export function getID(): string {
    return uuidv4();
}