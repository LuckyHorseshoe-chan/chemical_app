CREATE TABLE "nanoparticle" (
  "id" integer PRIMARY KEY,
  "np_str" text,
  "size" float,
  "article_id" integer,
  "mat_id" integer,
  "mep_id" integer,
  "user_id" integer
);

CREATE TABLE "synthesis" (
  "id" integer PRIMARY KEY,
  "np_id" integer,
  "method" text,
  "article_id" integer
);

CREATE TABLE "NOVA" (
  "id" integer PRIMARY KEY,
  "np_id" integer,
  "method" text,
  "absorbat" text,
  "pore_size" float,
  "density" float,
  "ads_desorb_curve" file,
  "pore_distr_curve" file
);

CREATE TABLE "material" (
  "mat_id" integer PRIMARY KEY,
  "name" text,
  "synonyms" text,
  "chem_form" text,
  "cas_num" integer
);

CREATE TABLE "user" (
  "id" integer PRIMARY KEY,
  "name" text,
  "surname" text,
  "username" text,
  "email" text,
  "password" text
);

ALTER TABLE "synthesis" ADD FOREIGN KEY ("np_id") REFERENCES "nanoparticle" ("id");

ALTER TABLE "NOVA" ADD FOREIGN KEY ("np_id") REFERENCES "nanoparticle" ("id");

ALTER TABLE "nanoparticle" ADD FOREIGN KEY ("mat_id") REFERENCES "material" ("mat_id");

ALTER TABLE "nanoparticle" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");
