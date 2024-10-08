body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: #fff;
    background: linear-gradient(135deg, #1a1a1a, #333, #1a1a1a);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    overflow: auto;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.container {
    width: 80%;
    max-width: 600px;
    padding: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: #2c2c2c;
    margin-top: 20px;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
    position: relative;
    overflow: hidden;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

h1 {
    color: #ffcc00;
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 0 0 10px #ffcc00;
    cursor: pointer;
    transition: transform 0.5s;
}

.rotate {
    animation: rotateLogo 1s ease-in-out forwards;
}

@keyframes rotateLogo {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.section {
    margin: 20px 0;
}

.jackpot-container {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #222;
    border-radius: 10px;
    box-shadow: 0 0 10px #00ffcc;
    text-align: center;
    position: relative;
}

.jackpot-title {
    font-size: 1.5em;
    color: #ff00ff;
    text-shadow: 0 0 10px #ff00ff;
}

.jackpot-amount {
    font-size: 2em;
    color: #00ffcc;
    text-shadow: 0 0 10px #00ffcc;
    margin-top: 10px;
}

.jackpot-info {
    font-size: 1em;
    color: #ffcc00;
    margin-top: 10px;
}

.tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    color: #ff00ff;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Position above the tooltip */
    left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #0ff;
    color: #0d0d0d;
    border: none;
    border-radius: 5px;
    margin: 10px;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 10px #0ff;
}

button:hover {
    background-color: #ff00ff;
    box-shadow: 0 0 20px #ff00ff;
    transform: scale(1.05);
}

button:active {
    transform: scale(0.95);
    box-shadow: 0 0 15px #0ff;
}

#connectButton {
    background-color: #f6851b;
    box-shadow: 0 0 10px #f6851b;
}

#connectButton:hover {
    background-color: #e2761b;
    box-shadow: 0 0 20px #e2761b;
}

input, .slider {
    -webkit-appearance: none;
    appearance: none;
    width: calc(100% - 22px);
    max-width: 300px;
    height: 15px;
    background: #333;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
    border-radius: 5px;
    margin: 10px 0;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #ffcc00;
    cursor: pointer;
    border-radius: 50%;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #ffcc00;
    cursor: pointer;
    border-radius: 50%;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table, th, td {
    border: 1px solid #555;
}

th, td {
    padding: 10px;
    text-align: center;
}

th {
    background-color: #333;
    color: #00ffcc;
    text-shadow: 0 0 10px #00ffcc;
}

td a {
    color: #ffcc00;
    text-decoration: none;
}

td a:hover {
    color: #ff6600;
    text-decoration: underline;
}

.win-amount {
    color: #28a745;
}

.lose-amount {
    color: #dc3545;
}

#coin {
    width: 100px;
    height: 100px;
    margin: 20px auto;
    transition: transform 1s ease-in-out;
}

.flip {
    transform: rotateY(1800deg);
}

.message {
    font-size: 1.2em;
    font-weight: bold;
    color: #ffcc00;
    margin-top: 20px;
}

.win {
    color: #28a745;
}

.lose {
    color: #dc3545;
}

#userBalance {
    font-size: 1.5em;
    font-weight: bold;
    color: #00ffcc;
    text-shadow: 0 0 10px #00ffcc;
}

#totalWinsLosses {
    margin-top: 10px;
    font-size: 1.2em;
    color: #ffcc00;
}

.profit {
    color: #28a745;
    text-shadow: 0 0 10px #28a745;
    font-size: 1.5em;
    margin-top: 10px;
}

.loss {
    color: #dc3545;
    text-shadow: 0 0 10px #dc3545;
    font-size: 0.9em; /* Smaller font for Total Losses */
    margin-top: 10px;
}

.floating-emoji {
    position: absolute;
    font-size: 2em;
    pointer-events: none;
    animation: floatEmoji 5s ease-in-out infinite;
}

@keyframes floatEmoji {
    0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-100px) translateX(50px) rotate(360deg); opacity: 0; }
}

.animated-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    animation: bgAnimation 20s linear infinite alternate;
    z-index: -1;
    opacity: 0.5;
}

@keyframes bgAnimation {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
}

.collapse-button {
    background-color: #555;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #555;
}

.collapse-content {
    display: none;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}

#progressBarContainer {
    width: 100%;
    background-color: #333;
    border-radius: 5px;
    margin: 20px 0;
    display: none;
}

#progressBar {
    width: 0%;
    height: 10px;
    background-color: #0ff;
    border-radius: 5px;
    animation: progress 2s linear infinite;
}

@keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
}

.flip-label {
    font-size: 2em;
    font-weight: bold;
    color: #ffcc00;
    text-shadow: 0 0 10px #ffcc00;
    display: none;
}

.flash {
    animation: flash 1s infinite;
}

@keyframes flash {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}

@keyframes colorFlash {
    0% { color: #ffcc00; }
    25% { color: #ff00ff; }
    50% { color: #00ffcc; }
    75% { color: #ff6600; }
    100% { color: #ffcc00; }
}

.rapid-flash {
    animation: colorFlash 0.5s infinite;
}
