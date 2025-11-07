export type SectionContentBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'list'
      items: string[]
    }

export type Section = {
  id: string
  navLabel: string
  navGroup: string
  heading: string
  summary?: string
  content: SectionContentBlock[]
}

export const sections: Section[] = [
  {
    id: 'terms-of-use',
    navLabel: 'Terms of Use',
    navGroup: 'Overview',
    heading: 'Terms of Use',
    content: [
      {
        type: 'paragraph',
        text: `Scatterplot Analytics LLC (“Scatterplot,” “us,” “our” or “we”) provides independent research
and other investment related information (the “Service”) through our website (the “Site”).`,
      },
    ],
  },
  {
    id: 'acceptance-of-terms',
    navLabel: 'Acceptance of Terms',
    navGroup: 'Overview',
    heading: 'Acceptance of Terms',
    content: [
      {
        type: 'paragraph',
        text: `The Service is offered subject to acceptance of all of the terms contained in these Terms of Use,
including the Privacy Policy and all other agreements, operating rules, policies, and procedures
that may be published on the Site by Scatterplot, each of which is incorporated by reference and
each of which may be updated by us from time to time without notice to you or liability for such
change. Users are advised to periodically review the Site for any changes and contact Scatterplot
with any questions, if there is a conflict between two versions of the Terms of Use to which you
have agreed or been deemed to agree, the more recent version shall take precedence unless it is
expressly stated otherwise. In addition, other services offered through the Site may be subject to
additional terms and conditions adopted by Scatterplot and/or contained in any agreement
entered between you and Scatterplot. Your use of those services is subject to those additional
Terms of Use and/or separate agreements, which are incorporated into these Terms of Use by this
reference. We refer to all of these other agreements as the "Platform Agreements," because rather
than just governing your technical use of the Site, they set out the substantive terms that govern
your relationship with us when you make use of our Site.`,
      },
      {
        type: 'paragraph',
        text: `These Terms of Use and Privacy Policy will continue to apply to you even after you have agreed
to a Platform Agreement. However, if it turns out that there is a conflict between the Terms of
Use and Privacy Policy and a Platform Agreement to which you have agreed, the Platform
Agreement will take precedence.`,
      },
    ],
  },
  {
    id: 'change-or-termination',
    navLabel: 'Change or Termination',
    navGroup: 'Overview',
    heading: 'Change or Termination',
    content: [
      {
        type: 'paragraph',
        text: `We reserve the right, at our sole discretion and without prior notice, to modify or replace these
Terms of Use, or change the Site, stop providing the Site, applications or services, or create
usage limits for the Site, or change, improve or correct the information, materials and
descriptions on the Site at any time for any reason. We may permanently or temporarily
terminate or suspend your access to the Site without notice or liability, for any reason or for no
reason, including if in our sole determination you violate any provision of these Terms of Use.
You are solely responsible for checking the Terms of Use periodically for changes. Your
continued use of the Service following the posting of any changes to the Terms of Use
constitutes acceptance of those changes. Upon termination of these Terms of Use or your access
to the Site for any reason or no reason, you will continue to be bound by these Terms of Use
which, by their nature, should survive termination, including without limitation ownership
provisions, warranty disclaimers, indemnity, and limitations of liability. The information and
materials on the Site may contain typographical errors or inaccuracies. Any dated information is
published as of its date only, and Scatterplot does not undertake any obligation or responsibility
to update or amend any such information. You agree that Scatterplot and any of its subsidiaries
and affiliates will not be liable to you or to any third party for any such modification, suspension
or discontinuance.`,
      },
    ],
  },
  {
    id: 'no-investment-advice',
    navLabel: 'No Investment Advice',
    navGroup: 'Overview',
    heading: 'No Investment Advice and Other Disclaimers',
    content: [
      {
        type: 'paragraph',
        text: `Scatterplot is not a registered investment advisor and does not provide investment advice through
the Site or by providing the Services to you. Scatterplot is not soliciting any action based upon
this report. Recipients of the information provided herein should consult with a financial advisor
before purchasing or selling a security. The information in this report is not intended to be used
as the primary basis of investment decisions, and because of individual client objectives, should
not be construed as advice designed to meet the particular investment needs of any investor. The
comments may not be relied upon as recommendations, investment advice or an indication of
trading intent.`,
      },
      {
        type: 'paragraph',
        text: `This research is for Scatterplot clients only. This research is based on current public information
that we consider reliable, but we do not represent it is accurate or complete, and it should not be
relied on as such. The information, opinions, estimates, and forecasts contained herein are as of
the date hereof and are subject to change without prior notification, and there is no guarantee that
any future event discussed herein will come to pass. Scatterplot disclaims responsibility for
updating information. In addition, Scatterplot disclaims responsibility for third-party content,
including information accessed through hyperlinks.`,
      },
      {
        type: 'paragraph',
        text: `Past performance does not guarantee or indicate future results. Index performance is for
illustrative purposes only and does not reflect any management fees, transaction costs or
expenses. Indexes are unmanaged and one cannot invest directly in an index. Index performance
does not represent the actual performance that would be achieved by investing in a fund.`,
      },
      {
        type: 'paragraph',
        text: `No mention of a particular security, index, or other instrument in this report constitutes a
recommendation to buy, sell, or hold that or any other security, nor does it constitute an opinion
on the suitability of any security or index. The report is strictly an informational publication and
has been prepared without regard to the particular investments and circumstances of the
recipient. SUBSCRIBERS SHOULD VERIFY ALL CLAIMS AND COMPLETE THEIR OWN
RESEARCH BEFORE INVESTING IN ANY INVESTMENTS MENTIONED IN THE
PUBLICATION. INVESTING INVOLVES RISK, INCLUDING THE POSSIBLE LOSS OF
PRINCIPAL AND FLUCTUATION OF VALUE.`,
      },
    ],
  },
  {
    id: 'no-representations',
    navLabel: 'No Representations',
    navGroup: 'Overview',
    heading: 'No Representations or Warranties',
    content: [
      {
        type: 'paragraph',
        text: `To the extent permissible under law, Scatterplot assumes no liability or responsibility for any
errors or omissions in the content of the Site. Scatterplot does not endorse or represent the
completeness, reliability or accuracy of any content or information distributed through or
accessed from the Site, and has not performed any investigation into such information.
Scatterplot shall not be liable for any investment decisions made based upon such information.
You agree that any reliance upon any content or information distributed through or accessed from
the Site is at your sole risk. Scatterplot is entitled to rely upon the information provided by its
Users.`,
      },
    ],
  },
  {
    id: 'authorized-access-only',
    navLabel: 'Authorized Access Only',
    navGroup: 'Overview',
    heading: 'Authorized Access Only',
    content: [
      {
        type: 'paragraph',
        text: `You may not attempt to gain unauthorized access to any portion or feature of the Site, or any
other systems or networks connected to the Site or to Scatterplot’s server, or to any of the
services offered on or through the Site, by hacking, password “mining” or any other illegitimate
means.`,
      },
      {
        type: 'paragraph',
        text: `You may not probe, scan or test the vulnerability of the Site or any network connected to the
Site, nor breach the security or authentication measures on the Site or any network connected to
the Site. You may not reverse look-up, trace or seek to trace any information on any other user of
or visitor to the Site, or any other customer of Scatterplot, including any Scatterplot account not
owned by you, to its source, or exploit the Site or any service or information made available or
offered by or through the Site, in any way where the purpose is to reveal any information,
including but not limited to personal identification or information, other than your own
information, as provided for by the Site.`,
      },
      {
        type: 'paragraph',
        text: `You agree that you will not take any action that imposes an unreasonable or disproportionately
large load on the infrastructure of the Site or Scatterplot’s systems or networks, or any systems or
networks connected to the Site or to Scatterplot.`,
      },
      {
        type: 'paragraph',
        text: `You agree not to use any device, software or routine to interfere or attempt to interfere with the
proper working of the Site or any transaction being conducted on the Site, or with any other
person’s use of the Site.`,
      },
    ],
  },
  {
    id: 'dmca',
    navLabel: 'DMCA Notice',
    navGroup: 'Overview',
    heading: 'Digital Millennium Copyright Notice',
    content: [
      {
        type: 'paragraph',
        text: `We respect the intellectual property of others, and we ask you to do the same. If you or any user
of our Site believes its copyright rights have been infringed on our Site, the copyright's owner
("Complaining Party") should send notification to Our Designated Agent (as identified below)
immediately. To be effective, the notification must include:`,
      },
      {
        type: 'list',
        items: [
          'A physical or electronic signature of the Complaining Party or such person authorized to act on behalf of the Complaining Party:',
          'Identification of the copyrights claimed to have been infringed;',
          'Information reasonably sufficient to permit us to contact the Complaining Party or such person authorized to act on behalf of the Complaining Party, such as address, telephone number and, if available, an electronic mail address at which the Complaining Party may be contacted;',
          'Identification of the material that is claimed to be infringing the Complaining Part/s copyrights(s) that is to be removed and information reasonably sufficient to permit us to locate such materials;',
          'A statement that the Complaining Party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, agent, or by law; and',
          'A statement that the information in the notification is accurate and, under penalty of perjury, the Complaining Party or such person authorized to act on behalf of the Complaining Party is the owner of an exclusive copyright that is allegedly infringed.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Designated Agent for Claimed\nInfringement\n[Insert address and email address]',
      },
      {
        type: 'paragraph',
        text: `You acknowledge, accept and agree that if we receive a notice of a claim of copyright
infringement, we may immediately remove the identified materials from our Site without
liability to you or any other party and that the claims of the Complaining Party will be referred to
the United States Copyright Office for adjudication as provided in the DMCA.`,
      },
      {
        type: 'paragraph',
        text: `Please note that this procedure is exclusively for notifying Scatterplot and its affiliates that your
copyrighted material has been infringed. The preceding requirements are intended to comply
with our rights and obligations under the DMCA, including 17 U.S.C. §512(c), but do not
constitute legal advice. It may be advisable to contact an attorney regarding your rights and
obligations under the DMCA and other applicable laws. Allegations that other intellectual
property right is being infringed should be sent to [insert email address].`,
      },
    ],
  },
  {
    id: 'intellectual-property',
    navLabel: 'Intellectual Property',
    navGroup: 'Overview',
    heading: 'Intellectual Property',
    content: [
      {
        type: 'paragraph',
        text: `All content and images on the Site are either the property of, or used with permission by
Scatterplot. The use of the content or images by you, or anyone authorized by you, is prohibited
unless specifically permitted by these Terms of Use or provided elsewhere on the Site.`,
      },
      {
        type: 'paragraph',
        text: `The works of authorship herein, including but not limited to all data, design, text, images, and
charts or other data compilations or collective works are owned, except as otherwise expressly
stated, by Scatterplot or one of our data providers and may not be copied, reproduced,
transmitted, displayed, performed, distributed, rented, sublicensed, altered, stored for subsequent
use or otherwise used in whole or in part in any manner without the prior written consent of
Scatterplot. The Site and the Service are also protected as collective works or compilations under
U.S. copyright and other laws and treaties. All individual articles, columns, and other elements
making up the Site or the Service are also copyrighted works. You agree to abide by all
additional copyright notices or restrictions contained in the Site or the Service.`,
      },
      {
        type: 'paragraph',
        text: `The trademarks, logo and slogans displayed on the Site (the “Trademarks”) are owned by
Scatterplot and others. Nothing on this Site should be construed as granting any license or right
to use the Trademarks without written permission of Scatterplot or such third-party owner of the
Trademarks. Your misuse of the Trademarks, or any other content on the Site, except as provided
in these Terms of Use. is strictly prohibited. You are advised that Scatterplot will aggressively
enforce its intellectual property rights to the fullest extent of the law.`,
      },
    ],
  },
  {
    id: 'communications',
    navLabel: 'Communications',
    navGroup: 'Overview',
    heading: 'Communications',
    content: [
      {
        type: 'paragraph',
        text: `You agree that Scatterplot may send communications to you via your mailing address, email,
telephone or facsimile number provided by you. You agree to notify us of any changes in your
address or contact details. Scatterplot may also deliver information verbally. Communications
shall be deemed delivered to you when sent and not when received.`,
      },
    ],
  },
  {
    id: 'disclaimer-of-liability',
    navLabel: 'Disclaimer of Liability',
    navGroup: 'Overview',
    heading: 'Disclaimer of Liability',
    content: [
      {
        type: 'paragraph',
        text: `Your use of the Site is solely at your own risk. To the fullest extent permissible by law. in no
event shall Scatterplot, its affiliates, nor each of its affiliates' directors, employees, managers,
agents, contractors, partners, suppliers, or content providers, be liable for damages under
contract, tort, stria liability, negligence, or any other legal or equitable theory arising out of your
access to, or use of, the Site. Without limiting the foregoing, everything on the Site is provided to
you "as is," "as available." and "when available" without warranty of any kind, either expressed
or implied, including but not limited to, the implied warranties of merchantability, fitness for a
particular purpose, or noninfringement. Please note that some jurisdictions may not allow the
exclusion of implied warranties or limitation of incidental or consequential damages, so some of
the above exclusions may not apply to you. Check your local laws for any restrictions or
limitations regarding the exclusion of implied warranties.`,
      },
      {
        type: 'paragraph',
        text: `Scatterplot assumes no responsibility for, and shall not be liable for, any damages to or viruses
that may infect, your computer equipment or other property on account of your access to, use of,
or browsing in the Site or your downloading of any materials, data, text, images, video, or audio
from the Site.`,
      },
    ],
  },
  {
    id: 'third-party-sites',
    navLabel: 'Third-Party Sites',
    navGroup: 'Overview',
    heading: 'Third-Party Sites',
    content: [
      {
        type: 'paragraph',
        text: `The Site may contain links to third-party websites ("Third-Party Sites"). These links are provided
only as a convenience to you. The inclusion of any link is not and does not imply an affiliation,
sponsorship, endorsement, approval, investigation, verification or monitoring by Scatterplot of
any information, materials, products, or services contained in or accessible through any Third-
Party Site. In no event shall Scatterplot be responsible for the information contained on any
Third-Party Sites or your use of or inability to use any Third-Party Sites. You acknowledge and
agree that Scatterplot shall not be liable or responsible, directly or indirectly, for any damage or
loss caused or alleged to be caused by or related to the use of or reliance on any content, goods,
or services available through any third-party website or resource. YOU AGREE THAT ACCESS
AND USE OF THIRD- PARTY SITES, INCLUDING THE INFORMATION, MATERIAL,
PRODUCTS, AND SERVICES ON THIRD-PARTY SITES OR AVAILABLE THROUGH
THIRD-PARTY SITES. IS SOLELY AT YOUR OWN RISK AND DISCRETION.`,
      },
    ],
  },
  {
    id: 'us-jurisdiction',
    navLabel: 'U.S. Jurisdiction',
    navGroup: 'Overview',
    heading: 'U.S. Jurisdiction',
    content: [
      {
        type: 'paragraph',
        text: `If you are located outside of the United States, you use or access the Site solely at your own risk
and initiative. The Service is controlled and operated from facilities within the United States.
Scatterplot makes no representations that the Service is appropriate or available for use in any
other jurisdictions. Accessing the Service is prohibited from territories where the content on the
Site is prohibited.`,
      },
    ],
  },
  {
    id: 'governing-law',
    navLabel: 'Governing Law',
    navGroup: 'Overview',
    heading: 'Governing Law',
    content: [
      {
        type: 'paragraph',
        text: `These Terms of Use shall be governed by, construed and entered in accordance with the laws of
the State of New York applicable to contracts deemed to be made within such State, without
regard to choice of law or conflict of law provisions thereof. In the event any person or entity
makes a claim or files a complaint initiating an action based on a dispute arising out of use of
this Site or information posted to this Site, it shall be subject to the exclusive jurisdiction and
venue of the New York state courts located in New York County and/or the United States District
Court for the Southern District of New York, and each of the parties hereby agrees to the
personal and exclusive jurisdiction and venue of such courts. YOU HEREBY WAIVE YOUR
RIGHT TO A TRIAL BY JURY WITH RESPECT TO ANY CLAIM, ACTION OR
PROCEEDING. DIRECTLY OR INDIRECTLY. ARISING OUT OF, OR RELATING TO,
THESE TERMS OF USE TO THE FULLEST EXTENT PERMITTED BY LAW. YOU
UNDERSTAND THAT ABSENT THIS PROVISION. YOU WOULD HAVE THE RIGHT TO
SUE IN COURT AND HAVE A JURY TRIAL.`,
      },
    ],
  },
  {
    id: 'indemnification',
    navLabel: 'Indemnification',
    navGroup: 'Overview',
    heading: 'Indemnification',
    content: [
      {
        type: 'paragraph',
        text: `You agree to indemnify, defend and hold Scatterplot and any of its affiliates, and any of its
successors and assigns, and any of their respective officers, directors, employees, agents,
representatives, licensors, advertisers, suppliers, and operational service providers harmless from
and against any and all claims, actions, losses, expenses, damages and costs (including
reasonable attorneys' fees and expenses), resulting from any breach or violation of these Terms
of Use by you or arising from your use of the Site.`,
      },
      {
        type: 'paragraph',
        text: `Scatterplot reserves the right to assume, at its sole expense, the exclusive defense and control of
any such claim or action and all negotiations for settlement or compromise, and you agree to
fully cooperate with Scatterplot in the defense of any such claim, action, settlement or
compromise negotiations, as requested by Scatterplot.`,
      },
    ],
  },
  {
    id: 'notification-procedures',
    navLabel: 'Notification Procedures',
    navGroup: 'Overview',
    heading: 'Notification Procedures',
    content: [
      {
        type: 'paragraph',
        text: `We may provide notifications, including those regarding modifications to these Terms of Use,
whether such notifications are required by law or are for marketing or other business-related
purposes, to you via email notice, written or hard copy notice, or through posting of such notice
on our Site, as determined by us in our sole discretion. We reserve the right to determine the
form and means of providing notifications to visitors. Note that you may opt out of certain means
of notification as described in these Terms of Use. We are not responsible for any automatic
filtering you or your network provider may apply to email notifications we send to the email
address you provided to us.`,
      },
    ],
  },
  {
    id: 'renewals',
    navLabel: 'Renewals',
    navGroup: 'Overview',
    heading: 'Renewals',
    content: [
      {
        type: 'paragraph',
        text: `Your subscription will automatically renew for the same period you originally selected unless
canceled. Subscription fees will be charged automatically at the start of each renewal period
using the payment method stored in your account through our third-party payment processor.`,
      },
      {
        type: 'paragraph',
        text: `You may manage or cancel your subscription at any time through your account settings on the
Scatterplot website. If you cancel before the end of the current billing cycle, you will retain
access until the subscription period expires.`,
      },
      {
        type: 'paragraph',
        text: `**Cancellations will not result in a pro-rated refund for any unused portion of the billing cycle.**`,
      },
      {
        type: 'paragraph',
        text: `All subscription fees are billed in advance and are non-refundable except as required by
applicable law. By subscribing, you authorize Scatterplot (through our third-party payment
processor) to charge the payment method you provide for all applicable fees.`,
      },
      {
        type: 'paragraph',
        text: `If a payment is declined or cannot be processed, we may suspend or terminate your access to the
Service until payment is successfully made. You are responsible for keeping your billing
information up to date.`,
      },
      {
        type: 'paragraph',
        text: `You are also responsible for any taxes, duties, or similar governmental assessments (including
value-added, sales, use, or withholding taxes) imposed on your subscription, except for taxes
based on Scatterplot’s income.`,
      },
    ],
  },
  {
    id: 'contact',
    navLabel: 'Contact',
    navGroup: 'Overview',
    heading: 'Contact',
    content: [
      {
        type: 'paragraph',
        text: `If you have any questions, comments or concerns, please contact us at: support@scatterplot.co`,
      },
    ],
  },
]
