// src/app/dashboard/ad/disputes/types.ts

export interface DisputeReason {
  id: number;
  title: string;
  details?: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export interface DisputeResolution {
  id: number;
  title: string;
  details?: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type DisputeManagementType = "reason" | "resolution";
