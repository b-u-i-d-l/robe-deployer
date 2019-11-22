var Index = React.createClass({
    requiredModules: [
        'spa/editor'
    ],
    render() {
        return (
            <article className="Main">
                <section className="MainAll">
                    <section className="MainTitle">
                        <img src="./assets/img/ROBE.gif"/>
                        <h1>ROBE</h1>
                        <h4>An ERC-721 Improvement to Decentralize stuff</h4>
                    </section>
                </section>
                <section className="MainInsert">
                    <h5>With ROBE you can <span className="">decentralize every code file</span> like HTML, JS, SVG, <span>by storing it on-chain</span> in a series of chained NFTs... And use it for your app or Dapp just download it when you need directly from the Ethereum chain</h5>
                    <section className="MainActions">
                        <section className="MainActionsDe">
                            <h6>Decentralize Your Code File</h6>
                            <input type="file"></input>
                            <button>Decentralize</button>
                        </section>
                        <section className="MainActionsLo">
                            <h6>Load an Existing Code File</h6>
                            <input type="number" placeholder="NFT ID"></input>
                            <button>Load</button>
                        </section>
                    </section>
                </section>
                <div>
                    <div>
                        <div>
                        </div>
                        <div>
                            <Editor/>
                        </div>
                    </div>
                </div>
                    <section className="MainDesc">
                        <p>ROBE is an Open-Source protocoll to use ERC-721 (Non-Fungible Tokens) in a smart way to decentralize things like coding files, SVG based image, Text and more...</p>
                        <p>This new standard is designed to improve the modern Dapps Decentralization, by revoming as much needs as we can the usage of Centralized Servers or IPFS for the front-end part and even for some coded files.</p>
                        <p>this protocoll allows developer to create chained NFTs for every code page or SVG based Image they needs. Once published in the Blockchain, developers can call the code, decoded it using our decoder published on IPFS (Hoping to be introduced in Metamask or in some browser in the future) and use it for their Dapps or Apps</p>
                        <p>The most exiting things about this protocoll is to start thinking about the Front-End as a future DAOs based decision, by the community and not by a well-known organization. In fact this protocoll can adress a big point of failure in Dapps today, the possibility to shut down a Dapp by shutting down his centralized parts (DNS, Front-End). We hope to see a future of Dapps powered by ROBE and ENS to be totally unstoppable.</p>
                        <p>ROBE is a base layer in our DFO Standard, a Flexible Standard to build DAO without the needs of a well known organization, more at https://dfohub.com</p>
                    </section>
            </article>
        );
    }
});