# FabChain

Infrastructure to create interoperability between distributed manufacturing ecosystems

## Technical description

Distrifab's FabChain is a [rollup](https://rollkit.dev/docs/intro/#what-is-rollkit) built using the [Cosmos SDK](https://docs.cosmos.network/main/intro/overview) and deployed on [Celestia](https://celestia.org/what-is-celestia/).

It allows actors of different distributed manufacturing ecosystems to interact :
- Design Agency
  - has designers (users)
  - provides file stores
  - receives payments for the usage of manufacturing files (optional)
- Store front
  - has clients (users)
  - reads files from agencies
  - creates manufacturing requests
  - reads responses to manufacturing requests
  - creates manufacturing order with attached payment proof
  - reads manufacturing order status updates
- Manufacture
  - has manufacturers (users)
  - has manufacturing capabilities ([OpenKnowWhere standard](https://standards.internetofproduction.org/pub/okw/release/1))
  - reads manufacturing requests
  - has a pricing algorithm (optional)
  - writes responses to manufacturing requests
  - reads and updates manufacturing orders
  - receives payments for the manufacturing services

![your-UML-diagram-name](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/distrifab/fabchain/main/sequence.iuml)
