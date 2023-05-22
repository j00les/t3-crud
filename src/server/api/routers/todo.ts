import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const toDoRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany()
  }),

  addTodo: publicProcedure
    .input(z.object({ name: z.string(), isDone: z.boolean() }))
    .mutation(async ({ input, ctx }) => {
      const todo = await ctx.prisma.todo.create({
        data: {
          ...input
        }
      })

      return todo
    }),
});

