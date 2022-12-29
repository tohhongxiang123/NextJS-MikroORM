import { getEMFork } from "../database/orm";
import { Deck } from "../entities";

export default async function createDeck(deck: Deck) {
    const emFork = await getEMFork()

    console.log("Received", deck)
    const newDeck = emFork.create<Deck>("Deck", deck)
    emFork.persistAndFlush(newDeck)

    return newDeck
}