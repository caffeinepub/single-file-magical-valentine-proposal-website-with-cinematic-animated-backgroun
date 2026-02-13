import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Response {
    weddingAnswer: string;
    bobaAnswer: string;
    timestamp: bigint;
}
export interface backendInterface {
    getAllResponses(adminPassword: string): Promise<Array<Response> | null>;
    getResponse(id: bigint, adminPassword: string): Promise<Response | null>;
    isAdmin(password: string): Promise<boolean>;
    recordResponse(weddingAnswer: string, bobaAnswer: string): Promise<bigint>;
}
