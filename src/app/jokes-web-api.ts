import { Joke } from './joke';
import { InMemoryDbService } from "angular-in-memory-web-api";

export class JokesWebApi implements InMemoryDbService {
    createDb() {
        const jokes: Joke[] = [
            {
                id: 1,
                setup: 'What is Bruce Lee\'s favourite drink',
                punchline: 'Wataaah'
            },
            {
                id: 2,
                setup: 'How does NASA organize their office parties',
                punchline: 'They planet'
            },
            {
                id: 3,
                setup: 'What kind of shoes do Ninja\'s wear?',
                punchline: 'Sneakers'
            }
        ];

        return { jokes };
    }


}