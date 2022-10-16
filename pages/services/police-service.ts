import { POLICE_API_BASE } from "../environments";
import { PoliceForcesListDTO } from "../types/police-types";

/**
 * Make a GET request to the police force api
 */
async function _get<T extends object>(path: string): Promise<T> {
    const res = await fetch(`${POLICE_API_BASE}${path}`);

    // TODO generic error handling here?

    const data = await res.json() as T;

    // TODO add some form of validation here?
    return data;
}

/**
 * Get a list of all forces available in the API
 */
export async function getForces(){
    return _get<PoliceForcesListDTO>('/forces');
}