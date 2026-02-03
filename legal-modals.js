// Legal Modals - Disclaimer & Privacy Policy
// Include this script in all pages

function showDisclaimer() {
    const modal = document.getElementById('legalModal');
    const title = document.getElementById('legalModalTitle');
    const content = document.getElementById('legalModalContent');
    
    title.innerHTML = '⚠️ Disclaimer';
    content.innerHTML = `
        <p><strong>USE AT YOUR OWN RISK</strong></p>
        <p>Gelatine Network is an experimental blockchain platform. By using this website and interacting with the Gelatine Network, you acknowledge and agree to the following:</p>
        
        <ul>
            <li><strong>Experimental Technology:</strong> This blockchain and all associated smart contracts are experimental and may contain bugs or vulnerabilities.</li>
            <li><strong>No Warranty:</strong> The software is provided "AS IS" without warranty of any kind, express or implied.</li>
            <li><strong>Financial Risk:</strong> Cryptocurrencies and NFTs have no intrinsic value. You may lose all funds you invest or use on this platform.</li>
            <li><strong>No Investment Advice:</strong> Nothing on this site constitutes investment, legal, or financial advice.</li>
            <li><strong>Smart Contract Risk:</strong> Smart contracts cannot be reversed once executed. Always verify transaction details before confirming.</li>
            <li><strong>Network Changes:</strong> The network may undergo changes, upgrades, or discontinuation at any time without notice.</li>
        </ul>
        
        <p><strong>By continuing to use this website, you accept full responsibility for any and all risks associated with cryptocurrency transactions and blockchain interactions.</strong></p>
    `;
    
    modal.style.display = 'flex';
}

function showPrivacy() {
    const modal = document.getElementById('legalModal');
    const title = document.getElementById('legalModalTitle');
    const content = document.getElementById('legalModalContent');
    
    title.innerHTML = '🔒 Privacy Policy';
    content.innerHTML = `
        <p><strong>Last Updated: February 2026</strong></p>
        
        <h3>Data Collection</h3>
        <p>This website is a decentralized application (dApp) interface. We do NOT collect, store, or process any personal data on our servers.</p>
        
        <h3>What We Don't Collect:</h3>
        <ul>
            <li>Email addresses</li>
            <li>Names or personal identifiers</li>
            <li>IP addresses (no server-side logging)</li>
            <li>Cookies or tracking pixels</li>
            <li>Wallet private keys or seed phrases</li>
        </ul>
        
        <h3>Blockchain Transparency</h3>
        <p>All blockchain transactions are public and permanent. Your wallet address and transaction history are visible on the public ledger.</p>
        
        <h3>Third-Party Services</h3>
        <p>This website may interact with:</p>
        <ul>
            <li><strong>MetaMask:</strong> Your browser wallet extension (see MetaMask's privacy policy)</li>
            <li><strong>IPFS/Pinata:</strong> For NFT image storage (decentralized and public)</li>
            <li><strong>RPC Providers:</strong> To connect to the Gelatine Network blockchain</li>
        </ul>
        
        <h3>Local Storage</h3>
        <p>Your browser may store connection preferences locally. This data never leaves your device.</p>
        
        <h3>Your Responsibilities</h3>
        <ul>
            <li>Keep your private keys and seed phrases secure</li>
            <li>Never share sensitive wallet information</li>
            <li>Understand that blockchain transactions are irreversible</li>
        </ul>
        
        <p><strong>Questions?</strong> Contact: gelatine@pine.ink</p>
    `;
    
    modal.style.display = 'flex';
}

function closeLegalModal() {
    document.getElementById('legalModal').style.display = 'none';
}
