# Reader iBeacon With Raspberry Pi Zero W

## Beberapa Catatan :

- sudo apt-get install bluez
ikuti Link Berikut :
https://www.instructables.com/id/iBeacon-Entry-System-with-the-Raspberry-Pi-and-Azu/


INSTALL NODEJS NPM RASPBERRY PI

- uname -m --> untuk mengetahui versi arm
- wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv6l.tar.gz (download for arm versi 61)
- tar -xzf node-v8.9.0-linux-armv6l.tar.gz
- cd node-v6.11.1-linux-armv6l/
- sudo cp -R * /usr/local/
- node -v (Check Versi node)
- npm -v (Check Versi npm)


REFERENSI :
https://github.com/futomi/node-beacon-scanner
https://github.com/sandeepmistry/node-bleacon


MQTT : http://www.switchdoc.com/2016/02/tutorial-installing-and-testing-mosquitto-mqtt-on-raspberry-pi/

sudo /etc/init.d/mosquitto stop (STOP MQTT)
sudo /etc/init.d/mosquitto start (START MQTT)

Nodejs CRUD MySQL = http://blog.chapagain.com.np/node-js-express-mysql-simple-add-edit-delete-view-crud/
