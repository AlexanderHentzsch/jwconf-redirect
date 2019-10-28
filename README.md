# Automatische Weiterleitung für JWConf

JWConf bietet die Möglichkeit eine Autologin-Seite aufzurufen und diese dann in den Favoriten abzuspeichern.
Sehr hilfreich für Fehrnsehr. Allerdings muss nach Aufruf dieses Links manuell weiter navigiert werden.
Dieses kleine Tool umgeht diese Beschränkung.

https://billalex-basoftware.github.io/jwconf-redirect/

Nach Eingabe des JWConf-Keys wird dieser im "local storage" abgelegt und sofort auf die JWConf Startseite gewechselt.

Bei einem erneuten Aufruf wird der Key aus dem local storage geladen und nach 5 Sekunden weitergeleitet.
Ist dies nicht gewünscht, kann man den Abbrechen-Button drücken und den hinterlegten Key ändern.

## Third-party libraries
[_**Vue.js**_  ](https://github.com/vuejs/vue) - [The MIT License (MIT)](https://github.com/vuejs/vue/blob/dev/LICENSE)
