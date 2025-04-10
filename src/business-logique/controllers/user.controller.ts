import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../../utils/hashedPassword";
import { UserModel } from "../models/user.model";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for existing user
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password using your utility
    const hashed = await hashPassword(password);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashed,
      },
    });

    // Map to your UserModel class
    const userModel = new UserModel(
      newUser.id,
      newUser.username,
      newUser.password,
      newUser.role,
      newUser.createdAt
    );

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: userModel.id,
        username: userModel.username,
        createdAt: userModel.createdAt,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};
