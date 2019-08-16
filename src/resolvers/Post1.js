const Post = {
  author: {
      resolve(parent, args, { prisma }, info) {
          return parent.author
      }
  }
}

export { Post as default }