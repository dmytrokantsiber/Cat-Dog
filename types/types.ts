export interface AnimalBaseInfo {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: [{ id: number; name: string }];
}

export interface AnimalFullInfo {
  id: number;
  name: string;
  weight: { imperial: string; metric: string };
  height?: { imperial: string; metric: string };
  life_span?: string;
  bred_for?: string;
  breed_group?: string;
  temperament?: string;
  origin?: string;
  description?: string;
  image: {
    url: string;
  };
}
