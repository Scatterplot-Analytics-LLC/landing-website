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

type SectionContentBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'list'
      items: string[]
    }

type Section = {
  id: string
  navLabel: string
  navGroup: string
  heading: string
  summary?: string
  content: SectionContentBlock[]
}

const sections: Section[] = [
  {
    id: 'introduction',
    navLabel: 'Introduction',
    navGroup: 'Overview',
    heading: '1. Introduction',
    summary:
      'These Terms outline how Scatterplot provides its productivity platform and related websites.',
    content: [
      {
        type: 'paragraph',
        text: `Scatterplot, Inc. (“Scatterplot,” “we,” “our,” or “us”) offers a suite of productivity, collaboration, and presentation tools, together with supporting websites, documentation, and release notes (collectively, the “Service”). By creating an account, accessing the Service, or visiting our public websites, you agree to be bound by these Terms and acknowledge that you have reviewed our Privacy Statement.`,
      },
      {
        type: 'paragraph',
        text: `If you do not agree with these Terms, you must not access or use the Service. When we materially update these Terms, we will provide reasonable notice through email, in-product messaging, or prominent website notices. Unless a later effective date is specified, those changes apply as soon as they are posted. Continued use of the Service after updates become effective means you accept the revised Terms.`,
      },
    ],
  },
  {
    id: 'use-of-our-services',
    navLabel: 'Use of our services',
    navGroup: 'Legal',
    heading: '2. Use of Our Services',
    summary:
      'Guidelines for accessing Scatterplot and using your workspace responsibly.',
    content: [
      {
        type: 'paragraph',
        text: `You may use the Service only in compliance with these Terms, any applicable service-level agreements, and all laws that apply to you. We grant you a non-exclusive, limited, non-transferable license to access the Service for business purposes while these Terms remain in effect.`,
      },
      {
        type: 'list',
        items: [
          'Do not reverse engineer, attempt to gain unauthorized access, or disrupt the Service.',
          'Do not use the Service to store or transmit malicious code, infringing content, or personal data without proper rights.',
          'Do not misrepresent your identity or create accounts using automated means without our written consent.',
        ],
      },
      {
        type: 'paragraph',
        text: `You are responsible for the actions of anyone who uses the Service through your account, including Members you invite to collaborate. We may suspend or terminate access if we detect violations of these Terms or misuse that jeopardizes the Service.`,
      },
    ],
  },
  {
    id: 'subscriber-terms',
    navLabel: 'Subscriber terms',
    navGroup: 'Legal',
    heading: '3. Subscriber Terms',
    summary:
      'Additional obligations that apply to paying customers and workspace owners.',
    content: [
      {
        type: 'paragraph',
        text: `If you purchase a paid plan, the entity indicated in your Order Form is the “Subscriber” and is responsible for payment, user administration, and workspace governance. Subscriber designates the individuals who receive administrative permissions and may configure workspace settings, manage billing, and control data export.`,
      },
      {
        type: 'paragraph',
        text: `Subscription fees are billed in advance and are non-refundable except where required by law or expressly stated in your Order Form. Charges may change upon renewal, and we will notify you of any price updates at least thirty (30) days before they take effect.`,
      },
      {
        type: 'paragraph',
        text: `If you exceed plan limits, including seat counts or feature thresholds, we may invoice you for the additional usage or ask you to adjust your plan. Taxes, duties, and government assessments (excluding those based on our net income) are your responsibility.`,
      },
    ],
  },
  {
    id: 'public-entity',
    navLabel: 'Public entity',
    navGroup: 'Legal',
    heading: '4. Public Entity Terms',
    summary:
      'Modifications for government, public sector, or other regulated entities.',
    content: [
      {
        type: 'paragraph',
        text: `If you are a government agency or other public entity, the Service is provided as “Commercial Computer Software.” Your rights in the Service are limited to those expressly granted in these Terms and any required public-sector addendum mutually executed by the parties.`,
      },
      {
        type: 'paragraph',
        text: `We do not grant most-favored-nation clauses or agree to terms that conflict with applicable procurement rules. Any conflicting terms in your purchase order or procurement documentation are void unless we expressly accept them in writing.`,
      },
    ],
  },
  {
    id: 'account-management',
    navLabel: 'Account management',
    navGroup: 'Workspace',
    heading: '5. Account Management & Security',
    summary:
      'Expectations when managing user access and protecting credentials.',
    content: [
      {
        type: 'paragraph',
        text: `You must safeguard your account credentials and promptly notify us of any unauthorized access or suspected security incident. We recommend enabling multi-factor authentication and reviewing workspace membership on a regular cadence.`,
      },
      {
        type: 'list',
        items: [
          'Only invite users you trust and who are authorized to handle the data stored in the workspace.',
          'Revoke access when an individual no longer requires the Service or leaves your organization.',
          'Maintain accurate billing and contact information so we can reach you regarding account matters.',
        ],
      },
    ],
  },
  {
    id: 'data-protection',
    navLabel: 'Data protection',
    navGroup: 'Compliance',
    heading: '6. Data Protection & Privacy',
    summary: 'How we process Customer Data and support compliance obligations.',
    content: [
      {
        type: 'paragraph',
        text: `Our collection and use of personal data within the Service are described in our Privacy Statement and, where applicable, the Scatterplot Data Processing Addendum (“DPA”). We process Customer Data only to provide the Service, comply with law, and fulfill documented instructions from the Subscriber.`,
      },
      {
        type: 'paragraph',
        text: `You are responsible for obtaining all necessary rights and consents to upload Customer Data into the Service. When the DPA applies, both parties will comply with its requirements, including security safeguards, subprocessor disclosures, and data subject request support.`,
      },
      {
        type: 'paragraph',
        text: `We implement administrative, technical, and physical measures designed to protect Customer Data. If we become aware of a security incident that affects your Customer Data, we will notify the Subscriber without undue delay and share relevant remediation information.`,
      },
    ],
  },
  {
    id: 'termination',
    navLabel: 'Termination',
    navGroup: 'Compliance',
    heading: '7. Term, Termination & Suspension',
    summary: 'When these Terms end and what happens to your data.',
    content: [
      {
        type: 'paragraph',
        text: `These Terms remain in effect for the duration of your subscription or until your access to the Service ends. Either party may terminate for material breach if the breach is not cured within thirty (30) days after written notice. We may also suspend access immediately if continued use poses a security risk or violates law.`,
      },
      {
        type: 'paragraph',
        text: `Upon termination, Subscriber may export Customer Data using the self-service features of the Service for thirty (30) days, unless prohibited by law. After that period, we will delete or de-identify Customer Data, except where retention is necessary to comply with legal obligations or legitimate business requirements.`,
      },
      {
        type: 'paragraph',
        text: `Sections of these Terms that, by their nature, should survive termination (including confidentiality, intellectual property, indemnities, warranty disclaimers, and limitations of liability) will continue to apply.`,
      },
    ],
  },
  {
    id: 'contact',
    navLabel: 'Contact',
    navGroup: 'Support',
    heading: '8. Contact & Questions',
    summary: 'How to reach us regarding these Terms or legal matters.',
    content: [
      {
        type: 'paragraph',
        text: `If you have questions about these Terms or need to submit a legal request, please contact Scatterplot Legal at legal@scatterplot.com or write to Scatterplot, Inc., 2261 Market Street #5331, San Francisco, CA 94114, USA. We will review and respond to inquiries in accordance with applicable law.`,
      },
      {
        type: 'paragraph',
        text: `For data protection inquiries, including privacy requests, please follow the instructions provided in our Privacy Statement so we can authenticate the requester and respond efficiently.`,
      },
    ],
  },
]

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.2,
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

                    return (
                      <p key={`${section.id}-paragraph-${blockIndex}`}>
                        {block.text}
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
