function Button(text) {
    this.text = textButton
}
Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);

        });
        this.$element.appendTo($('body'));
    }
}

var textButton = prompt('Enter Text Button');
var btn1 = new Button(textButton);
btn1.create();