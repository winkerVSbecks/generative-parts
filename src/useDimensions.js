import { useCallback, useState, useEffect } from 'react';

export function useDimensions(
  typeSwRef,
  profileRef,
  navRef,
  mediaRef,
  searchRef,
  blackRef,
  primaryRef,
  secondaryRef,
) {
  const [dimensions, setDimensions] = useState([{}, {}]);

  const handleResize = useCallback(() => {
    const size = [
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      {
        typeSw: typeSwRef.current
          ? typeSwRef.current.getBoundingClientRect()
          : null,
        profile: profileRef.current
          ? profileRef.current.getBoundingClientRect()
          : null,
        nav: navRef.current ? navRef.current.getBoundingClientRect() : null,
        media: mediaRef.current
          ? mediaRef.current.getBoundingClientRect()
          : null,
        Search: searchRef.current
          ? searchRef.current.getBoundingClientRect()
          : null,
        black: blackRef.current
          ? blackRef.current.getBoundingClientRect()
          : null,
        primary: primaryRef.current
          ? primaryRef.current.getBoundingClientRect()
          : null,
        secondary: secondaryRef.current
          ? secondaryRef.current.getBoundingClientRect()
          : null,
      },
    ];

    setDimensions(size);
  }, [
    typeSwRef,
    profileRef,
    navRef,
    mediaRef,
    searchRef,
    blackRef,
    primaryRef,
    secondaryRef,
  ]);

  useEffect(() => {
    if (!typeSwRef.current) {
      return;
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [
    typeSwRef.current,
    profileRef.current,
    navRef.current,
    mediaRef.current,
    searchRef.current,
    blackRef.current,
    primaryRef.current,
    secondaryRef.current,
  ]);

  return dimensions;
}
