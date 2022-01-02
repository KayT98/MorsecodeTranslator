const morseCode = {
                    //alphabets
                    "A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
					"E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
					"I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
					"M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
					"Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
					"U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
					"Y" : "-.--", "Z" : "--..", "Ü" : "..--", "Á" : ".--.-",
                    "É" : "..-..", "Ä": ".-.-", "Ñ" : "--.--", "Ö" : "---.", 

					//numbers
					"0" : "-----",
					"1" : ".----", "2" : "..---", "3" : "...--",
					"4" : "....-", "5" : ".....", "6" : "-....",
					"7" : "--...", "8" : "---..", "9" : "----.",

                    //symbols
                    "&" : ".-...", "'" : ".----.", "@" : ".--.-.",
                    "," : "--..--", ":" : "---...", " " : "/", "(" : "-.--.",
                    ")" : "-.--.-", "_" : "..--.-", "!" : "-.-.--", "=" : "-...-",
                    "+" : ".-.-.",  '"' : ".-..-.", "$" : "...-..-", "." : ".-.-.-",
                    "?" : "..--..",
}

//changing options
function toggle() {
    const decode = "Morse2Text";
    const encode = "Text2Morse";

    let toggleBtn = document.getElementById('toggle').innerHTML;

        if (toggleBtn == encode) {
            document.getElementById('in').value = "";
            document.getElementById('out').value = "";
            
            document.getElementById('toggle').innerHTML = decode;
            document.getElementById('in').placeholder = "Paste your text here...";
            document.getElementById('convert').setAttribute('onclick', 'Text2Morse()');
        }
        else {
            document.getElementById('in').value = "";
            document.getElementById('out').value = "";

            document.getElementById('toggle').innerHTML = encode;
            document.getElementById('in').placeholder = "Paste your Morse here...";
            document.getElementById('convert').setAttribute('onclick', 'Morse2Text()');
        }
}


//convert text to morse 
    function Text2Morse() {
    let text = document.getElementById('in').value;

    text = text.toUpperCase();

    let am1 = text.split(''); //am = array morse

    let am2 = am1.map(i=>{
        if(morseCode[i]){
            return morseCode[i];
        }
        else {
            return i;
        }
        });

        let mc = am2.join(' ');
        document.getElementById('out').value = mc;
    }
    

// Object.key() is used here to search values in an obkect of the array
    function getKey(obj,val) {
        return Object.keys(obj).find(key => obj[key] === val);
    }

//convert morse code to text
    function Morse2Text(){

        let mc = document.getElementById('in').value;

        let am1 = mc.split(' '); //important to have space 

        let am2 = am1.map(i=>{
            if (getKey(morseCode,i)){
                return getKey(morseCode,i);
            }
            else if (i=='') {
                return " ";
            }
            else if (i!=morseCode){
                return "Wrong Morse code!";                
            }
            else {
                return i;
            }
        });

        let text = am2.join('').replace(/\s\s+/g, ' ');
        document.getElementById('out').value = text;  
    }

    //copy text from output
    function copied() {
        const copyText = document.getElementById("out");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    
        const tooltip = document.getElementById("tooltip");
        tooltip.innerHTML = "Copied";
    }

    function copy() {
        const tooltip = document.getElementById("tooltip");
        tooltip.innerHTML = "Copy to Clipboard";
    }