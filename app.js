/*
    =========================================
    Toastmasters Time Keeper
    =========================================
*/


/* =========================================
   DOM elements
========================================= */

const timer =
    document.querySelector("#timer");

const status =
    document.querySelector("#status");

const startButton =
    document.querySelector("#start");

const resetButton =
    document.querySelector("#reset");

const tabs =
    document.querySelectorAll(".timing-tab");

const greenTime =
    document.querySelector("#green-time");

const yellowTime =
    document.querySelector("#yellow-time");

const redTime =
    document.querySelector("#red-time");


/* =========================================
   Header controls
========================================= */

const soundToggle =
    document.querySelector("#sound-toggle");

const vibrationToggle =
    document.querySelector("#vibration-toggle");

const soundIcon =
    document.querySelector("#sound-icon");

const vibrationIcon =
    document.querySelector("#vibration-icon");


/* =========================================
   Theme
========================================= */

const themeToggle =
    document.querySelector("#theme-toggle");

const themeIcon =
    document.querySelector("#theme-icon");

const themeLabel =
    document.querySelector("#theme-label");


/* =========================================
   Speaker test
========================================= */

const soundTest =
    document.querySelector("#sound-test");


/* =========================================
   Bootstrap Icons
========================================= */

const ICONS = {

    volumeUp: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
            <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
        </svg>
    `,

    volumeMute: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
        </svg>
    `,

    phoneVibrate: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
            <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648"/>
        </svg>
    `,

    phone: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
    `,

    sun: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 16 8M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
    `,

    moon: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
        </svg>
    `,

    play: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
        </svg>
    `,

    pause: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
        </svg>
    `,

    reset: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
        </svg>
    `
};


/* =========================================
   Icon helpers
========================================= */

function setStartButton(label) {

    if (label === "Pause") {

        startButton.innerHTML =
            ICONS.pause +
            `<span>Pause</span>`;

    }

    else {

        startButton.innerHTML =
            ICONS.play +
            `<span>Start</span>`;

    }

}


function setResetButton() {

    resetButton.innerHTML =
        ICONS.reset +
        `<span>Reset</span>`;

}


function setSoundTestButton() {

    soundTest.innerHTML =
        ICONS.volumeUp +
        `<span>Test</span>`;

}


/* =========================================
   Toastmasters timing rules

   All values are seconds.
========================================= */

const timingRules = {

    "Table Topics": {
        green: 60,
        yellow: 90,
        red: 120
    },

    "Ice Breaker": {
        green: 240,
        yellow: 300,
        red: 360
    },

    "Other Speech": {
        green: 300,
        yellow: 360,
        red: 420
    },

    "Evaluation": {
        green: 120,
        yellow: 150,
        red: 180
    },

    "General Evaluator": {
        green: 180,
        yellow: 240,
        red: 300
    }

};


/* =========================================
   Application state
========================================= */

let currentType =
    "Other Speech";

let elapsedSeconds =
    0;

let running =
    false;

let interval =
    null;


/* =========================================
   Alert state
========================================= */

let soundEnabled =
    true;

let vibrationEnabled =
    true;

let greenAlertPlayed =
    false;

let yellowAlertPlayed =
    false;

let redAlertPlayed =
    false;


/* =========================================
   Screen Wake Lock
========================================= */

let wakeLock = null;

async function requestWakeLock() {

    if (!("wakeLock" in navigator)) {

        console.log(
            "Screen Wake Lock is not supported."
        );

        return;

    }

    try {

        wakeLock =
            await navigator.wakeLock.request("screen");

        console.log(
            "Screen Wake Lock is active."
        );

        wakeLock.addEventListener(
            "release",
            () => {

                console.log(
                    "Screen Wake Lock was released."
                );

                wakeLock = null;

            }
        );

    }

    catch (error) {

        console.log(
            "Could not activate Screen Wake Lock:",
            error
        );

    }

}

async function releaseWakeLock() {

    if (wakeLock !== null) {

        try {

            await wakeLock.release();

        }

        catch (error) {

            console.log(
                "Could not release Screen Wake Lock:",
                error
            );

        }

        wakeLock = null;

    }

}


/* Re-acquire the wake lock when the page
   becomes visible again */

document.addEventListener(
    "visibilitychange",
    async () => {

        if (
            document.visibilityState === "visible" &&
            running
        ) {

            await requestWakeLock();

        }

    }
);


/* =========================================
   Audio
========================================= */

let audioContext =
    null;


/*
    Create the AudioContext.
*/

function getAudioContext() {

    if (!audioContext) {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContext) {

            return null;

        }


        audioContext =
            new AudioContext();

    }


    return audioContext;

}


/* =========================================
   Play sound
========================================= */

async function playTone(
    frequency = 660,
    duration = 0.15
) {

    if (!soundEnabled) {

        return false;

    }


    try {

        const context =
            getAudioContext();


        if (!context) {

            console.log(
                "Audio is not supported."
            );

            return false;

        }


        /*
            Make sure Safari has resumed
            the audio context.
        */

        if (
            context.state === "suspended"
        ) {

            await context.resume();

        }


        /*
            If Safari still hasn't allowed
            audio, stop here.
        */

        if (
            context.state !== "running"
        ) {

            console.log(
                "Audio context is not running."
            );

            return false;

        }


        /*
            Create oscillator
        */

        const oscillator =
            context.createOscillator();


        /*
            Create volume control
        */

        const gain =
            context.createGain();


        /*
            Smooth sine-wave tone
        */

        oscillator.type =
            "sine";


        oscillator.frequency.setValueAtTime(
            frequency,
            context.currentTime
        );


        /*
            Start quietly
        */

        gain.gain.setValueAtTime(
            0.0001,
            context.currentTime
        );


        /*
            Fade in
        */

        gain.gain.exponentialRampToValueAtTime(
            0.12,
            context.currentTime + 0.02
        );


        /*
            Fade out
        */

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            context.currentTime + duration
        );


        /*
            Connect audio
        */

        oscillator.connect(
            gain
        );

        gain.connect(
            context.destination
        );


        /*
            Play
        */

        oscillator.start(
            context.currentTime
        );


        oscillator.stop(
            context.currentTime + duration
        );


        return true;

    }

    catch (error) {

        console.error(
            "Audio error:",
            error
        );

        return false;

    }

}


/* =========================================
   Vibration
========================================= */

function vibrate(pattern) {

    if (!vibrationEnabled) {

        return;

    }


    if (
        "vibrate" in navigator
    ) {

        navigator.vibrate(
            pattern
        );

    }

}


/* =========================================
   Green alert
========================================= */

function triggerGreenAlert() {

    playTone(
        660,
        0.15
    );


    vibrate(80);

}


/* =========================================
   Yellow alert
========================================= */

function triggerYellowAlert() {

    playTone(
        740,
        0.15
    );


    setTimeout(
        () => {

            playTone(
                740,
                0.15
            );

        },
        220
    );


    vibrate([
        70,
        120,
        70
    ]);

}


/* =========================================
   Red alert
========================================= */

function triggerRedAlert() {

    playTone(
        520,
        0.18
    );


    setTimeout(
        () => {

            playTone(
                520,
                0.18
            );

        },
        240
    );


    setTimeout(
        () => {

            playTone(
                520,
                0.18
            );

        },
        480
    );


    vibrate([
        120,
        100,
        120,
        100,
        220
    ]);

}


/* =========================================
   Format time
========================================= */

function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);


    const remainingSeconds =
        seconds % 60;


    return (
        String(minutes).padStart(2, "0")
        +
        ":"
        +
        String(remainingSeconds).padStart(2, "0")
    );

}


/* =========================================
   Update timing reference
========================================= */

function updateTimingReference() {

    const rules =
        timingRules[currentType];


    greenTime.textContent =
        formatTime(
            rules.green
        );


    yellowTime.textContent =
        formatTime(
            rules.yellow
        );


    redTime.textContent =
        formatTime(
            rules.red
        );

}


/* =========================================
   Update timer
========================================= */

function updateTimer() {

    timer.textContent =
        formatTime(
            elapsedSeconds
        );


    const rules =
        timingRules[currentType];


    /*
        Green
    */

    if (
        elapsedSeconds >= rules.green
        &&
        !greenAlertPlayed
    ) {

        greenAlertPlayed =
            true;

        triggerGreenAlert();

    }


    /*
        Yellow
    */

    if (
        elapsedSeconds >= rules.yellow
        &&
        !yellowAlertPlayed
    ) {

        yellowAlertPlayed =
            true;

        triggerYellowAlert();

    }


    /*
        Red
    */

    if (
        elapsedSeconds >= rules.red
        &&
        !redAlertPlayed
    ) {

        redAlertPlayed =
            true;

        triggerRedAlert();

    }


    /*
        Timer colour and status
    */

    if (
        elapsedSeconds >= rules.red
    ) {

        status.textContent =
            "Red — Time limit reached";


        timer.style.color =
            "#ff3b30";

    }

    else if (
        elapsedSeconds >= rules.yellow
    ) {

        status.textContent =
            "Yellow — Final stage";


        timer.style.color =
            "#c99400";

    }

    else if (
        elapsedSeconds >= rules.green
    ) {

        status.textContent =
            "Green — On track";


        timer.style.color =
            "#248a3d";

    }

    else {

        status.textContent =
            "Ready to start";


        timer.style.color =
            "";

    }

}


/* =========================================
   Start / Pause
========================================= */

startButton.addEventListener(
    "click",
    async () => {

        /*
            If the timer is already running,
            pause it.
        */

        if (running) {

            clearInterval(
                interval
            );

            running =
                false;

            await releaseWakeLock();

            setStartButton(
                "Start"
            );

            status.textContent =
                "Paused";

            return;
        }


        /*
            IMPORTANT FOR iPHONE / SAFARI

            Prepare the audio while this
            function is running because the
            user has just tapped Start.
        */

        if (soundEnabled) {

            const context =
                getAudioContext();


            if (context) {

                try {

                    if (
                        context.state ===
                        "suspended"
                    ) {

                        await context.resume();

                    }

                }

                catch (error) {

                    console.log(
                        "Could not start audio:",
                        error
                    );

                }

            }

        }


        /*
            Start timer
        */

        running =
            true;

        await requestWakeLock();

        setStartButton(
            "Pause"
        );


        interval =
            setInterval(
                () => {

                    elapsedSeconds++;

                    updateTimer();

                },
                1000
            );

    }
);


/* =========================================
   Reset
========================================= */

resetButton.addEventListener(
    "click",
    async () => {

        clearInterval(
            interval
        );


        running =
            false;

        await releaseWakeLock();

        elapsedSeconds = 0;


        greenAlertPlayed =
            false;

        yellowAlertPlayed =
            false;

        redAlertPlayed =
            false;


        setStartButton(
            "Start"
        );


        updateTimer();

    }
);


/* =========================================
   Timing tabs
========================================= */

tabs.forEach(
    (tab) => {

        tab.addEventListener(
            "click",
            async () => {

                clearInterval(
                    interval
                );


                running =
                    false;

                await releaseWakeLock();


                elapsedSeconds =
                    0;


                greenAlertPlayed =
                    false;

                yellowAlertPlayed =
                    false;

                redAlertPlayed =
                    false;


                currentType =
                    tab.dataset.type;


                tabs.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                tab.classList.add(
                    "active"
                );


                setStartButton(
                    "Start"
                );


                updateTimingReference();

                updateTimer();

            }
        );

    }
);


/* =========================================
   Sound toggle
========================================= */

soundToggle.addEventListener(
    "click",
    () => {

        soundEnabled =
            !soundEnabled;


        soundToggle.classList.toggle(
            "active",
            soundEnabled
        );


        soundToggle.setAttribute(
            "aria-pressed",
            String(soundEnabled)
        );


        soundIcon.innerHTML =
            soundEnabled
                ? ICONS.volumeUp
                : ICONS.volumeMute;

    }
);


/* =========================================
   Vibration toggle
========================================= */

vibrationToggle.addEventListener(
    "click",
    () => {

        vibrationEnabled =
            !vibrationEnabled;


        vibrationToggle.classList.toggle(
            "active",
            vibrationEnabled
        );


        vibrationToggle.setAttribute(
            "aria-pressed",
            String(vibrationEnabled)
        );


        vibrationIcon.innerHTML =
            vibrationEnabled
                ? ICONS.phoneVibrate
                : ICONS.phone;

    }
);


/* =========================================
   Speaker TEST button
========================================= */

soundTest.addEventListener(
    "click",
    async () => {

        /*
            Save the current setting.
        */

        const previousState =
            soundEnabled;


        /*
            Force sound ON.
        */

        soundEnabled =
            true;


        /*
            IMPORTANT:
            Wait for the sound to finish
            initializing before restoring
            the previous setting.
        */

        await playTone(
            660,
            0.25
        );


        /*
            Restore setting.
        */

        soundEnabled =
            previousState;

    }
);


/* =========================================
   Theme toggle
========================================= */

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-mode"
        );


        const darkMode =
            document.body.classList.contains(
                "dark-mode"
            );


        if (darkMode) {

            themeIcon.innerHTML =
                ICONS.moon;


            themeLabel.textContent =
                "Dark";


            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        }

        else {

            themeIcon.innerHTML =
                ICONS.sun;


            themeLabel.textContent =
                "Light";


            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    }
);


/* =========================================
   Initial state
========================================= */

soundIcon.innerHTML =
    ICONS.volumeUp;

vibrationIcon.innerHTML =
    ICONS.phoneVibrate;

themeIcon.innerHTML =
    ICONS.sun;

setStartButton(
    "Start"
);

setResetButton();

setSoundTestButton();

updateTimingReference();

updateTimer();