import { NextApiRequest, NextApiResponse } from "next"

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
    const { query: {id, name}, method} = req

    switch (method) {
        case 'GET':
            // get data from db
            res.status(200).json({id, name: `User: ${name}`})
            break
        case 'PUT':
            res.status(200).json({ id, name: name || `User ${id}` })
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
        
    }
}

export default userHandler