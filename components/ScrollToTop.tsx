'use client';

import { Affix, Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';

export default function ScrollToTop({ ...props }) {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: 20, right: 20 }} {...props} visibleFrom="md">
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {transitionStyles => (
          <Button
            variant="subtle"
            leftSection={<IconArrowUp size={16} />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            Scroll to Top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
