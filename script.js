const quote = document.querySelector("#demo");
quote.onclick = () => {
    let quotes = Math.floor(Math.random() * 21);
    switch(quotes){
        case 0: 
            document.querySelector("#getQuote").innerHTML = "\"You can totally do this!\"";
            break;
        case 1:
            document.querySelector("#getQuote").innerHTML = "\"Impossible is for the Unwilling.\"";
            break;
        case 2:
            document.querySelector("#getQuote").innerHTML = "\"Try again. Fail again. Fail better.\"";
            break;
        case 3:
            document.querySelector("#getQuote").innerHTML = "\"Don't tell people your plans. Show them your results.\"";
            break;
        case 4:
            document.querySelector("#getQuote").innerHTML = "\"I Can and I Will.\"";
            break;
        case 5:
            document.querySelector("#getQuote").innerHTML = "\"Take the risk or lose the chance.\"";
            break;
        case 6:
            document.querySelector("#getQuote").innerHTML = "\"Prove them wrong.\"";
            break;
        case 7:
            document.querySelector("#getQuote").innerHTML = "\"Good things happen to those who hustle.\"";
            break;
        case 8:
            document.querySelector("#getQuote").innerHTML = "\"There is no Saint without a past, no Sinner without a future.\"";
            break;
        case 9:
            document.querySelector("#getQuote").innerHTML = "\"Fight till the last gasp.\"";
            break;
        case 10:
            document.querySelector("#getQuote").innerHTML = "\"You see yourself as so little, but others see you as so much bigger than what you think of yourself.\"";
            break;
        case 11:
            document.querySelector("#getQuote").innerHTML = "\"One day the people that don’t even believe in you will tell everyone how they met you.\"";
            break;
        case 12:
            document.querySelector("#getQuote").innerHTML = "\"What we think, we become.\"";
            break;
        case 13:
            document.querySelector("#getQuote").innerHTML = "\"Everything you can imagine is real.\"";
            break;
        case 14:
            document.querySelector("#getQuote").innerHTML = "\"Have enough courage to start and enough heart to finish.\"";
            break;
        case 15:
            document.querySelector("#getQuote").innerHTML = "\"Determine your priorities and focus on them.\"";
            break;
        case 16:
            document.querySelector("#getQuote").innerHTML = "\"Yesterday you said tomorrow. Just do it.\"";
            break;
        case 17:
            document.querySelector("#getQuote").innerHTML = "\"The time is always right to do what is right.\"";
            break;
        case 18:
            document.querySelector("#getQuote").innerHTML = "\"May your choices reflect your hopes, not your fears.\"";
            break;
        case 19:
            document.querySelector("#getQuote").innerHTML = "\"The true meaning of life is to plant trees, under whose shade you do not expect to sit.\"";
            break;
        case 20:
            document.querySelector("#getQuote").innerHTML = "\"No one can stop me.\"";
            break;
        default:
            document.querySelector("#getQuote").innerHTML = "\"If you have a passion for it then it doesn't matter if you're good or bad because you have a passion. If you do well, the result could be having your dream come true.\"";
            break;
    }
}
