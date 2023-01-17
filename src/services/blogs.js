import { checkError, client } from './client.js';

// export async function fetchBlogs() {
//   const resp = await client.from('blogs').select('*');
//   return checkError(resp);
// }

export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*, authors(name)');
  //   console.log('resp', resp);
  return checkError(resp);
}
