// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const filePath = path.join(process.cwd(), 'data/articles/articles.json')
  const response = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  console.log('response', response)
  res.status(200).json(response)
}
