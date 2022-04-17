import { exec } from 'child_process';

export default function sassTranspiler() {
    const sassFile = `style/css.scss`;
    const cssMinFile = `style/css/css.min.css`;
    const cssDevFile = `style/dev_css/css.css`;

    const command = `sass --style=compressed
        ${sassFile} ${cssMinFile} &&
        sass ${sassFile} ${cssDevFile}`
    ;

    var transpile = () => {
        exec(command.replace(/\s{2,}/g, " "), { shell: '/bin/sh' }, (err, stdout, stderr) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return;
            }
        });
    }

    return {
        transpile
    }
}