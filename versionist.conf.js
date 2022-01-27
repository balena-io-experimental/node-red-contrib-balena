module.exports = {

    template: [
        '## {{version}} - {{moment date "Y-MM-DD"}}',
        '',
        '{{#each commits}}',
        '* {{capitalize this.subject}}',
        '{{/each}}'
    ].join('\n')

};