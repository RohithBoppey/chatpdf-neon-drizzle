import {
	integer,
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";

// enum for type safety
export const userSystemEnum = pgEnum("user_system_enum", ["system", "user"]);

// create tables in postgres ->
// here our major focus is on chat table
// the one on the left

// it contains name of the PDF
// this section is more like creating Schema from mongoose and then exporting it

// understand this structure -> this is how it is being passed in DrizzleORM
export const chats = pgTable("chats", {
	id: serial("id").primaryKey(),
	pdfName: text("pdf_name").notNull(),
	pdfURL: text("pdf_url").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	userID: varchar("user_id", { length: 256 }).notNull(),
	fileKey: text("file_key").notNull(),
});

export const messages = pgTable("messages", {
	id: serial("id").primaryKey(),
	chatId: integer("chat_id")
		.references(() => {
			return chats.id;
		})
		.notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	role: userSystemEnum("role").notNull(),
});

