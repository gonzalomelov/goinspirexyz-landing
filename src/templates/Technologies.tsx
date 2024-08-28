import Image from 'next/image';

import { Section } from '../layout/Section';

const Technologies = () => (
  <Section title="Powered by Cutting-Edge Technologies">
    <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/xmtp-logo.png"
          alt="XMTP"
          width={160}
          height={60}
        />
        <p className="mt-2 text-sm">Secure Messaging</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/galadriel-logo.png"
          alt="Galadriel"
          width={160}
          height={60}
        />
        <p className="mt-2 text-sm">AI Multi-Agent System</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/lit-protocol-logo.png"
          alt="Lit Protocol"
          width={160}
          height={60}
        />
        <p className="mt-2 text-sm">Privacy Management</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/envio-logo.png"
          alt="Envio"
          width={160}
          height={60}
        />
        <p className="mt-2 text-sm">Onchain Data Integration</p>
      </div>
    </div>
  </Section>
);

export { Technologies };
