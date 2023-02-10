function Set_Button_Codes_Here () {
    ALL_STOP = 82
    INC_FWD_SPEED = 98
    POWER_BUTTON = 224
    INC_LEFT_TURN = 34
    INC_RIGHT_TURN = 194
    BACKWARDS = 168
    RESET_SPEED = 66
    INC_SPEED = 152
    REDUCE_SPEED = 56
}
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    COMMAND = makerbit.irButton()
})
let REDUCE_SPEED = 0
let INC_SPEED = 0
let RESET_SPEED = 0
let BACKWARDS = 0
let INC_RIGHT_TURN = 0
let INC_LEFT_TURN = 0
let POWER_BUTTON = 0
let INC_FWD_SPEED = 0
let ALL_STOP = 0
let COMMAND = 0
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
Set_Button_Codes_Here()
basic.showIcon(IconNames.Diamond)
basic.pause(1000)
let FWD = true
let FSPEED = 50
let SPDMAX = 245
let TRIM = 10
let LEFT = FSPEED
let RIGHT = FSPEED
let TSPEED = 40
let LAST = -1
COMMAND = 0
basic.clearScreen()
led.enable(true)
basic.forever(function () {
    let MENU_BUTTON = 0
    if (COMMAND <= 0) {
    	
    } else if (COMMAND == RESET_SPEED) {
        FWD = true
        LEFT = FSPEED
        RIGHT = FSPEED
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, FSPEED)
    } else if (COMMAND == ALL_STOP) {
        maqueen.motorStop(maqueen.Motors.All)
        music.playTone(131, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
    } else if (COMMAND == INC_LEFT_TURN) {
        if (LEFT > TRIM) {
            LEFT += 0 - TRIM
        } else {
            LEFT = 0
            if (RIGHT < SPDMAX) {
                RIGHT += TRIM
            } else {
                RIGHT = SPDMAX
            }
        }
        if (FWD) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
        }
    } else if (COMMAND == INC_RIGHT_TURN) {
        if (RIGHT > TRIM) {
            RIGHT += 0 - TRIM
        } else {
            RIGHT = 0
            if (LEFT < SPDMAX) {
                LEFT += TRIM
            } else {
                LEFT = SPDMAX
            }
        }
        if (FWD) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
        }
    } else if (COMMAND == INC_SPEED) {
        FWD = true
        if (LEFT < SPDMAX) {
            LEFT += TRIM
        } else {
            LEFT = SPDMAX
        }
        if (RIGHT < SPDMAX) {
            RIGHT += TRIM
        } else {
            RIGHT = SPDMAX
        }
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
    } else if (COMMAND == BACKWARDS) {
        FWD = false
        LEFT = FSPEED
        RIGHT = FSPEED
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
    } else if (COMMAND == INC_SPEED) {
        if (LEFT < SPDMAX) {
            LEFT += TRIM
        } else {
            LEFT = SPDMAX
        }
        if (RIGHT < SPDMAX) {
            RIGHT += TRIM
        } else {
            RIGHT = SPDMAX
        }
        if (FWD) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
        }
    } else if (COMMAND == REDUCE_SPEED) {
        if (LEFT > TRIM) {
            LEFT += 0 - TRIM
        } else {
            LEFT = 0
        }
        if (RIGHT > TRIM) {
            RIGHT += 0 - TRIM
        } else {
            RIGHT = 0
        }
        if (FWD) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
        }
    } else if (COMMAND == MENU_BUTTON) {
        FWD = true
        LEFT = TSPEED
        RIGHT = TSPEED
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
    } else {
    	
    }
    COMMAND = 0
})
