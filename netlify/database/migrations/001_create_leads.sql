-- Migración 001: Tabla de leads Global 24 GPS de Colombia
-- Ubicación: netlify/database/migrations/001_create_leads.sql
-- Netlify DB (Neon Postgres) ejecuta estas migraciones automáticamente al hacer deploy.

CREATE TABLE IF NOT EXISTS leads (
  id          SERIAL PRIMARY KEY,
  nombre      VARCHAR(255)               NOT NULL,
  email       VARCHAR(255),
  telefono    VARCHAR(50),
  mensaje     TEXT,
  creado_en   TIMESTAMPTZ DEFAULT NOW()  NOT NULL
);

-- Índice para ordenar por fecha de forma eficiente en el panel admin
CREATE INDEX IF NOT EXISTS idx_leads_creado_en ON leads (creado_en DESC);
