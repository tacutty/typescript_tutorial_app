import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "tatsu@example.com" },
    update: {},
    create: {
      email: "tatsu@example.com",
      name: "Tatsu",
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
