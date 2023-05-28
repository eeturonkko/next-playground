import express, { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET /api/data
// Get all user data
// @Private route
async function getData(req: Request, res: Response) {
  if (!req.body.userId) {
    res.status(400).send("UNAUTHORIZED");
  }
  try {
    const userData = await prisma.userData.findUnique({
      where: {
        userId: req.body.userId,
      },
    });
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
}

//  POST /api/create
//  Create a new user data
//  @Private route
async function createData(req: Request, res: Response) {
  const { username, hobby, userId } = req.body;
  if (!username || !hobby || !userId) {
    res.status(400).send("Missing username or hobby or userId");
  } else {
    try {
      const newUserData = await prisma.userData.create({
        data: {
          username,
          hobby,
          userId,
        },
      });
      res.json(newUserData);
    } catch (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    }
  }
}

export { getData, createData };
