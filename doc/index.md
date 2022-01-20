# Overview

https://github.com/gamedaoco/gamedao-haiku

1. REPO + STACK
	- monorepo
		- frontend dapp
		- gamedao-sdk -> protocol
		- zero-sdk -> chain
		- ui -> components
		- substrate-graph
		- test

	- i18n + rtl
    - feature toggles
    - configuration

	- yarn 1/2 ?
	- nextjs
	- typescript
	- commit lint
	- prettier
	- graphql apollo/?
	- material ui 5

	- error logging

	- testing jest

2. CHAIN + STATE
	- network provider
	- state / hydration
	- wallet connect / disconnect

3. GRAPH
	- graphql [modules] as apis
	- type generation from chain to ts types to graphql schema
	- config / features

4. FRONTEND + MUI
	- layout migration
	- themes -> overrides
	- components
	- theme switcher
	- themes -> custom styling skins per project -> injected ?

# End to End

```
	CHAIN - CODEC <> net <> CODEC - graphql <> graphql aggregator <> frontend
```