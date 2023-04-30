import { prisma } from "@/server/db";
import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req

    switch (method) {
        case 'GET':
            const data = await prisma.message.findMany()
            res.status(200).json(data)
            break
        case 'POST':
            const {content, title} = req.body
            const message = await prisma.message.create({
                data: {
                    content,
                    title,
                }
            })
            res.status(200).json(message)
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}