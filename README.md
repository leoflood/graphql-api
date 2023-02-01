### This is a simple GraphQL API with a couple of endpoints.

This project uses yarn, if you do not have it please do

```bash
  npm install --global yarn
```

Install and run with yarn

```bash
  yarn
  yarn dev
```

To get some data from the server you can request the following object:

```bash
{
    quoteOfTheDay,
    random,
    getDie(numSides: 6) {
        rollOnce
        roll(numRolls: 5)
    }
}
```

You can also modify the above object to not request all the data or request different data:

```bash
{
    quoteOfTheDay,
    getDie(numSides: 12) {
        roll(numRolls: 3)
    }
}
```