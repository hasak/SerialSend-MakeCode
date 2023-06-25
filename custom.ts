
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.calliope.cc/blocks/custom
*/

function replaceForJson(input: string): string{
    let ret=input;
    for(let i=0;i<input.length;i++){
        if(input.charAt(i)==':' || input.charAt(i)==','){
            ret=ret.substr(0,i)+"_"+ret.substr(i+1);
        }
    }
    return ret;
}

/**
 * Custom blocks
 */
//% weight=100 color=#230069 icon=""
namespace custom {
    
    /**
     * Send key:value pair over serial
     * @param key key, eg:"key"
     * @param val value, eg:"value"
     */

    //% block="send over serial $key = $val"
    //% key.shadowOptions.toString=true
    //% val.shadowOptions.toString=true
    export function sendSerial(key: string, val: string): void {
        key = replaceForJson(key); // replacing ':' and ',' with '_' to
        val = replaceForJson(val); // not conflict with JSON
        serial.writeLine("{id:"+control.deviceName()+","+key+":"+val+"}");
    }
}
