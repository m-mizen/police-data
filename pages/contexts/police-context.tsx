import React, { createContext, PropsWithChildren } from "react";
import { PoliceForce } from "../types/police-types";

export interface PoliceForcesContext{
    all: string;
    byId: {
        [key: string]: PoliceForce
    },
}

export const policeForcesContext = createContext<PoliceForcesContext>({
    byId: {},
    all: [],
});

type Props = PropsWithChildren<{
    forces: PoliceForce[];
}>;

export const PoliceForcesProvider: React.FC<Props> = ({forces, children}) => {
    const byId = Object.fromEntries(forces.map((force) => [force.id, force]));
    return (
        <policeForcesContext.Provider value={{
            byId,
            allIds: forces
        }}>
            {children}
        </policeForcesContext.Provider>
    );
}