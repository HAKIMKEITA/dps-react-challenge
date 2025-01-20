export type SimplifiedUser = {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    city: string;
    isOldest?: boolean; // Optional, as this property is added after filtering
  };
  