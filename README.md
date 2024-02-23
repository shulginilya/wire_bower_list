# wire_bower_list

requirements:
npm >= 6.14 pr yarn >= 1.22.19
node >= 18.6.0

from te root folder run this commands:
yarn install ( install dependencies )
yarn start ( run app )
yarn test ( run unit tests )


# API limitations:

- I had to replace 'owner' with something different as 'owner' field is not provided by API anymore , so I took 'repository_url' instead.
- Sorting. API doesn't allow you to sort by both asc and desc orders. Only desc order. So that's why you will see two buttons:
'orig' stands for original sorting and 'desc' for the descending order
- Search. I have made return results already sorted by 'stars' in desc order
- As there is no option to make API call in order to fetch only amount of results , I had to fetch all of them in one call

# Things which I might do better if I would have more time
- more cleaner git history
- more logic in a unit tests