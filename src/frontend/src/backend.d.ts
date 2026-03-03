import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Enquiry {
    name: string;
    plan: TiffinPlan;
    timestamp: Time;
    phone: string;
    location: string;
}
export enum TiffinPlan {
    custom = "custom",
    monthly = "monthly",
    corporate = "corporate",
    weekly = "weekly"
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(name: string, phone: string, location: string, plan: TiffinPlan): Promise<void>;
}
