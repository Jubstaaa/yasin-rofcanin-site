import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    resolve: {
        alias: { '@': fileURLToPath(new URL('./', import.meta.url)) },
    },
    test: {
        projects: [
            {
                extends: true,
                test: {
                    exclude: ['tests/build-output.test.ts', 'node_modules/**'],
                    include: ['**/*.test.ts'],
                    name: 'unit',
                },
            },
            {
                extends: true,
                test: {
                    include: ['tests/build-output.test.ts'],
                    name: 'build',
                },
            },
        ],
    },
})
