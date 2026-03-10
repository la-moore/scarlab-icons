import React, { type ComponentType, type SVGProps } from 'react'
import { icons } from './imports'

type IconName = keyof typeof icons

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

type ScarlabIconProps = SVGProps<SVGSVGElement> & {
    name: IconName
}

const cache = new Map<IconName, IconComponent>()

export default function ScarlabIcon({ name, ...props }: ScarlabIconProps) {
    const [Component, setComponent] = React.useState<IconComponent | null>(() => cache.get(name) ?? null)

    React.useEffect(() => {
        let cancelled = false

        const cached = cache.get(name)
        if (cached) {
            setComponent(() => cached)
            return
        }

        setComponent(null)

        const loader = icons[name]
        if (!loader) {
            warn(name)
            return
        }

        loader()
            .then((mod) => {
                const comp = (mod as any).default ?? mod
                if (typeof comp !== 'function') {
                    throw new Error('Invalid icon module')
                }

                cache.set(name, comp)
                if (!cancelled) setComponent(() => comp)
            })
            .catch(() => {
                warn(name)
            })

        return () => {
            cancelled = true
        }
    }, [name])

    return Component ? React.createElement(Component, props) : React.createElement('svg', {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        ...props,
    })
}

function warn(name: string) {
    if (process.env.NODE_ENV !== 'production') {
        console.warn(`[ScarlabIcon] Иконка не найдена: "${name}"`)
    }
}
