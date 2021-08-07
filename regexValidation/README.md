# Regex Validation

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.

## Positive Lookahead

```
(?=...)
```

## Any single character

- Matches any character

```
.
```

## Greedy quantifier

- Matches the pervious token between zero and unlimited times, as many times as possible

```
*
```

## Any digit

- Match any digit from [0-9]

```
\d
```

## A character in range of [a-z]

```
[a-z]
```

## A character in range of [A-Z]

```
[A-Z]
```

## Start of string

- Asserts position at start of the string

```
^
```

## 6 or more of a value

- Matches the pervious token betwwen 6 and unlimited times as many times as possible

```
{6,}
```

## End of string

- Asserts position at the end of the string

```
$
```
