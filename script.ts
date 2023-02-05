import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {

    // Create a new user
    const user = await prisma.user.create({
        data: {
            age: 30,
            name: "Bobby",
            email: "bobby@test.com",
        }
      }
    )


// Find user
  // @ts-ignore
    //const user = await prisma.user.findMany({
     //  where: {
      //    name: {not: "Sally"},
      //  },
      //  orderBy: {
       //    age: "asc",
      //  }
   // })


    // Update user
    //const user = await prisma.user.update({
      //  where: {
         //   email: "sally@test.com"
       // },
      //  data: {
      ////      email: "sally5@test.com"
        //},
    //})


    //Delete user
   // const user = await prisma.user.delete({
        //where: {
            //email: "test2@gmail"
        //}
    //})

    console.log(user)
}

main()
  .catch(error => {
      console.error(error.message)
  })
  .finally(async () => {
      await prisma.$disconnect()
  })