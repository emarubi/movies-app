# React-interview for Particeep

Lister les films dans des cartes avec: le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes. Les cartes doivent être côtes à côtes et responsive. Càd que lorsque la fenêtre se réduit, les cartes sautent à la ligne suivante.

Ajouter un bouton dans les cartes permettant de supprimer celle-ci

Ajouter un bouton toggle like/dislike

Ajouter un filtre par catégorie (de type multiselect) en supposant qu'on ne les connaisse pas à l'avance (il faut donc les récupérer dynamiquement depuis les films). Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus apparaître.

Ajouter un système de pagination avec les fonctionnalités suivantes:

Boutons précédent/suivant
Choix du nombre d'élements affichés par page (4, 8 ou 12).
Prenez des initiatives, il y a des points bonus si

C'est joli
Vous utilisez correctement REDUX
Il y a une attention aux détails
/!\ La suppression du comportement asynchrone dans movies.js entraînera une annulation du test.

-------------------------------------

I realised this web app with Next.js.
To run on your computer, clone this repository then run
- yarn install 
- yarn dev

To build it:
- yarn build

To start it:
- yarn start


## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)


Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
