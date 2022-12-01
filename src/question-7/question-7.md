# Question 7
## Où est Nemo

Aujourd'hui est le premier jour d'école de Nemo et les enfants vont en excursion dans la partie profonde de l'océan. Marlin, son père, nerveux, les suit dans l'excursion. Nemo, dans un élan de courage, va toucher un bateau, mais, comble du malheur, il se fait enlever pas un plongeur. Marlin est dans tous ses états. Son fils unique. Kidnappé.

Heureusement, Marlin ayant fait son bac à Polytechnique est un adepte de la technologie. Il a remarqué l'immatriculation du bateau, et il sait qu'il peut trianguler les ondes du bateau afin de retrouver son fils.

Vous devez ainsi aider Marlin à utiliser les données des entennes afin de trouver son fils.

Malheureusement, les données des antennes ne sont pas très précises. Vous devez donc trouver la position de la triangulation, mais aussi le rayon d'erreur. Ces données correspondent au centre et au rayon du plus petit cercle qui contient tous les points de rencontre des cercles de données.

### Input Format

- Première ligne : nombre de points de données
- Lignes suivantes : données au format CoordonnéeX CoordonéeY Rayon séparé par des espaces.

### Constraints

- Il peut y avoir plus de 3 points de données. Cependant, vous n'avez qu'à considérer les intersections des cercles adjacents. (Par exemple, si vous avez les cercles de données 1, 2, 3 et 4. Alors, le cercle de triangulation correspond au plus petit cercle contenant le point d'intersection des cercles 1-2, 2-3, 3-4 et 4-1). image
- Dans le cas où deux cercles on 2 points d'intersection, alors il faut choisir le point le plus proche de la zone de triangulisation. image
- Dans le cas où deux cercles ne se touche pas, alors il faut choisir le point d'interpolation entre les 2 points les plus proches de chacun des cercles. image
- Les données du résultats doivent être arrondi à 3 chiffres après la virgule.

### Output Format

Les coordonnées du point triangulé et son rayon d'erreur séparé par des espaces avec deux chiffres après la virgule. (X.XX Y.YY R.RR)