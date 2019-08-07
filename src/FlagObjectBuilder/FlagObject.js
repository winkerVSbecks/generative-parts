import React from 'react';
import { Flex, Icon, Hidden } from '../primitives';
import {
  Card,
  Headline,
  StandFirst,
  Meta,
  MetaLink,
  Pillar,
  Media,
  Blocky,
} from './components';

const story = {
  headline:
    'Manchester United agree £80m deal to buy Harry Maguire from Leicester',
  standFirst:
    'Manchester United have agreed an £80m deal to buy Harry Maguire from Leicester City, making him the world’s most expensive defender',
  meta: '2 Aug 2019',
  media:
    'https://i.guim.co.uk/img/media/974ef47a5a96b017510dca7371c48fd133d416c1/2_125_3522_2113/master/3522.jpg?width=470&quality=45&auto=format&fit=max&dpr=2&s=0b4979f9faaefbfbd015dd77d22d2d4b',
};

export const FlagObject = ({
  headline,
  pillar,
  standFirst,
  meta,
  media,
  contentHidden,
  border,
  contentDir,
  standfirstDir,
  metaDir,
  width,
  height,
  mediaPadding,
  textAlignment,
  metaAlignment,
  reverseContentOrder,
}) => (
  <Card
    flexDirection={`${contentDir}${reverseContentOrder ? '-reverse' : ''}`}
    width={width}
    height={height > 9 ? 'auto' : height}
    backgroundColor="neutral.6"
    justifyContent="stretch"
    borderWidth={border ? 2 : 0}
  >
    <Flex
      flexDirection="column"
      justifyContent={textAlignment}
      p={2}
      flex="1 1 34%"
    >
      {headline && (
        <Headline mb={0}>
          {pillar && <Pillar blocky={contentHidden}>Football</Pillar>}{' '}
          <Blocky color="neutral.0" blocky={contentHidden}>
            {story.headline}
          </Blocky>
        </Headline>
      )}
      <Flex mt={3} flexDirection={standfirstDir}>
        {standFirst && (
          <StandFirst flex="1" mr={standfirstDir === 'row' ? 3 : 0}>
            <Blocky color="neutral.1" blocky={contentHidden}>
              {story.standFirst}
            </Blocky>
          </StandFirst>
        )}
        {meta && (
          <MetaContent
            justifyContent={metaAlignment}
            flexDirection={metaDir}
            mt={2}
            contentHidden={contentHidden}
          />
        )}
      </Flex>
    </Flex>
    {media && (
      <Media
        m={mediaPadding}
        flex="1 1 66%"
        blocky={contentHidden}
        aspectRatio={5 / 3}
        image={story.media}
      />
    )}
  </Card>
);

const MetaContent = ({ contentHidden, flexDirection, ...props }) => (
  <Flex
    justifyContent="space-between"
    flex="none"
    flexDirection={flexDirection}
    {...props}
  >
    <Meta
      mr={flexDirection === 'row' ? 2 : 0}
      mb={flexDirection === 'column' ? 2 : 0}
      as="time"
      datetime="2019-08-02T18:27:00+0000"
      blocky={contentHidden}
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
      href="https://www.theguardian.com/football/2019/aug/03/jadon-sancho-stars-as-dortmund-earn-supercup-win-over-bayern-munich#comments"
      data-link-name="Comment count"
      aria-label="32 comments"
      blocky={contentHidden}
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
);
