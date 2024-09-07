import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to create transformative inspirational experiences?"
      subtitle="Try goinspire.xyz today and unleash the power of AI-driven motivation in your group chats."
      button={
        <Link href="https://app.goinspire.xyz">
          <Button>Start Your First Experience</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
