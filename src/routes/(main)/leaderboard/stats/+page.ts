import { redirect } from '@sveltejs/kit'
import { base } from '$app/paths'

export const load = async ({ parent }) => {
    redirect(301, `${base}/leaderboard/stats/darkness-of-the-abyss`)
}
