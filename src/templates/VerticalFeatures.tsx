import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="How gosolve.xyz Works"
    description="Leverage AI-driven simulations to solve problems and achieve your goals in group chats."
  >
    <VerticalFeatureRow
      title="Set Up Your Simulation"
      description="Specify your problem, target audience, and group chat details. Our platform uses XMTP to create a secure, decentralized chat environment."
      image="/assets/images/feature-setup.png"
      imageAlt="Setup feature"
    />
    <VerticalFeatureRow
      title="AI-Powered Conversations"
      description="Our multi-agent system, powered by Galadriel, uses web search and RAG models to guide conversations naturally towards your desired outcome."
      image="/assets/images/feature-ai.png"
      imageAlt="AI feature"
      reverse
    />
    <VerticalFeatureRow
      title="Privacy and Security"
      description="Lit Protocol manages private data, ensuring only necessary AI bots access sensitive information. Envio integrates public onchain data for relevant strategies."
      image="/assets/images/feature-security.png"
      imageAlt="Security feature"
    />
  </Section>
);

export { VerticalFeatures };
