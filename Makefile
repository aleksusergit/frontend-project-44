#Makefile
install: # установить зависимости
	npm ci

brain-games: # запустить игру
	node bin/brain-games.js

publish: # публиковать проект без захламления общего хранилища учебными пакетами
	npm publish --dry-run

