import path from 'path';
import { promises as fs } from 'fs';

export const getContent = async (pathname: string): Promise<string> => {
  const filepath = path.join(process.cwd(), 'src', 'data', 'posts', `${pathname}.md`);
  const data = await fs.readFile(filepath, 'utf-8');

  return data;
};
