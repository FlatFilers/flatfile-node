/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ListUsersSortField =
    | "email"
    | "name"
    | "id"
    | "idp"
    | "idp_ref"
    | "created_at"
    | "updated_at"
    | "last_seen_at"
    | "dashboard";
export const ListUsersSortField = {
    Email: "email",
    Name: "name",
    Id: "id",
    Idp: "idp",
    IdpRef: "idp_ref",
    CreatedAt: "created_at",
    UpdatedAt: "updated_at",
    LastSeenAt: "last_seen_at",
    Dashboard: "dashboard",
} as const;
