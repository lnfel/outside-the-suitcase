import { error } from '@sveltejs/kit'

export const load = () => {
    error(404, 'Raid Not Found')
}
