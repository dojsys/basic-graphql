const Mutation = {
    async createDraft(parent, args, { prisma }, info) {
        return prisma.mutation.createPost({
            title: args.title,
            author: {
                connect: { id: args.userId },
            },
        }, info)
    },
    async publish(parent, args, { prisma }, info) {
        return prisma.mutation.updatePost({
            where: { id: args.postId },
            data: { published: true },
        }, info)
    },
    async createUser(parent, args, { prisma }, info) {
        return prisma.mutation.createUser({ name: args.name }, info)
    },
}
export { Mutation as default }
