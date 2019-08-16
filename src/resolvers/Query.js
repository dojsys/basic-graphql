const Query = {
    publishedPosts(parent, args, { prisma }, info) {
        const opArgs = {
            where: {
                published: true
            }
        }

        if (args.query) {
            opArgs.where = [{
                title_contains: args.query
            }]
        }

        return prisma.query.posts(opArgs, info)
    },
    post(parent, args, { prisma }, info) {
        return prisma.query.post({ id: args.postId }, info)
    },
    postsByUser(parent, args, { prisma }, info) {
        return prisma.query
            .user({
                id: args.userId,
            }, info)
    }
}

export { Query as default }