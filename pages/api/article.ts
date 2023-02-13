// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const slug = req.query.slug
  const filePath = path.join(process.cwd(), `public/data/articles/${slug}.json`)
  const response = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  console.log('response', response)
  res.status(200).json(response)
}
