interface Names {
  firstName: string,
  lastName: string,
}

interface Ru {
  name: string,
  names: Names,
  location: string,
}

interface Michaeldanilov {
  name: string,
  names: Names,
  location: string,
  homepage: string,
  ru: Ru
}

declare const michaeldanilov: Michaeldanilov;

export default michaeldanilov;
