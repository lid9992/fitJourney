# FitJourney

Application de fitness personnelle en français : **« Mon corps, mon rythme, ma progression. »** L’application est conçue pour Safari sur iPhone, Chrome sur Android et les navigateurs modernes sur ordinateur. Elle ne demande ni compte, ni API, ni serveur applicatif. Les séances, mesures et préférences sont enregistrées localement dans IndexedDB.

## Lancer sur ordinateur

1. Installer Node.js 22 ou plus récent.
2. Dans ce dossier, lancer `pnpm install`.
3. Lancer `npm run dev` et ouvrir l’adresse locale affichée par Vite.
4. Créer un build de production avec `pnpm build`; le résultat est généré dans `dist/`.

## Publier gratuitement sur GitHub Pages

Le dépôt doit contenir ce dossier à sa racine et s’appeler `fitjourney` (la base de chemin est configurée pour le projet GitHub Pages `/<nom-du-dépôt>/`). Le workflow `.github/workflows/deploy.yml` construit l’application et publie `dist/` à chaque mise à jour de la branche `main`. Dans **Settings → Pages**, sélectionner **GitHub Actions** comme source. GitHub Free propose l’hébergement Pages sans coût pour un dépôt public. La publication nécessite un compte GitHub et une connexion Internet pour le déploiement initial.

Le dépôt doit rester public pour l’offre GitHub Free Pages. N’y ajoute aucune donnée privée : les profils, mesures et journaux ne sont créés qu’après ouverture de l’application et ne sont pas intégrés au code.

## Installer sur iPhone (Safari)

1. Ouvrir l’adresse Pages dans Safari.
2. Toucher **Partager**, puis **Sur l’écran d’accueil**.
3. Activer **Ouvrir comme app** si iOS propose cette option, puis toucher **Ajouter**.
4. Lancer FitJourney depuis son icône. Charger une fois l’application en ligne pour mettre ses fichiers hors ligne en cache.

## Installer sur Android (Chrome)

1. Ouvrir l’adresse Pages dans Chrome.
2. Ouvrir le menu ⋮, choisir **Installer l’application** ou **Ajouter à l’écran d’accueil**.
3. Confirmer puis lancer FitJourney depuis l’icône. Charger une fois l’application en ligne pour mettre ses fichiers hors ligne en cache.

## Fonctionnalités

- Accueil avec la séance du jour, phase de la semaine et raccourcis vers les progrès.
- Quatre séances, A à D, avec adaptation graduelle des durées sur huit semaines.
- Fiches pédagogiques hors ligne pour les mouvements du programme et les machines, avec illustrations SVG schématiques originales.
- Mode séance avec minuterie basée sur des horodatages, pause/reprise, suivi des exercices, répétitions, charges et difficulté ressentie.
- Suivi du poids et du tour de taille, graphiques sur les mesures réellement saisies et historique.
- Profil configurable, jours de séance, apparence claire/sombre/système.
- Export et restauration JSON locale; import validé et transactionnel.
- Service worker PWA, ressources de l’interface empaquetées et fonctionnement hors ligne après le premier chargement réussi.
- Conseils généraux de nutrition, récupération et installation.

## Vérifications

`pnpm test` exécute les tests unitaires des calculs de semaine, des phases, du début de semaine, de la sélection des jours et du format du chronomètre. `pnpm build` vérifie les types stricts et construit les fichiers de production.

Une vérification sur appareil réel reste à faire séparément :

- **Safari iOS** : installation depuis Safari; navigation depuis l’icône; démarrer, mettre en pause, verrouiller l’écran, reprendre; saisir mesure; exporter et restaurer un JSON; activer le mode avion et consulter un guide.
- **Chrome Android** : installation depuis le menu Chrome; répéter les mêmes parcours et vérifier la persistance après fermeture forcée du navigateur.
- **Ordinateur** : parcourir les cinq onglets, tester import/export et ouvrir le site en mode hors ligne après le premier chargement.

Ces appareils ne sont pas simulés par le build local; ne considérer aucun de ces contrôles comme réussi avant de l’avoir exécuté sur le terminal correspondant.

## Confidentialité et limites

- Les données d’entraînement restent sur le navigateur de l’appareil. La suppression des données du site/Safari peut les faire perdre; conserver des exports réguliers dans Fichiers.
- Aucun compte ni synchronisation automatique iCloud/Google n’est fourni.
- Pas de notifications fiables lorsque l’application est fermée; aucun push ou rappel serveur.
- Les illustrations sont des schémas de repérage, pas des animations biomécaniques. Les réglages de machines dépendent du fabricant et doivent être montrés par le personnel de la salle en cas de doute.
- Le calendrier propose une semaine récurrente configurable; le déplacement individuel d’une séance à une autre date n’est pas encore disponible.
- La validation sur iPhone et Android exige des appareils réels et un déploiement HTTPS; elle n’a pas été effectuée par le build local.
- Cette application fournit des repères de mouvement généraux, pas un diagnostic ou un programme médical. Les paliers de poids sont indicatifs et il n’existe aucune prétention de perte graisseuse localisée.
