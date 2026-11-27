import { icons as carbon } from '@iconify-json/carbon'
import { icons as mdi } from '@iconify-json/mdi'
import { getIconData, iconToHTML, iconToSVG } from '@iconify/utils'

const COLLECTIONS = { carbon, mdi }

export default function ContentIcon({
    className,
    name,
}: {
    className?: string
    name: string
}) {
    return (
        <span
            className="inline-flex"
            dangerouslySetInnerHTML={{ __html: iconSvg(name, className) }}
        />
    )
}

export function iconSvg(name: string, className?: string): string {
    const [prefix, icon] = name.split(':')
    const collection = COLLECTIONS[prefix as keyof typeof COLLECTIONS]
    const data = icon ? getIconData(collection, icon) : null

    if (!data) throw new Error(`Unknown icon "${name}" in lib/content.ts`)

    const { attributes, body } = iconToSVG(data, { height: '1em' })

    return iconToHTML(body, {
        ...attributes,
        'aria-hidden': 'true',
        ...(className ? { class: className } : {}),
    })
}
