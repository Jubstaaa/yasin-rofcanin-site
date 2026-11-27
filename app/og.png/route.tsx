import { ImageResponse } from 'next/og'

import { OG_IMAGE } from '@/lib/og-image'

export const dynamic = 'force-static'

export function GET() {
    return new ImageResponse(
        <div
            style={{
                background: '#ffffff',
                borderLeft: '24px solid #167a46',
                color: '#212121',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
                padding: '80px',
                width: '100%',
            }}>
            <div style={{ fontSize: 88, fontWeight: 700 }}>Yasin Rofcanin</div>
            <div style={{ color: '#616161', fontSize: 40, marginTop: 24 }}>
                Professor in Organisational Psychology and Human Resource
                Management
            </div>
            <div style={{ color: '#167a46', fontSize: 32, marginTop: 40 }}>
                School of Management, University of Bath
            </div>
        </div>,
        { height: OG_IMAGE.height, width: OG_IMAGE.width }
    )
}
