"use strict";
var arvish = require('arvish');
var configstore = require('configstore');
var history = new configstore('translate-history');

var histories = JSON.parse(history.get('history') || '[]').reverse();
var items = [];
histories.forEach(input => {
    items.push({
        title: input.from,
        subtitle: `${input.to} Date: ${new Date(input.time).toDateString()}`,
        text: {
            copy: input.from,
            largetype: `${input.from}\n${input.to}`
        }
    })
});
if (items.length === 0) {
    items.push({
        title: 'No history.'
    })
}
arvish.output(items);