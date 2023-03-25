import { screenArranger } from "./utils/screen-arranger";

export class Configurator {
    MAX_SCREENS: number;
    SCREENS_ARR: Array<number> //implement interface here
    constructor(MAX_SCREENS: number) {
        this.MAX_SCREENS = MAX_SCREENS
        this.SCREENS_ARR = screenArranger(Array.from(Array(MAX_SCREENS).keys()).map((x) => x + 1))
    }
}