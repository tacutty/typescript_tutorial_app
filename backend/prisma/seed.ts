import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ユーザーと投稿のデータ
  const users = [
    {
      email: "tatsu@example.com",
      name: "Tatsu",
      posts: [
        { title: "Tatsu's First Post", content: "Hello, this is my first post!" },
        { title: "Tatsu's Second Post", content: "Another day, another post." },
      ],
    },
    {
      email: "john@example.com",
      name: "John",
      posts: [
        { title: "John's First Post", content: "Greetings from John!" },
      ],
    },
    {
      email: "meg@example.com",
      name: "Meg",
      posts: [
        { title: "Meg's First Post", content: "Hello, everyone!" },
        { title: "Meg's Second Post", content: "Today is a great day!" },
        { title: "Meg's Third Post", content: "Keep learning!" },
      ],
    },
  ];

  for (const userData of users) {
    const { email, name, posts } = userData;

    // ユーザーを作成または更新
    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: { email, name },
    });

    console.log(`Created user: ${user.name}`);

    // 投稿データを作成
    for (const post of posts) {
      await prisma.post.create({
        data: {
          title: post.title,
          content: post.content,
          author: { connect: { id: user.id } }, // リレーションを設定
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });