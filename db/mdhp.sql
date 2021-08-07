CREATE TABLE pixelmap (
  id integer PRIMARY KEY,
  title text NOT NULL,
  x1 int NOT NULL,
  x2 int NOT NULL,
  y1 int NOT NULL,
  y2 int NOT NULL,
  href text NOT NULL,
  domain text NOT NULL,
  size int NOT NULL
 );

CREATE INDEX x1_idx ON pixelmap (x1);
CREATE INDEX x2_idx ON pixelmap (x2);
CREATE INDEX y1_idx ON pixelmap (y1);
CREATE INDEX y2_idx ON pixelmap (y2);


CREATE TABLE resolves (
  id integer PRIMARY KEY,
  pixelmapId int NOT NULL,
  dateTS DATETIME DEFAULT CURRENT_TIMESTAMP,
  resolves int NOT NULL
);

CREATE INDEX pixelmapId_idx ON resolves (pixelmapId);
CREATE INDEX resolves_idx ON resolves (resolves);


CREATE TABLE availability (
  id integer PRIMARY KEY,
  domain text NOT NULL,
  dateTS DATETIME DEFAULT CURRENT_TIMESTAMP,
  available int NOT NULL,
  cost int
);

CREATE INDEX domain_idx ON availability (domain);
CREATE INDEX available_idx ON availability (available);
