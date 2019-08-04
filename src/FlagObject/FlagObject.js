import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme, { globalStyles } from './theme';
import { Flex, Box, Image, Text, Icon, Link, Hidden } from '../primitives';
import { Headline, StandFirst, Meta, MetaLink } from './components';

const story = {
  headline:
    'Manchester United agree £80m deal to buy Harry Maguire from Leicester',
  standFirst:
    'Manchester United have agreed an £80m deal to buy Harry Maguire from Leicester City, making him the world’s most expensive defender',
  meta: '2 Aug 2019',
  media:
    'https://i.guim.co.uk/img/media/974ef47a5a96b017510dca7371c48fd133d416c1/2_125_3522_2113/master/3522.jpg?width=470&quality=45&auto=format&fit=max&dpr=2&s=0b4979f9faaefbfbd015dd77d22d2d4b',
};

export function FlagObject() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Flex alignItems="flex-start" justifyContent="center" m={[3, 4]}>
        <Box backgroundColor="neutral.6">
          <Box>
            <Headline>
              <span class="fc-item__kicker">Football</span>
              {story.headline}
            </Headline>
            <Box>
              <StandFirst>{story.standFirst}</StandFirst>
              <Flex justifyContent="space-between">
                <Meta
                  as="time"
                  datetime="2019-08-02T18:27:00+0000"
                  data-timestamp="1564770420000"
                  data-relativeformat="short"
                >
                  <Icon
                    width="11px"
                    height="11px"
                    mr="2px"
                    color="neutral.2"
                    viewBox="0 0 11 11"
                    fill="currentcolor"
                  >
                    <path d="M5.4 0C2.4 0 0 2.4 0 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4S8.4 0 5.4 0zm3 6.8H4.7V1.7h.7L6 5.4l2.4.6v.8z" />
                  </Icon>{' '}
                  <Hidden>Published: </Hidden>2 Aug 2019
                </Meta>
                <MetaLink
                  class="fc-trail__count fc-trail__count--commentcount"
                  href="https://www.theguardian.com/football/2019/aug/03/jadon-sancho-stars-as-dortmund-earn-supercup-win-over-bayern-munich#comments"
                  data-link-name="Comment count"
                  aria-label="32 comments"
                >
                  <Icon
                    width="14px"
                    height="14px"
                    mt="1"
                    mr="2px"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    color="neutral.2"
                  >
                    <path d="M13 0l1 1v7l-1 1h-6l-2 3h-1v-3h-2l-1-1v-7l1-1h11z" />
                  </Icon>{' '}
                  32
                </MetaLink>
              </Flex>
            </Box>
          </Box>
          <Image src={story.media} />
        </Box>
      </Flex>
    </ThemeProvider>
  );
}
