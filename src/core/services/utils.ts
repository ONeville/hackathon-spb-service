export class AppUtils{
    static generateRandomNumber(min: number, max: number): number {
        const randomDecimal = Math.random();
        const randomInRange = min + randomDecimal * (max - min);
        return Math.floor(randomInRange); // Use Math.round for rounding to the nearest integer
    }
    static generateRandomWord(length: number): string {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomWord = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomWord += characters.charAt(randomIndex);
        }
        return randomWord;
    }
    static generateRandomDOB(minAge: number, maxAge: number): Date {
        if (minAge >= maxAge) {
            throw new Error('Invalid age range: minAge should be less than maxAge.');
        }

        const currentYear = new Date().getFullYear();
        const minBirthYear = currentYear - maxAge;
        const maxBirthYear = currentYear - minAge;

        const randomBirthYear = Math.floor(
            Math.random() * (maxBirthYear - minBirthYear + 1) + minBirthYear,
        );

        const randomMonth = Math.floor(Math.random() * 12) + 1;
        const randomDay = Math.floor(Math.random() * 28) + 1;
        const randomDOB = new Date(randomBirthYear, randomMonth - 1, randomDay);

        return randomDOB;
    }
}