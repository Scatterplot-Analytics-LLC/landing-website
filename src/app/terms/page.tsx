'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet'
import cn from '@/src/lib/utils'

import { Section, sections } from './sections'

const navGroups = sections.reduce<Record<string, Section[]>>((acc, section) => {
  const group = acc[section.navGroup] || []
  group.push(section)
  acc[section.navGroup] = group
  return acc
}, {})

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id ?? '',
  )

  useEffect(() => {
    const visibilityMap = new Map<string, number>()
    const indexMap = new Map<string, number>()

    sections.forEach((section, index) => {
      visibilityMap.set(section.id, 0)
      indexMap.set(section.id, index)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!visibilityMap.has(entry.target.id)) {
            return
          }

          const ratio = entry.isIntersecting ? entry.intersectionRatio : 0
          visibilityMap.set(entry.target.id, ratio)
        })

        const mostVisible = Array.from(visibilityMap.entries()).reduce<
          [string, number] | null
        >((best, current) => {
          if (!best) {
            return current
          }

          if (current[1] > best[1]) {
            return current
          }

          if (current[1] === best[1]) {
            const currentIndex =
              indexMap.get(current[0]) ?? Number.POSITIVE_INFINITY
            const bestIndex = indexMap.get(best[0]) ?? Number.POSITIVE_INFINITY

            return currentIndex < bestIndex ? current : best
          }

          return best
        }, null)

        const nextActive =
          mostVisible && mostVisible[1] > 0 ? mostVisible[0] : null

        if (nextActive) {
          setActiveSection((prev) => (prev === nextActive ? prev : nextActive))
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: Array.from({ length: 11 }, (_, index) => index / 10),
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const navItems = Object.entries(navGroups)

  return (
    <main className='scroll-smooth bg-palette-350'>
      <section className='mx-auto w-full max-w-6xl px-6 py-16 md:px-10 lg:px-16 xl:max-w-7xl xl:px-20'>
        <header className='flex flex-col gap-6 border-b border-palette-270 pb-10 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-3xl space-y-4'>
            <div>
              <h1 className='leading-120 text-4xl font-semibold text-palette-120 md:text-5xl lg:text-6xl'>
                Terms and Conditions
              </h1>
              <p className='mt-4 text-base leading-7 text-palette-250 md:text-lg'>
                Last updated: November 7, 2025 · Effective: November 14, 2025
              </p>
            </div>
          </div>

          <Sheet>
            <SheetTrigger className='inline-flex items-center gap-2 rounded-full border border-palette-270 px-4 py-2 text-sm font-medium text-palette-120 transition hover:border-palette-250 hover:text-palette-120 lg:hidden'>
              <Menu className='h-4 w-4' aria-hidden />
              Browse sections
            </SheetTrigger>
            <SheetContent
              side='left'
              className='w-full max-w-xs px-6 py-8'
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              <SheetHeader className='mb-6 text-left'>
                <SheetTitle className='text-xl font-semibold text-palette-120'>
                  Terms sections
                </SheetTitle>
              </SheetHeader>
              <nav className='space-y-8'>
                {navItems.map(([group, groupSections]) => (
                  <div key={group} className='space-y-3'>
                    <p className='tracking-200 text-xs font-semibold uppercase text-palette-140'>
                      {group}
                    </p>
                    <ul className='space-y-2'>
                      {groupSections.map((section) => (
                        <li key={section.id}>
                          <SheetClose asChild>
                            <a
                              href={`#${section.id}`}
                              className='block rounded-md px-3 py-2 text-sm font-medium text-palette-250 transition hover:bg-palette-280 hover:text-palette-120'
                            >
                              {section.navLabel}
                            </a>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <div className='mt-12 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16'>
          <aside className='scrollbar-thin lg:max-h-screen-144 hidden w-64 shrink-0 lg:sticky lg:top-36 lg:block lg:overflow-y-auto lg:pr-2'>
            <nav aria-label='Terms navigation' className='space-y-10'>
              {navItems.map(([group, groupSections]) => (
                <div key={group} className='space-y-4'>
                  <p className='tracking-200 text-xs font-semibold uppercase text-palette-140'>
                    {group}
                  </p>
                  <ul className='space-y-2'>
                    {groupSections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          aria-current={
                            activeSection === section.id ? 'true' : undefined
                          }
                          className={cn(
                            'block rounded-md px-3 py-2 text-sm font-medium transition',
                            activeSection === section.id
                              ? 'bg-palette-50 text-palette-20'
                              : 'text-palette-250 hover:bg-palette-280 hover:text-palette-120',
                          )}
                        >
                          {section.navLabel}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          <div className='flex-1 space-y-16'>
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className='scroll-mt-32 space-y-6'
              >
                <header className='space-y-2'>
                  <h2 className='text-3xl font-semibold leading-9 text-palette-120 md:text-4xl'>
                    {section.heading}
                  </h2>
                  {section.summary ? (
                    <p className='text-base leading-7 text-palette-250 md:text-lg'>
                      {section.summary}
                    </p>
                  ) : null}
                </header>
                <div className='space-y-5 text-base leading-7 text-palette-260 md:text-lg'>
                  {section.content.map((block, blockIndex) => {
                    if (block.type === 'list') {
                      return (
                        <ul
                          key={`${section.id}-list-${blockIndex}`}
                          className='ml-5 list-disc space-y-2 text-base leading-7 text-palette-260 md:text-lg'
                        >
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )
                    }

                    const renderTextWithBold = (text: string) => {
                      const parts = text.split(/(\*\*.*?\*\*)/g)
                      return parts.map((part, index) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          const boldText = part.slice(2, -2)
                          return (
                            <strong key={index} className='font-semibold'>
                              {boldText}
                            </strong>
                          )
                        }
                        return <span key={index}>{part}</span>
                      })
                    }

                    return (
                      <p
                        key={`${section.id}-paragraph-${blockIndex}`}
                        className='whitespace-pre-line'
                      >
                        {renderTextWithBold(block.text)}
                      </p>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermsPage
