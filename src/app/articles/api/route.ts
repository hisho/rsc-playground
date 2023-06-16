import { NextResponse } from 'next/server'

export async function GET(): Promise<
  NextResponse<{ message: 'hellow world' }>
> {
  return NextResponse.json({ message: 'hellow world' })
}
