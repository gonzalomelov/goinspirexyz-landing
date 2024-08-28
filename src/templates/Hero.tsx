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
          <Link href="https://github.com/gonzalomelov/gosolvexyz">GitHub</Link>
        </li>
        <li>
          <Link href="/demo">Demo</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Solve problems in group chats using\n'}
            <span className="text-primary-500">
              onchain AI-driven simulations
            </span>
          </>
        }
        description="Influence conversations naturally with AI-powered agents in secure, decentralized group chats."
        button={
          <Link href="/get-started">
            <Button xl>Get Started</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
