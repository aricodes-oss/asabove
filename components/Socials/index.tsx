'use client';

import { socials } from '@/constants';
import { ActionIcon, HoverCard, Text } from '@mantine/core';
import Link from 'next/link';

export default function Socials() {
  return socials.map(link => (
    <HoverCard shadow="md" key={link.href}>
      <HoverCard.Target>
        <ActionIcon
          color="white"
          key={link.href}
          aria-label={link.text}
          component={Link}
          href={link.href}
          variant="subtle"
        >
          <link.icon />
        </ActionIcon>
      </HoverCard.Target>

      <HoverCard.Dropdown>
        <Text size="sm">{link.text}</Text>
      </HoverCard.Dropdown>
    </HoverCard>
  ));
}
