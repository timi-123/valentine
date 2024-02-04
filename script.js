let attempts = 0;
let yesClickedCount = 0;
let yesButtonSizeConstant = false; // Flag to determine whether to keep the Yes button constant size

function yesClicked() {
    if (yesClickedCount < 4) {
        yesClickedCount++;
    }

    document.querySelector('.container').innerHTML = `
        <h1>Одлично, се гледаме на 14 февруари.</h1>
        <p>Ќе добиете подетални инструкции за времето и местото! ТЕ САКАМ &lt;3</p>
    `;
}

function noClicked() {
    attempts++;

    if (attempts > 3) {
        attempts = 1; // Reset attempts after all options are used
        yesButtonSizeConstant = true;
    }

    let buttonText = '';
    let fontSize = 16;

    for (let i = 0; i < attempts; i++) {
        buttonText += 'No! ';
        fontSize *= 2;
    }

    const messages = ["You'll regret it!", "Try again!", "Wrong answer"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    document.querySelector('.buttons').innerHTML = `
        <button class="no" onclick="noClicked()">${randomMessage}</button>
        <button class="yes" onclick="yesClicked()" style="font-size: ${yesButtonSizeConstant ? fontSize : 'inherit'}px">Yes</button>
    `;
}
