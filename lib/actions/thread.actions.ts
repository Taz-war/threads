import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params{
    text : string,
    author : string,
    communityId : string | null,
    path : string,
}
export async function creatThread({text,author,communityId,path}:Params) {
    connectToDB();

    const createdThread = await Thread.create({
        text,
        author,
        community: null,
    })

    ///Update user model
    await User.findByIdAndUpdate
}