export interface Names {
  firstName: string;
  lastName: string;
}

export interface CV {
  service: 'habr' | 'linkedin';
  url: string;
}

export interface Info {
  names: Names;
  name: string;
  location: string;
  cv: CV;
  jobTitle: string;
  worksFor: {
    brand: {
      name: string;
      url: string;
    };
    department: {
      name: string;
    };
    name: string;
    url: string;
  };
}
