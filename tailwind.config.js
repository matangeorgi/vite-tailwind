/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
    safelist: [
        'border',
        'rounded',
        'outline',
        'italic',
        'not-italic',
        'underline',
        'shadow',
        'm-auto',
        'w-7/8',
        {
            pattern:
                /bg-(slate|gray|zinc|neutral|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|red|orange)-(50|100|200|300|400|500|600|700|800|900)/,
            pattern: /bg-(white|black)/,
            pattern:
                /text-(slate|gray|zinc|neutral|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|red|orange)-(50|100|200|300|400|500|600|700|800|900)/,
            pattern: /text-(xs|sm|lg|xl|base)/,
            pattern: /text-(2|3|4|5|6|7|8|9)x/,
            pattern: /text-(left|right|center|justify|start|end|white|black)/,
            pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
            pattern:
                /border-(slate|gray|zinc|neutral|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|red|orange)-(50|100|200|300|400|500|600|700|800|900)/,
            pattern:
                /shadow-(slate|gray|zinc|neutral|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|red|orange)-(50|100|200|300|400|500|600|700|800|900)/,
            pattern: /shadow-(white|black)/,
            pattern: /border-(solid|dotted|dashed|double|none|black|white)/,
            pattern: /border-(0|2|4|8)/,
            pattern: /border-(x|y)/,
            pattern: /border-(x|y)-(0|2|4|8)/,
            pattern: /border-(t|r|b|l)/,
            pattern: /border-(t|r|b|l)-(0|2|4|8)/,
            pattern: /rounded-(sm|md|lg|xl|2xl|3xl|full|none|t|r|b|l|tr|tl|br|bl)/,
            pattern: /rounded-(t|r|b|l)-(full|none)/,
            pattern: /rounded-(t|r|b|l)-(sm|md|lg|xl|2xl|3xl)/,
            pattern: /rounded-(tr|tl|br|bl)-(full|none)/,
            pattern: /rounded-(tr|tl|br|bl)-(sm|md|lg|xl|2xl|3xl)/,
            pattern:
                /p-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /p(x|y)-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /p(t|r|b|l)-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /m-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /m(x|y)-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /m(t|r|b|l)-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /-m(t|r|b|l)-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /-m(x|y)-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /-m-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern:
                /(w|h)-(0|px|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
            pattern: /(w|h)-(auto|full|screen|fit|min|max)/,
        },
    ],
};

/*
safelist: [
        {
            pattern: /./,
        },
    ],*/

/*

 
            
            
            

            
           
            

            
            

pattern: /(w|h)-1\/2/,
            pattern: /(w|h)-(1|2)\/3/,
            pattern: /(w|h)-(1|2|3)\/4/,
            pattern: /(w|h)-(1|2|3|4)\/5/,
            pattern: /(w|h)-(1|2|3|4|5)\/6/,
            pattern: /w-(1|2|3|4|5|6|7|8|9|10|11)\/12/,*/
