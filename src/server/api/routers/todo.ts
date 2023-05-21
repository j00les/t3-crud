import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const toDoRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany()
  }),
});
