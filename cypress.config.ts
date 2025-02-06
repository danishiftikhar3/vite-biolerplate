import { defineConfig } from 'cypress'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {},
        viewportWidth: 1280,
        viewportHeight: 720,
        baseUrl: 'http://localhost:5173',
    },
    env: {
        MAILOSAUR_API_KEY: process.env.CYPRESS_MAILOSAUR_API_KEY,
        SERVER_ID: process.env.CYPRESS_SERVER_ID,
    },
})
