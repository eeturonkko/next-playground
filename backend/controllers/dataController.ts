import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET /api/data/:userId
// Get all user data
// @Private route
async function getData(req: Request, res: Response) {
  try {
    const userId = req.params.userId;
    const userData = await prisma.userData.findMany({
      where: {
        userId,
      },
    });
    res.json(userData);
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

// DELETE /api/delete/:id
// Delete selected user data
// @Private route
async function deleteData(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const deletedData = await prisma.userData.delete({
      where: {
        id,
      },
    });
    res.json(deletedData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
}

export { getData, createData, deleteData };
