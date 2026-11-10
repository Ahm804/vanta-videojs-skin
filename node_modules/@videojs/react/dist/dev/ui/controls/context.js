"use client";
import { createContext, useContext } from "react";
//#region src/ui/controls/context.tsx
const ControlsContext = createContext(null);
const ControlsContextProvider = ControlsContext.Provider;
function useControlsContext() {
	const ctx = useContext(ControlsContext);
	if (!ctx) throw new Error("Controls compound components must be used within a Controls.Root");
	return ctx;
}
function useOptionalControlsContext() {
	return useContext(ControlsContext);
}
//#endregion
export { ControlsContextProvider, useControlsContext, useOptionalControlsContext };

//# sourceMappingURL=context.js.map