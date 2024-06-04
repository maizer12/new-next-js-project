'use server';
import User from '../../database/user.model';
import { connectToDB } from '../mongoose';

export const getOneUser = async (clerkId: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ clerkId });
    if (!user) throw new Error('User not found');
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};