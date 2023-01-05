import Link from 'next/link';
import { Anchor, Divider, Text, Title } from '@mantine/core';
import { Blockquote } from './Blockquote';
import { SampleCodeSnippet } from './SampleCodeSnippet';
import { LinkHeading } from './LinkHeading';

export const mdxComponents = {
  a: (props: any) => (
    <Link href={props.href} passHref legacyBehavior>
      <Anchor
        target={props.href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
      >
        {props.children}
      </Anchor>
    </Link>
  ),
  blockquote: (props: any) => <Blockquote {...props} />,
  code: (props: any) => <SampleCodeSnippet {...props} />,
  h1: (props: any) => <Title order={1} {...props} />,
  h2: (props: any) => <LinkHeading order={2} {...props} />,
  h3: (props: any) => (
    <LinkHeading order={3} sx={{ marginTop: '3rem' }} {...props} />
  ),
  h4: (props: any) => (
    <LinkHeading order={4} sx={{ marginTop: '2rem' }} {...props} />
  ),
  h5: (props: any) => (
    <LinkHeading order={5} sx={{ marginTop: '2rem' }} {...props} />
  ),
  h6: (props: any) => <Title order={6} {...props} />,
  hr: (props: any) => <Divider sx={{ marginBottom: '1rem' }} {...props} />,
  li: (props: any) => (
    <li className="docsearch-content" {...props}>
      <Text>{props.children}</Text>
    </li>
  ),
  p: (props: any) => (
    <Text
      className="docsearch-content"
      sx={{
        textAlign: {
          xs: 'left',
          md: 'justify',
        },
        lineHeight: '1.75rem',
        margin: '0.75rem 0',
      }}
      {...props}
    />
  ),
};
