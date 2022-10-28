// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

async function  delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export async function someFunc(
) {
  await delay(5000)
  return { name: "John Doe" }
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: "John Doe" });
// }
