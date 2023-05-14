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

## State of the art

This repo contains the builds of the fabchain rollup's node. We are currently building an API and front-end to allow platforms to have a reference implementation of how to work with the node, which will published soon.

The node will also be embedded by the Cosmyx 3D printers so they can receive manufacturing orders from the blockchain.

## Node operation

The fabchain node is operated like any other cosmos-sdk based node. All commands relative to fabchain are implemented in the `fab` module.

```
$ fabchaind tx fab
fab transactions subcommands

Usage:
  fabchaind tx fab [flags]
  fabchaind tx fab [command]

Available Commands:
  create-agency      Create a new agency
  create-capability  Create a new capability
  create-filestore   Create a new filestore
  create-manufacture Create a new manufacture
  create-order       Create a new order
  create-pricer      Create a new pricer
  create-product     Create a new product
  create-request     Create a new request
  create-response    Create a new response
  create-storefront  Create a new storefront
  create-user        Create a new user
  delete-agency      Delete a agency by id
  delete-capability  Delete a capability by id
  delete-filestore   Delete a filestore by id
  delete-manufacture Delete a manufacture by id
  delete-order       Delete a order by id
  delete-pricer      Delete a pricer by id
  delete-product     Delete a product by id
  delete-request     Delete a request by id
  delete-response    Delete a response by id
  delete-storefront  Delete a storefront by id
  delete-user        Delete a user by id
  update-agency      Update a agency
  update-capability  Update a capability
  update-filestore   Update a filestore
  update-manufacture Update a manufacture
  update-order       Update a order
  update-pricer      Update a pricer
  update-product     Update a product
  update-request     Update a request
  update-response    Update a response
  update-storefront  Update a storefront
  update-user        Update a user
```

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

## Open-sourcing the node's code

We plan on releasing the node's source code once the business model and legal issues are ironed out.

## Deploying a celestia rollup

In order to create the fabchain node binary, [we have created a tool (ignite-manger)](https://github.com/zkvalidator/ignite-manager) which takes as input a yaml file to describe the chain and its features, which allows deploying locally or publishing a celestia rollup on a target network as easy as a single command:

```sh
# run a rollup localy for development
./run.sh build.yml

# deploy a rollup to celestia
./run.sh build.yml \
  --namespace "E5EE1e79" \
  --app-address http://37.27.10.10 \
  --bridge-address http://65.108.137.217
```

The tool works for rollkit rollups on celestia (it starts a celestia-appd and celestia-node bridge locally) as well as tendermint chains.

## Project history

This project was started in 2015 under the name [MakerNet](https://makernet.org/), a distributed manufacturing marketplace.

Since 2015, many deployments of the solution have been made in a centralized way (without blockchains), for different use-cases, but the long-term vision has not been achieved yet because of the many difficulties to set up such an ecosystem (double chicken-and-egg problem of a three-sided marketplace, cultural doubt of designers to share files for third-parties to manufacture, ...).

In 2017, [Pierre-Alexis Ciavaldini](https://www.linkedin.com/in/peac/) wrote the [first article about distributed manufacturing and the blockchain](https://www.annales.org/ri/2017/resumes/aout/14-ri-resum-FR-AN-AL-ES-aout-2017.html), and worked with [Tomas Diez](https://www.linkedin.com/in/tomas-diez-2b37aa11/) and [Primavera De Filippi](https://www.linkedin.com/in/primavera-de-filippi-07558536/) on a [whitepaper for distributed manufacturing in the Fab movement](https://docs.google.com/document/d/1yAJT-OPEVm8R7umFMZc45D6eR5pXdGggJfUXXKaKxeo), where he coined the names `fabchain` and `fabcoin`, and the general goals of a blockchain for distributed manufacturing based on MakerNet's previous years of research. He also participated in the creation of the [Internet of Production Alliance](https://www.internetofproduction.org/), which creates standards for documenting hardware projects and manufacturing capabilities. 

When COVID happened, several French initiatives joined forces to produce face shields for health workers as protective equipment was in shortage. One of these initiatives was carried by MakerNet, another one was called Visiere Solidaire. Using our tools, these two initiatives have produced 1.2 million face shields for health workers in France and abroad.

Following this experience, the two initiatives created the [3D printer brand Cosmyx](https://www.cosmyx3d.com/), and MakerNet rebranded to DistriFab.

Cosmyx designs, manufactures and sells 3D printers that are tailor-made for industrial distributed manufacturing. Our 3D printers read manufacturing orders from DistriFab and autonomously start printing the requested object, providing a complementary salary to the printer's owner.

As time passed, more and more distributed manufacturing initiatives started blooming. DistriFab's point of view on distributed manufacturing is to connect existing distributed manufacturing ecosystems in a standardized way to make them interoperable. This way, a design hosted on platform A can be manufactured by users of platform B on a request created by storefront C, to increase each actor's reach and power to develop the distributed manufacturing paradigm that we've been working on since 2015.
