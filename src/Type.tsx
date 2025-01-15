// Type.tsx
// Type shared by all project components

// Simplified type for one user
export type SimplifiedUser = {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    city: string;
    isOldest?: boolean; // Optional, as this property is added after filtering
  };
  