'use client'

import { Plus } from 'lucide-react'
import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion'

const faqData = [
  {
    question:
      'How does Scatterplot help wealth managers communicate with clients?',
    answer:
      'Scatterplot provides daily-updated, branded visuals on markets and macro trends. These resources simplify complex investment concepts for clients while giving advisors timely data to respond with confidence and clarity.',
  },
  {
    question: 'Why is Scatterplot different?',
    answer:
      'Unlike static PDFs and charts from research firms, Scatterplot is built on a dynamic, interactive platform. Each visual is crafted with the end client in mind, using proven design principles that make complex data easy to explain and understand.',
  },
  {
    question: 'What do I need to do after signing up?',
    answer:
      'After signing up, you can (optionally) share three preferences: your preferred color, your firm’s logo, and your disclosure text. All charts will then update automatically with your branding.',
  },
  {
    question: 'How can I save my own set of charts?',
    answer: 'Each user can create up to five investment decks.',
  },
  {
    question: 'How frequently are the charts updated?',
    answer: 'All charts are updated daily at 4:00 AM ET.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'The subscription is $25 per week, with a 7-day free trial. You can cancel anytime.',
  },
  {
    question: 'What if I cannot find a particular chart I need?',
    answer: (
      <>
        If you don&apos;t see the chart you&apos;re looking for, contact us at{' '}
        <a href='mailto:support@scatterplot.co' className='underline'>
          support@scatterplot.co
        </a>
        . If feasible, we&apos;ll create it for you.
      </>
    ),
  },
  {
    question: 'Is Scatterplot independent?',
    answer:
      'Yes. Scatterplot is fully independent. We do not manage client assets and are not affiliated with any wealth advisory firm.',
  },
  {
    question: 'Are you working on something new?',
    answer:
      'Yes. We continuously expand our chart library and research coverage.',
  },
  {
    question: 'How does Scatterplot use AI?',
    answer:
      'AI was extensively used in building Scatterplot—from designing the charting engine to streamlining data processing and automating daily updates. This allows us to deliver accurate, timely, and visually effective content at scale.',
  },
]

export default function FAQ() {
  return (
    <div className='lg:px-30 w-full bg-white px-15 py-50 md:flex md:items-start md:justify-between md:gap-16 xl:pb-60 xl:pt-40 2xl:px-60'>
      <div className='mb-12 flex justify-center md:mb-0 md:w-auto'>
        <h2 className='text-5xl font-normal leading-tight tracking-normal text-palette-290 lg:text-6xl'>
          <span className='block'>Frequently</span>
          <span className='block'>asked</span>
          <span className='block'>questions</span>
        </h2>
      </div>

      <div className='w-full max-w-full space-y-4 overflow-hidden md:w-full md:max-w-2xl'>
        <AccordionPrimitive.Root
          type='single'
          collapsible
          className='w-full space-y-4'
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='group w-full rounded border-none'
            >
              <AccordionTrigger className='w-full rounded bg-palette-280 px-6 py-5 hover:no-underline group-data-[state=open]:pb-6 [&>svg]:hidden'>
                <span className='min-w-0 flex-1 break-words text-left text-lg font-semibold leading-7 text-black'>
                  {faq.question}
                </span>
                <div className='ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-white p-1'>
                  <Plus className='h-4 w-4 text-black transition-transform duration-200 group-data-[state=open]:rotate-45' />
                </div>
              </AccordionTrigger>
              <AccordionContent className='w-full px-6 pt-2'>
                <div className='overflow-wrap-anywhere w-full break-words text-lg leading-6 text-palette-380 text-opacity-65'>
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </div>
  )
}
