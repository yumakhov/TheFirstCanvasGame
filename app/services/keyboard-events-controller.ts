
interface IKeyState {
    keyCode: number;
    pressed: boolean;
}

class KeyState implements IKeyState {
    keyCode: number;
    pressed: boolean;
    constructor(keyCode: number, pressed: boolean){
        this.keyCode = keyCode;
        this.pressed = pressed;
    }
}

export default class KeyboardEventsController {
    left: number = 37;
    up: number = 38;
    right: number = 39;
    down: number = 40;
    space: number = 32;

    private keyStates: IKeyState[] = [];

    constructor(){        
    }

    UpdateKeyState(keyCode: number, isPressed: boolean): void {
        var keyState = this.GetKeyState(keyCode);
        if (keyState){
            keyState.pressed = isPressed;            
        } else {
            this.keyStates.push(new KeyState(keyCode, isPressed));
        }
    }

    IsPressed(keyCode: number): boolean {
        let keyState = this.GetKeyState(keyCode);
        return keyState ? keyState.pressed : false;
    }

    GetKeyState(keyCode: number): IKeyState {
        let results = this.keyStates.filter(ks => ks.keyCode == keyCode);
        if (!results.length) {
            return null;
        }

        return results[0];
    }

};

