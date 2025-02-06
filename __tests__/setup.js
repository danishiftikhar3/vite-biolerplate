import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { beforeAll, afterAll } from 'vitest'
import { server } from '../src/mocks/node'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup()
})

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
