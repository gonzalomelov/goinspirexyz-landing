import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/gonzalomelov/goinspirexyz">
            GitHub
          </Link>
        </li>
        {/* <li>
          <Link href="/demo">Demo</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Inspire and motivate in group chats with\n'}
            <span className="text-primary-500">
              onchain AI-driven experiences
            </span>
          </>
        }
        description="Empower conversations naturally with AI-powered agents in secure, decentralized group chats to create transformative inspirational experiences."
        button={
          <Link href="/get-started">
            <Button xl>Start Inspiring</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
