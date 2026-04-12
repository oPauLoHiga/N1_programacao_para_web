CREATE TABLE `tag` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nome` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `noticia_tag` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`noticia_id` integer NOT NULL,
	`tag_id` integer NOT NULL,
	FOREIGN KEY (`noticia_id`) REFERENCES `noticia`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tag_id`) REFERENCES `tag`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tag_nome_unique` ON `tag` (`nome`);
--> statement-breakpoint
CREATE UNIQUE INDEX `noticia_tag_noticia_id_tag_id_unique` ON `noticia_tag` (`noticia_id`,`tag_id`);
