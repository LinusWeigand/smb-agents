-- Orakis marketing-site schema (Neon Postgres).
--
-- Run once against your Neon database:
--   psql "$DATABASE_URL" -f db/schema.sql
--
-- Kept in the repo on purpose: the reason the previous backend was
-- unrecoverable is that its schema and logic only ever existed inside a
-- hosted UI. Anything here comes back with `git clone`.

-- ---------------------------------------------------------------------------
-- Demo requests (the "Let's talk" form)
-- ---------------------------------------------------------------------------
create table if not exists demo_request (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name       text not null,
  email      text not null,
  -- Company *size band* rather than a company name: '1-20', '21-100', etc.
  company    text not null,
  challenge  text,
  tools      text
);

create index if not exists demo_request_created_at_idx
  on demo_request (created_at desc);

-- ---------------------------------------------------------------------------
-- Waitlist (the plan modal on /pricing)
-- ---------------------------------------------------------------------------
create table if not exists waitlist (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  -- Stored lower-cased by the API so a re-submission with different casing
  -- updates the existing row rather than creating a duplicate.
  email      text not null unique,
  plan       text
);

create index if not exists waitlist_created_at_idx
  on waitlist (created_at desc);

-- ---------------------------------------------------------------------------
-- Server-side submission throttle
-- ---------------------------------------------------------------------------
-- The browser-side limiter in src/lib/formGuards.ts is a courtesy speed bump;
-- anyone can clear localStorage. This is the one that actually holds.
--
-- GDPR note: we store a salted SHA-256 of the client IP, never the IP itself,
-- and prune rows older than the throttle window. That keeps this useful for
-- abuse prevention without retaining an identifier tied to a person.
create table if not exists submission_throttle (
  id          bigint generated always as identity primary key,
  form        text not null,
  client_hash text not null,
  created_at  timestamptz not null default now()
);

create index if not exists submission_throttle_lookup_idx
  on submission_throttle (form, client_hash, created_at desc);
