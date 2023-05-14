# FabChain

Infrastructure to create interoperability between distributed manufacturing ecosystems

## Goal

This project has many goals, including:
- create a business model of open-source hardware, yet allow proprietary hardware
- create a standardized list of all hardware manufacturing files accross platforms
- facilitate contributing to existing hardware, make it financially relevant
- enable custom, local, on-demand manufacturing of community-designed products
- record manufacturing data to provide proofs of manufacturing quality
- track individual products' life including initial manufacturing materials to allow easier recycling/upcycling

## Project history

This project was started in 2015 under the name "MakerNet", a distributed manufacturing marketplace.

Since 2015, many deployments of the solution have been made in a centralized way (without blockchains), for different use-cases, but the long-term vision has not been achieved yet because of the many difficulties to set up such an ecosystem (double chicken-and-egg problem of a three-sided marketplace, cultural doubt of designers to share files for third-parties to manufacture, ...).

When COVID happened, several French initiatives joined forces to produce face shields for health workers as protective equipment was in shortage. One of these initiatives was carried by MakerNet, another one was called Visiere Solidaire. Using our tools, these two initiatives have produced 1.2 million face shields for health workers in France and abroad.

Following this experience, the two initiatives created the 3D printer brand Cosmyx, and MakerNet rebranded to DistriFab.

Cosmyx designs, manufactures and sells 3D printers that are tailor-made for industrial distributed manufacturing. Our 3D printers read manufacturing orders from DistriFab and autonomously start printing the requested object, providing a complementary salary to the printer's owner.

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

![fabchain-sequence](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/distrifab/fabchain/main/sequence.iuml)
