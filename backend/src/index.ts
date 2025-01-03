import express from "express";
import cors from "cors";
import userRoutes from "./infrastructure/routes/userRoutes";
import postRoutes from "./infrastructure/routes/postRoutes";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Running the app on port: ${port}`);
});


// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import { PrismaClient, Prisma } from '@prisma/client';

// const app = express();
// const port = 8080;

// // JSON ミドルウェアを設定
// app.use(express.json());
// app.use(cors());

// const prisma = new PrismaClient();

// app.get('/users', async (req: Request, res: Response): Promise<any> => {
//   const users = await prisma.user.findMany({
//       include: {
//         Posts: true,
//       },
//     });
//   return res.json(users);
// });

// app.get('/users/:id', async (req: Request, res: Response): Promise<any> => {
//   const id = Number(req.params.id); // パラメータを数値に変換
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         id,
//       },
//       include: {
//         Posts: true,
//       }
//     });

//     if (!user) {
//       // ユーザーが見つからない場合は 404 エラーを返す
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // ユーザーが見つかった場合はレスポンスを返す
//     return res.json(user);
//   } catch (e) {
//     console.error(e);
//     return res.status(500).json({ error: 'An unexpected error occurred' });
//   }
// });

// app.post('/users', async (req: Request, res: Response): Promise<any> => {
//   const { name, email } = req.body;
//   console.log(name, email);
//   try {
//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//       },
//     });
//     return res.json(user);
//   } catch (e) {
//     if (e instanceof Prisma.PrismaClientKnownRequestError) {
//       if (e.code === 'P2002') {
//         console.log(
//           'There is a unique constraint violation, a new user cannot be created with this email'
//         );
//       }
//     }
//     return res.status(400).json(e);
//   }
// });

// app.put('/users/:id', async (req: Request, res: Response): Promise<any> => {
//   const id = Number(req.params.id);
//   const { name } = req.body;
//   try {
//     const user = await prisma.user.update({
//       where: {
//         id,
//       },
//       data: {
//         name,
//       },
//     });
//     return res.json(user);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

// app.delete('/users/:id', async (req: Request, res: Response): Promise<any> => {
//   const id = Number(req.params.id);

//   try {
//     const user = await prisma.user.delete({
//       where: {
//         id,
//       },
//     });
//     return res.json(user);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

// app.post('/posts', async (req: Request, res: Response): Promise<any> => {
//   const { title, content, authorId } = req.body;
//   try {
//     const post = await prisma.post.create({
//       data: {
//         title,
//         content,
//         authorId,
//       },
//     });
//     return res.json(post);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

// app.get('/post/:id', async (req: Request, res: Response): Promise<any> => {
//   const id = Number(req.params.id);
//   try {
//     const post = await prisma.post.findUnique({
//       where: {
//         id,
//       },
//     });
//     return res.json(post);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

// app.listen(port, () => {
//   console.log(`Running the app on port: ${port}`);
// });
