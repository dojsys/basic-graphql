const User = {
    posts: {
        resolve(parent, args, { prisma }, info) {
            return prisma.query.posts({
              where: {
                user: {
                  id: parent.id
                }
              }
            })
          }
    }
}

export { User as default }