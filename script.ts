import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
  await prisma.user.deleteMany()
}

main()
  .catch(error => {
      console.error(error.message)
  })
  .finally(async () => {
      await prisma.$disconnect()
  })