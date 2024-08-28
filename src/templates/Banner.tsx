import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to revolutionize your group chat problem-solving?"
      subtitle="Try gosolve.xyz today and experience the power of AI-driven simulations."
      button={
        <Link href="/get-started">
          <Button>Start Your First Simulation</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
