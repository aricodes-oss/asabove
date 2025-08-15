import { Drawer, NavLink } from '@mantine/core';
import { IconLink } from '@tabler/icons-react';

interface Link {
  href: string;
  text: string;
  icon: React.ElementType;
}

interface Props {
  links: Link[];
  socials: Link[];
  opened: boolean;
  close: {
    (): void;
  };
  mobileNavProps: object;
}

export default function MobileDrawer({ links, socials, opened, close, mobileNavProps }: Props) {
  return (
    <Drawer opened={opened} onClose={close}>
      {links.map(({ href, text, icon: Icon }) => (
        <NavLink
          {...mobileNavProps}
          href={href}
          label={text}
          key={href}
          leftSection={<Icon stroke={2} />}
        />
      ))}
      <NavLink label="Socials" defaultOpened leftSection={<IconLink stroke={2} />}>
        {socials.map(({ href, text, icon: Icon }) => (
          <NavLink
            {...mobileNavProps}
            href={href}
            label={text}
            key={href}
            leftSection={<Icon stroke={2} />}
          />
        ))}
      </NavLink>
    </Drawer>
  );
}
