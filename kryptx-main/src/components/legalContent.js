export const COMPANY = {
  name: 'KRYPTX SOLUTIONS PRIVATE LIMITED',
  short: 'KryptX Solutions',
  email: 'kryptxsolutions@gmail.com',
  phones: ['+91 89212 37435', '+91 96452 44272'],
  address: 'Divine Nagar, Muringoor, Chalakudy, Thrissur, Kerala – 680309, India',
  // Fill these in from the Certificate of Incorporation / FIU-IND registration.
  // They are shown in the footer and on the KYC & AML page only when not empty.
  cin: 'U74909KL2025PTC098115',
  fiuIndRegistration: '',
};

export const LAST_UPDATED = 'October 30, 2026';

// Each section: { h: heading, p: [ 'paragraph' | { list: [...] } ] }
export const LEGAL_DOCS = {
  'privacy-policy': {
    title: 'Privacy Policy',
    intro: `This Privacy Policy explains how ${COMPANY.name} ("KryptX", "we", "us") collects, uses, shares and protects your personal data when you use our website and services.`,
    sections: [
      { h: '1. Who We Are', p: [
        `${COMPANY.name} is a company incorporated in India. Our registered contact address is ${COMPANY.address}. For any privacy question you can write to ${COMPANY.email}.`,
      ]},
      { h: '2. Information We Collect', p: [
        'Information you give us:',
        { list: [
          'Contact details and messages: name, email address, phone number, subject and message when you use our contact form or reach out to us.',
          'Identity and compliance information: where the law or our compliance procedures require it, identity and address proofs and related verification details for buy/sell, escrow and similar services.',
          'Transaction information: wallet addresses, transaction references, amounts and payment details relevant to a service you request.',
          'Case information for VDA forensic services: wallet addresses, transaction hashes, communications with suspected counterparties, screenshots and other evidence you choose to share with us.',
        ]},
        'Information collected automatically: basic technical data such as browser type, device type, approximate location derived from IP address and pages viewed, which may be processed when you visit our site or by third-party content embedded in it.',
      ]},
      { h: '3. How We Use Your Information', p: [
        { list: [
          'To respond to your enquiries and provide the services you request.',
          'To verify identity and meet our legal, regulatory and anti-money-laundering obligations.',
          'To operate, secure and improve our website and services, and to detect and prevent fraud or misuse.',
          'To communicate with you about your requests, service updates and, where you agree, new services.',
          'To establish, exercise or defend legal claims.',
        ]},
      ]},
      { h: '4. Consent and Lawful Use', p: [
        'We process personal data on the basis of your consent and for other uses permitted by applicable Indian law, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 and the rules made under them. You may withdraw consent at any time by writing to us, though this may limit the services we can provide and does not affect processing already carried out.',
      ]},
      { h: '5. Sharing of Information', p: [
        'We do not sell your personal data. We may share it only with:',
        { list: [
          'Service providers who help us run our website, communications, payments and verification, under confidentiality obligations.',
          'Government, regulatory, law-enforcement or judicial authorities where we are required by law or legal process, or where needed to prevent fraud or financial crime.',
          'Professional advisers such as auditors and legal counsel.',
          'A successor entity in the event of a merger, acquisition or restructuring, subject to this policy.',
        ]},
      ]},
      { h: '6. Blockchain Data', p: [
        'Blockchain transactions, including those made through any smart contract we operate, are public and permanent. Wallet addresses and transaction records written to a public blockchain cannot be altered or erased by us. Please keep this in mind before transacting.',
      ]},
      { h: '7. Data Retention', p: [
        'We keep personal data only as long as needed for the purposes described above or as required by law, including record-keeping obligations under anti-money-laundering and tax laws. When data is no longer needed, we delete or anonymise it.',
      ]},
      { h: '8. Security', p: [
        'We use reasonable technical and organisational safeguards to protect personal data. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. Please protect your own devices, accounts and wallet keys.',
      ]},
      { h: '9. Your Rights', p: [
        'Subject to applicable law, you may ask us to give you a summary of the personal data we hold about you, correct or update it, erase it, or withdraw your consent. To make a request, email us at ' + COMPANY.email + '. We may need to verify your identity first and may retain data we are legally required to keep.',
      ]},
      { h: '10. Children', p: [
        'Our services are intended for adults aged 18 and over. We do not knowingly collect personal data from children. If you believe a child has provided us data, please contact us and we will delete it.',
      ]},
      { h: '11. Third-Party Services', p: [
        'Our website embeds or links to third-party services, such as Google Maps, market price data providers and social media pages. These have their own privacy practices, and we are not responsible for them.',
      ]},
      { h: '12. Changes to This Policy', p: [
        'We may update this policy from time to time. The "Last updated" date at the top shows when it last changed. Continued use of our website or services after an update means you accept the revised policy.',
      ]},
      { h: '13. Grievances and Contact', p: [
        `For questions, requests or complaints about your personal data, contact ${COMPANY.name} at ${COMPANY.email} or ${COMPANY.phones.join(' / ')}, or write to ${COMPANY.address}. We aim to acknowledge requests promptly and resolve them within a reasonable time.`,
      ]},
    ],
  },

  'kyc-aml': {
    title: 'KYC & AML Policy',
    intro: `${COMPANY.name} is committed to preventing money laundering, terrorist financing and other financial crime. This policy explains the checks we carry out on customers of our VDA services and how we meet our obligations under applicable Indian law, including FIU-IND requirements wherever applicable.`,
    sections: [
      { h: '1. Purpose and Scope', p: [
        'This policy applies to all customers, and to all VDA services we provide, including P2P VDA transaction facilitation, consulting, tax assistance, education, VDA forensic services and, once launched, our escrow settlement platform. In these documents, "VDA" means a virtual digital asset, meaning a token or other blockchain-based asset.',
      ]},
      { h: '2. Legal and Regulatory Framework', p: [
        'We operate in line with applicable Indian law on anti-money laundering and countering the financing of terrorism, including the Prevention of Money Laundering Act, 2002 and the rules and guidance issued under it, as they apply to VDA service providers, together with directions of the Financial Intelligence Unit - India (FIU-IND) wherever applicable. We also follow other laws that apply to our business, including tax laws and the Information Technology Act, 2000.',
      ]},
      { h: '3. Customer Identification (KYC)', p: [
        'Before we provide a service, and where required by law or our risk assessment, we verify who you are. This may include:',
        { list: [
          'Your full name, date of birth and contact details.',
          'Government-issued identity and address documents, and your Permanent Account Number (PAN) where applicable.',
          'A live photograph or video verification, to confirm that the documents belong to you.',
          'For businesses: registration documents, details of the people who own or control the business, and authorised signatories.',
        ]},
        'We will not provide services to anyone who refuses to complete verification or gives false or misleading information.',
      ]},
      { h: '4. Risk-Based Approach and Enhanced Checks', p: [
        'We assess customers and transactions by risk, considering factors such as the customer type, location, transaction size and pattern, and the services used. Higher-risk cases receive enhanced due diligence, which may include asking about your source of funds or source of wealth, requesting extra documents and approval from senior management before we proceed.',
      ]},
      { h: '5. Ongoing Monitoring', p: [
        'We monitor customer activity so that transactions are consistent with what we know about the customer. We may screen customers and wallet addresses against sanctions lists, law-enforcement alerts and blockchain-analytics risk data. We keep customer information up to date and may ask you to refresh your documents.',
      ]},
      { h: '6. Red Flags We Look For', p: [
        { list: [
          'Unusually large or frequent transactions that do not match the customer\'s profile.',
          'Attempts to avoid verification, or to split transactions to stay below limits.',
          'Funds from, or sent to, wallets linked to scams, ransomware, darknet markets, mixers or sanctioned parties.',
          'Payments from third parties, or from accounts not in the customer\'s own name.',
          'Reluctance to explain the purpose of a transaction or the source of funds.',
        ]},
      ]},
      { h: '7. Reporting', p: [
        'Where the law requires, we report prescribed transactions and any transaction we suspect to be linked to money laundering, terrorist financing or other crime to FIU-IND or other competent authorities. We are legally prohibited from telling a customer that a report has been made, and we may be unable to explain why we decline or pause a transaction.',
      ]},
      { h: '8. Right to Refuse, Pause or Cancel', p: [
        'We may decline, delay, reverse where possible, or cancel any transaction or service, and end a customer relationship, if we have concerns about compliance, the source of funds or the identity of a party. This includes holding funds in escrow while a compliance review is completed, to the extent the law and the platform design allow.',
      ]},
      { h: '9. Record Keeping', p: [
        'We keep identity records, transaction records and related correspondence for at least the period required by applicable law, which is currently five years after the end of the business relationship or the transaction as the case may be, and longer if a law, court or authority requires it.',
      ]},
      { h: '10. Governance and Training', p: [
        'Our management oversees this policy. Our compliance function, including officers designated under applicable law where required, reviews the policy regularly, and our team receives training so that staff can recognise and escalate suspicious activity.',
      ]},
      { h: '11. Your Responsibilities', p: [
        'You must give us accurate information, tell us promptly if your details change, use our services only with funds that come from lawful sources, and cooperate with our verification and review requests.',
      ]},
      { h: '12. Contact', p: [
        `Questions about this policy, or compliance concerns, can be sent to ${COMPANY.email}. You can also write to ${COMPANY.name}, ${COMPANY.address}.`,
      ]},
    ],
  },

  terms: {
    title: 'Terms of Service',
    intro: `These Terms of Service govern your use of the ${COMPANY.short} website and services provided by ${COMPANY.name}. By using our website or services you agree to these terms. If you do not agree, please do not use them.`,
    sections: [
      { h: '1. Our Services', p: [
        'We are a VDA service provider. Our VDA services include VDA buy and sell facilitation (P2P), consulting, tax assistance, education and forensic services. In these documents, "VDA" means a virtual digital asset, meaning a token or other blockchain-based asset. We are also developing an escrow settlement smart contract platform, which is in testing and not yet generally available. Service descriptions on our website are summaries and may change.',
      ]},
      { h: '2. Eligibility', p: [
        'You must be at least 18 years old and legally capable of entering a contract to use our services. You must not use our services if doing so is prohibited under the laws that apply to you.',
      ]},
      { h: '3. Verification and Compliance', p: [
        'To comply with Indian law we may ask you for identity and other verification information, ask about the source of funds, and refuse, delay or cancel a transaction or service where we have compliance concerns. We may report suspicious activity to the relevant authorities as required by law. As a VDA service provider, we follow applicable anti-money-laundering laws and FIU-IND requirements wherever applicable.',
      ]},
      { h: '4. VDA Buy & Sell (P2P)', p: [
        'We facilitate peer-to-peer transactions. Prices and rates shown on the website, including live market data, are indicative only and may differ from the rate at which a transaction is completed. VDAs are not legal tender, and a completed blockchain transaction generally cannot be reversed. You are responsible for checking wallet addresses and transaction details before confirming.',
      ]},
      { h: '5. Consulting, Tax and Education', p: [
        'Information, consulting, tax assistance and educational content are provided for general guidance. They are not investment, legal or tax advice that replaces a licensed professional, and we do not promise any particular financial result. You are responsible for your own investment and tax decisions and filings.',
      ]},
      { h: '6. Escrow Settlement Platform (Launching Soon)', p: [
        'The escrow settlement platform is currently in testing. Features, availability, fees and supported assets may change before and after launch, and access may be limited to invited or early-access users. When released, the following will apply in addition to any specific terms shown at that time:',
        { list: [
          'The platform uses smart contracts that hold VDAs and release them when conditions agreed by the parties are met.',
          'We are not a bank, and assets held in escrow are not deposits and are not insured by any deposit insurance scheme.',
          'We are not a party to the underlying deal between buyer and seller and do not guarantee the quality, legality or delivery of any goods or services.',
          'Smart contracts and blockchains carry technical risks, including software bugs, network congestion and security incidents. Transactions recorded on a blockchain may be irreversible.',
          'Disputes will be handled under the dispute process published on the platform. Decisions made under that process may determine where held assets are released.',
        ]},
      ]},
      { h: '7. VDA Forensic Services', p: [
        'VDA forensic services are offered on request and begin only after you contact us and we agree the scope of work with you in writing. In addition:',
        { list: [
          'We cannot guarantee that funds will be traced, frozen or recovered. Outcomes depend on the facts, the blockchains and third parties involved.',
          'Reports and findings are analytical work product and are not legal opinions. They may or may not be accepted by courts, exchanges or authorities.',
          'You must have a lawful right to the information and assets you ask us to investigate. We may decline or stop any engagement that appears unlawful or abusive.',
          'We treat case information as confidential, except where we are required by law to disclose it.',
          'If you are a victim of cyber fraud in India, you should also report it promptly to the National Cyber Crime Reporting Portal (cybercrime.gov.in) or by calling 1930, and to your bank or exchange. Our services do not replace an official complaint.',
        ]},
      ]},
      { h: '8. Risk Disclosure', p: [
        'VDAs are highly volatile and you may lose some or all of the value you put in. Regulation and taxation of VDAs in India may change. You should only transact with money you can afford to lose and should seek independent professional advice where appropriate.',
      ]},
      { h: '9. Acceptable Use', p: [
        'You agree not to use our website or services for any unlawful purpose, including money laundering, fraud, terrorist financing or sanctions evasion; to provide false information; to interfere with the security or operation of our website or any smart contract we operate; or to copy, scrape or reverse engineer our website except as the law allows.',
      ]},
      { h: '10. Fees', p: [
        'Fees for a service will be communicated to you before you confirm it. Network (gas) fees and charges of third parties are separate and not controlled by us. Fees are generally non-refundable once a service has been performed, unless we agree otherwise in writing or the law requires.',
      ]},
      { h: '11. Intellectual Property', p: [
        `The ${COMPANY.short} name, logo, website content and software are owned by or licensed to ${COMPANY.name}. You may not use them without our written permission, other than to view the website for your own personal use.`,
      ]},
      { h: '12. Disclaimer of Warranties', p: [
        'Our website and services are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we do not give any warranty that they will be uninterrupted, error-free or secure, or that market data on the site is complete or accurate.',
      ]},
      { h: '13. Limitation of Liability', p: [
        `To the fullest extent permitted by law, ${COMPANY.name} will not be liable for indirect, incidental or consequential loss, or for loss of profits, data or VDAs arising from market movements, blockchain or smart contract failures, actions of third parties or events beyond our reasonable control. Our total liability for any claim relating to a service will not exceed the fees you paid us for that service. Nothing in these terms excludes liability that cannot be excluded under law.`,
      ]},
      { h: '14. Indemnity', p: [
        'You agree to compensate us for losses and claims arising from your breach of these terms, your misuse of our services or your violation of any law or third-party right.',
      ]},
      { h: '15. Suspension and Termination', p: [
        'We may suspend or end your access to our website or services at any time if we believe you have breached these terms, or for legal or compliance reasons. You may stop using our services at any time.',
      ]},
      { h: '16. Governing Law and Jurisdiction', p: [
        'These terms are governed by the laws of India. Subject to any mandatory rules, the courts at Thrissur, Kerala will have exclusive jurisdiction over disputes arising from them.',
      ]},
      { h: '17. Changes to These Terms', p: [
        'We may update these terms from time to time. The "Last updated" date shows the latest version, and continued use of our website or services means you accept the updated terms.',
      ]},
      { h: '18. Contact', p: [
        `${COMPANY.name}, ${COMPANY.address}. Email: ${COMPANY.email}. Phone: ${COMPANY.phones.join(' / ')}.`,
      ]},
    ],
  },

  cookies: {
    title: 'Cookie Policy',
    intro: `This Cookie Policy explains how the ${COMPANY.short} website uses cookies and similar technologies such as local storage.`,
    sections: [
      { h: '1. What Are Cookies?', p: [
        'Cookies are small files stored on your device when you visit a website. Similar technologies, such as local storage, serve a similar purpose. They are used to make websites work, remember choices and understand how a site is used.',
      ]},
      { h: '2. How We Use Them', p: [
        'Our website currently uses only what is needed to remember your cookie choice, saved in your browser\'s local storage. We do not currently run advertising or analytics cookies of our own. If we add analytics or marketing tools in future, we will update this policy and ask for your consent first.',
      ]},
      { h: '3. Third-Party Content', p: [
        'Some content on our site is provided by third parties, which may set their own cookies or collect technical data such as your IP address when it loads:',
        { list: [
          'Google Maps, embedded on our contact section to show our location.',
          'Market data and coin images, loaded from third-party providers for the live price ticker and the home page.',
          'Social media links, which take you to third-party sites with their own policies.',
        ]},
        'We do not control these cookies. Please read the policies of those providers for details.',
      ]},
      { h: '4. Your Choices', p: [
        'When you first visit, you can choose "Accept" or "Essential only" on the cookie banner. Essential only means we will not enable any optional cookies, though third-party content described above may still load on the pages that use it. You can also clear or block cookies and local storage at any time in your browser settings. Clearing them will bring the banner back on your next visit.',
      ]},
      { h: '5. Changes to This Policy', p: [
        'We may update this policy as our website changes. The "Last updated" date shows the latest version.',
      ]},
      { h: '6. Contact', p: [
        `Questions about this policy can be sent to ${COMPANY.email}.`,
      ]},
    ],
  },
};
