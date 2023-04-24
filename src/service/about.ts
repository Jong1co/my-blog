import path from 'path';
import { promises as fs } from 'fs';

export const getResume = async (): Promise<string> => {
  const filepath = path.join(process.cwd(), 'src', 'data', 'about', `experience.md`);
  const data = await fs.readFile(filepath, 'utf-8');

  return data;
};
