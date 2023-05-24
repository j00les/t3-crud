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
      await ctx.prisma.todo.create({
        data: {
          ...input
        }
      })
    }),

  deleteTodo: publicProcedure
    .input(z.string())
    .mutation(async ({ input, ctx }) => {
      console.log(input, 'inpot')
      await ctx.prisma.todo.delete({
        where: { id: input }
      })
    }),

  editTodo: publicProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.todo.update({
        where: { id: input.id },
        data: {
          name: input.name
        }
      })
    }),

});

