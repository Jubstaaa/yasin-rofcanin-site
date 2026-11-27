import { describe, expect, it } from 'vitest'

import * as content from './content'

function linksIn(value: unknown, path = ''): [string, string][] {
    if (Array.isArray(value)) {
        return value.flatMap((item, index) =>
            linksIn(item, `${path}[${index}]`)
        )
    }
    if (value && typeof value === 'object') {
        return Object.entries(value).flatMap(([key, child]) =>
            key === 'link' || key === 'url'
                ? typeof child === 'string'
                    ? [[`${path}.${key}`, child] as [string, string]]
                    : []
                : linksIn(child, `${path}.${key}`)
        )
    }
    return []
}

describe('content links', () => {
    const links = linksIn(content)

    it('finds the links to check', () => {
        expect(links.length).toBeGreaterThan(20)
    })

    it.each(links)('%s is an http(s) URL', (_path, link) => {
        expect(['http:', 'https:']).toContain(new URL(link).protocol)
    })
})
