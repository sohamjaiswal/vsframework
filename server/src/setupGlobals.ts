import { Window } from "./components/window"

export const setupGlobals = () => {
    const window = new Window(0,0)
    return {window}
}