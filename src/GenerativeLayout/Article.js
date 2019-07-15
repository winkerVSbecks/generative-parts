import React from 'react';
// import { Card } from 'rebass';
import { Card } from '../primitives';

export default [
  <header className="dark-gray avenir tc-l ph3 ph4-ns pt4 pt5-ns">
    <h1 className="f3 f2-m f-subheadline-l measure lh-title fw1 mt0">
      A Night of Taking Photos at the Spooky Ruins of the Sutro Baths
    </h1>
  </header>,
  <time className="dark-gray avenir f5 f4-l db fw1 baskerville">
    March 19th, 2015
  </time>,
  <Card
    width="100%"
    height="100%"
    backgroundSize="cover"
    backgroundImage="url('//mrmrs.github.io/photos/009.jpg')"
    alt="Sutro baths by Adam Morse"
  />,
  <p className="mv0 dark-gray f4 center measure lh-copy baskerville">
    On <time>March 14, 1896</time>, the Sutro Baths were opened to the public as
    the world's largest indoor swimming pool establishment.
  </p>,
  <Card
    width="100%"
    height="100%"
    backgroundSize="cover"
    backgroundImage="url('//mrmrs.github.io/photos/013.jpg')"
    alt="The foundations of a building on a cliff overlooking a lighthouse."
  />,
  <p className="mv0 dark-gray measure f5 f4-ns lh-copy baskerville">
    Before it burned to the ground, the structure filled a small beach inlet
    below the Cliff House, also owned by Adolph Sutro at the time. Shortly after
    closing, a fire in 1966 destroyed the building while it was in the process
    of being demolished.
  </p>,
  <Card
    width="100%"
    height="100%"
    backgroundSize="cover"
    backgroundImage="url('//mrmrs.github.io/photos/012.jpg')"
    alt="The sea with mist covering the rocky formations near the shore."
  />,
  <p className="mv0 dark-gray measure f5 f4-ns lh-copy baskerville">
    During high tides, water would flow directly into the pools from the nearby
    ocean, recycling the two million US gallons of water in about an hour.
  </p>,
  <Card
    width="100%"
    height="100%"
    backgroundSize="cover"
    backgroundImage="url('//mrmrs.github.io/photos/010.jpg')"
    alt="A dusk skyline above a grassy rockface covered in trees."
  />,
  <p className="mv0 dark-gray measure f5 f4-ns lh-copy baskerville">
    All that remains of the site are concrete walls, blocked off stairs and
    passageways, and a tunnel with a deep crevice in the middle. The cause of
    the fire was arson. Shortly afterwards, the developer left San Francisco and
    claimed insurance money.
  </p>,
  <Card
    width="100%"
    height="100%"
    backgroundSize="cover"
    backgroundImage="url('//mrmrs.github.io/photos/011.jpg')"
    alt="The sea and sky on the horizon with the foundations of a demolished house."
  />,
  <p className="mv0 dark-gray measure f5 f4-ns lh-copy baskerville">
    During low tides, a powerful turbine water pump, built inside a cave at sea
    level, could be switched on from a control room and could fill the tanks at
    a rate of 6,000 US gallons a minute, recycling all the water in five hours.
  </p>,
];
