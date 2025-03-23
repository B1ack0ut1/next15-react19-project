import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest , res: NextApiResponse) => {
    return handleAuth()(req, res);
}