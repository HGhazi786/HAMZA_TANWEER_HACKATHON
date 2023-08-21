import { pgTable, varchar, integer, serial,text, timestamp } from "drizzle-orm/pg-core";
import {drizzle} from "drizzle-orm/vercel-postgres"
import {sql} from "@vercel/postgres"

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }),
  quantity: integer("quantity").notNull(),
  product_name: varchar("product_name", { length: 255 }).notNull(),
  image: text("image").notNull(),
  price: integer("price").notNull(),
  total_price:integer("totalprice").notNull(),
  created_at:timestamp("created_at")
});

export const feedbackTable = pgTable("feedback", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  comment: text("comment").notNull(),
});


export const db= drizzle(sql);