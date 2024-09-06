import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="How goinspire.xyz Works"
    description="Empower conversations naturally with AI-powered agents in secure, decentralized group chats to inspire positive change."
  >
    <VerticalFeatureRow
      title="Create Your Inspiration Scenario"
      description="Define your inspirational goal, target person to inspire, and group chat details. Our platform uses XMTP to create a secure, decentralized chat environment for uplifting conversations."
      image="/assets/images/feature-setup.png"
      imageAlt="Setup feature"
    />
    <VerticalFeatureRow
      title="AI-Powered Inspirational Dialogues"
      description="Our multi-agent system, powered by Galadriel, uses web search and RAG models to guide conversations naturally towards inspiring outcomes and positive change."
      image="/assets/images/feature-ai.png"
      imageAlt="AI feature"
      reverse
    />
    <VerticalFeatureRow
      title="Privacy and Personalized Inspiration"
      description="Lit Protocol manages private data, ensuring only necessary AI bots access sensitive information. Envio integrates public onchain data to tailor inspirational strategies to each participant."
      image="/assets/images/feature-security.png"
      imageAlt="Security and personalization feature"
    />
  </Section>
);

export { VerticalFeatures };
