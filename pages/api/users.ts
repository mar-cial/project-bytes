import { NextApiRequest, NextApiResponse } from "next"
import users from "../../data/users"

const handler = (res: NextApiResponse, req: NextApiRequest) => {
    res.status(200).json(users)
}

export default handler