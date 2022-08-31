#Makefile
install: # установить зависимости
	npm ci

brain-games: # запустить игру
	node bin/brain-games.js

npm install: # очистить общее хранилище от учебных пакетов
	--dry-run

