import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    VERCEL_URL: z.string().min(1).catch(''),
    NODE_ENV: z.enum(['development', 'production'] as const),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production'] as const),
    NEXT_PUBLIC_VERCEL_URL: z.string().min(1).catch(''),
    NEXT_PUBLIC_PORT: z.coerce.number().int().catch(3000),
    NEXT_PUBLIC_LOCAL_ENV: z.enum(['development', 'production'] as const),
  },
  runtimeEnv: {
    NODE_ENV: process.env['NODE_ENV'],
    VERCEL_URL: process.env['VERCEL_URL'],
    NEXT_PUBLIC_VERCEL_URL: process.env['NEXT_PUBLIC_VERCEL_URL'],
    NEXT_PUBLIC_PORT: process.env['NEXT_PUBLIC_PORT'],
    NEXT_PUBLIC_NODE_ENV: process.env['NODE_ENV'],
    NEXT_PUBLIC_LOCAL_ENV: process.env['NEXT_PUBLIC_LOCAL_ENV'],
  },
})
