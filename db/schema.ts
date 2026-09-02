import {sqliteTable,text,integer} from "drizzle-orm/sqlite-core";
export const siteContent=sqliteTable("site_content",{key:text("key").primaryKey(),value:text("value").notNull(),updatedAt:integer("updated_at").notNull()});
export const adminSessions=sqliteTable("admin_sessions",{token:text("token").primaryKey(),discordId:text("discord_id").notNull(),expiresAt:integer("expires_at").notNull()});
export const media=sqliteTable("media",{key:text("key").primaryKey(),name:text("name").notNull(),type:text("type").notNull(),size:integer("size").notNull(),createdAt:integer("created_at").notNull()});
