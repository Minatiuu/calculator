#!/bin/sh
rm nohup.out
touch nohup.out
gnome-terminal -- tail -f nohup.out
nodemon server/server.js > nohup.out