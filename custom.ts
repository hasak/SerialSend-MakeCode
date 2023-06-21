
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.calliope.cc/blocks/custom
*/

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
        serial.writeLine("{id:"+control.deviceName()+","+key+":"+val+"}");
    }

    //% block="magnitude of 3d vector | at x $x and y $y and z $z"
    //% inlineInputMode=external
    export function mag3d(x: number, y: number, z: number): number {
        return Math.sqrt(x * x + y * y + z * z);
    }
}
