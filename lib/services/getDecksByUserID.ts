import { getEMFork } from "../database/orm";
import { Deck, User } from "../entities";

export default async function getDecksByUserID(userID: User["id"]) {
    const emFork = await getEMFork()
    const decks = await emFork.find<Deck>("Deck", { created_by: userID })

    return decks
}