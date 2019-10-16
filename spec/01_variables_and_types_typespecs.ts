describe('Variables in TypeScript', () => {
    it('any typing', () => {
        let x;

        x = 'dog';

        x = 3.14;

        x = function (a, b) {
            return a + b;
        };
    });

    it('implicit typing', () => {
        const x = 'dog';
    });

    it('Const cannot be reassigned.', () => {
        const PI = 3.14159;

        //        PI = 4;

        const favoriteNumbers = [9, 20, 100];
        //        favoriteNumbers = [3];
        favoriteNumbers[1] = 22;
    });

    it('var is evil and you should not use it', () => {
        const age = 22;

        if (age > 21) {
            const message = 'Old enough';
        }
    });
});




