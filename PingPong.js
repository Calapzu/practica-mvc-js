(function () {

    Board = function (width, height) {
        this.width = width;
        this.height = height;

        this.playing = false;
        this.game_over = false;

        this.bars = [];
        this.ball = null;

        this.playing = false;
    }

    Board.prototype = {

        get elements() {

            var elements = this.bars.map(function (bar) { return bar; });
            elements.push(this.ball);
            return elements;
        }

    }

})();
